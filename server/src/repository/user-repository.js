import User from "../models/user.js";
import CrudRepository from "./crud-repository.js";
class UserRepository extends CrudRepository {
  constructor() {
    super(User);
  }

  async findByEmail(email) {
    try {
      const response = await User.findOne({ email: email });
      return response;
    } catch (e) {
      throw e;
    }
  }

  async appendQuiz(userId, quizId) {
    try {
      await User.findOneAndUpdate(userId, { $push: { quizzies: quizId } });
    } catch (e) {
      throw e;
    }
  }

  async populatedQuizzies(userId) {
    try {
      const userDetails = await User.findById(userId).populate("quizzies");
      return userDetails;
    } catch (e) {
      throw e;
    }
  }
}

export default UserRepository;
