import Quiz from "../models/quiz.js";
import CrudRepository from "./crud-repository.js";

class QuizRepository extends CrudRepository {
  constructor() {
    super(Quiz);
  }
}

export default QuizRepository;
