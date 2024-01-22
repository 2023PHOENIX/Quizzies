import { URL } from "../contants.js";
import QuizService from "../service/quiz-service.js";

const quizService = new QuizService();

//TODO: after quiz creation need to send specific url to access that quiz.
export const createQuiz = async (req, res, next) => {
  try {
    const response = await quizService.createQuiz(req.body);
    const quizUrl = `${URL}/api/v1/quiz/${response._id}`;
    res.status(200).json({
      success: true,
      message: "Successfully created new quiz",
      data: { url: quizUrl },
      err: {},
    });
  } catch (e) {
    next(e);
  }
};

export const getQuiz = async (req, res, next) => {
  try {
    const response = await quizService.get(req.params.id);
    console.log(response);
    res.status(200).json({
      success: true,
      message: "your quiz data",
      data: response,
      err: {},
    });
  } catch (e) {
    next(e);
  }
};

export const submitQuizData = async (req, res, next) => {
  try {
    const id = req.params.id;
    const userAnswers = req.body.userAnswers;
    const response = await quizService.submit(id, userAnswers);
    res.status(200).json({
      success: true,
      message: "your quiz data",
      data: response,
      err: {},
    });
  } catch (e) {
    next(e);
  }
};
