import { QaRepository, QuizRepository } from "../repository/index.js";

class QuizService {
  constructor() {
    this.quizRepository = new QuizRepository();
    this.qaRepository = new QaRepository();
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
      }
      return response;
    } catch (e) {
      console.log(e.message);
      throw e;
    }
  }

  async get(id) {
    try {
      const response = await this.quizRepository.get(id);
      console.log(response);
      return response;
    } catch (e) {
      throw e;
    }
  }
  // HACK: data will be array of choosen answer by user.
  async submit(id, userAnswers) {
    try {
      const quiz = await this.quizRepository.get(id);

      const qa = await this.qaRepository.get(id);
      if (!quiz || !qa) {
        throw new Error("Quiz or Qa not found");
      }

      if (quiz && quiz.quizType === "Q&A") {
        //
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
      }
    } catch (e) {
      throw e;
    }
  }
}

export default QuizService;
