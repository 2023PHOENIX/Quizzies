import {
  QaRepository,
  QuizRepository,
  PollRepository,
  UserRepository,
} from "../repository/index.js";

class QuizService {
  constructor() {
    this.quizRepository = new QuizRepository();
    this.qaRepository = new QaRepository();
    this.pollRepository = new PollRepository();
    this.userRepository = new UserRepository();
  }

  // TODO: add the reference of the quiz to user quiz array.
  async createQuiz(data) {
    try {
      const response = await this.quizRepository.create(data);

      if (response.quizType === "Q&A") {
        const qa = await this.qaRepository.create({ _id: response._id });
        for (let i = 0; i < response.questions.length; i++) {
          qa.questions[i] = { correctAttempt: 0, incorrectAttempt: 0 };
        }
        qa.save();
      } else if (response.quizType === "Poll") {
        const poll = await this.pollRepository.create({ _id: response._id });

        for (let i = 0; i < response.questions.length; i++) {
          poll.questions[i] = new Array(
            response.questions[i].options.length,
          ).fill(0);
        }

        poll.save();
      }
      await this.userRepository.appendQuiz(response.userId, response._id);

      return response;
    } catch (e) {
      console.log(e.message);
      throw e;
    }
  }

  async get(id) {
    try {
      const response = await this.quizRepository.get(id);
      await this.quizRepository.incrementImpression(id);
      return response;
    } catch (e) {
      throw e;
    }
  }

  // HACK: data will be array of choosen answer by user.
  async submit(id, userAnswers) {
    try {
      const quiz = await this.quizRepository.get(id);

      if (!quiz) {
        throw new Error("Quiz or Qa not found");
      }

      if (quiz && quiz.quizType === "Q&A") {
        //
        const qa = await this.qaRepository.get(id);
        if (!qa) {
          throw new Error("qa not found");
        }
        quiz.questions.forEach((question, i) => {
          // populate the qa if question array doesn't exist.
          if (parseInt(question.correctAnswer) === parseInt(userAnswers[i])) {
            qa.questions[i].correctAttempt++;
          } else {
            qa.questions[i].incorrectAttempt++;
          }
        });
        await qa.save();
        // submit the quiz will update the answers.
      } else if (quiz && quiz.quizType === "Poll") {
        const poll = await this.pollRepository.get(id);
        console.log(poll);

        if (!poll) {
          throw new Error("poll not found");
        }

        quiz.questions.forEach((question, i) => {
          const userChoice = userAnswers[i];
          // HACK: userChoice is not in array based index
          poll.questions[i][userChoice - 1]++;
        });

        poll.save();
      }
    } catch (e) {
      throw e;
    }
  }

  // TODO: need quizCount and relative computationalData. and need to return Trending Quiz
  async dashboard(user) {
    try {
      const userData = await this.userRepository.populatedQuizzies(user._id);
      const quizzies = userData.quizzies;
      let quizCreated = quizzies.length;
      let totalQuestions = 0;
      let totalImpression = 0;
      quizzies.forEach((quiz) => {
        totalQuestions += quiz.questions.length;
        totalImpression += quiz.impressions;
      });

      quizzies.sort((a, b) => b.impressions - a.impressions);

      return { quizCreated, totalQuestions, totalImpression, quizzies };
    } catch (e) {
      throw e;
    }
  }

  // HACK: should also be removed from user also.
  async removeQuiz(quizId, userId) {
    try {
      const quiz = await this.quizRepository.get(quizId);

      await this.userRepository.removeQuiz(userId, quizId);
      console.log(quiz.QuizType);
      if (quiz.quizType === "Q&A") {
        await this.qaRepository.destory(quizId);
      } else if (quiz.quizType === "Poll") {
        await this.pollRepository.destory(quizId);
      }

      await this.quizRepository.destory(quizId);
    } catch (e) {
      console.log("this is from remove quiz", e);
      throw e;
    }
  }
}

export default QuizService;
