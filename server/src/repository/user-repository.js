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
  async removeQuiz(userId, quizId) {
    try {
      const user = await User.findById(userId);

      const indexToDelete = user.quizzies.findIndex((quiz) => quiz == quizId);

      if (indexToDelete !== -1) {
        user.quizzies.splice(indexToDelete, 1);
        console.log(
          `Quiz with quizId ${quizId} deleted successfully. from user`,
        );
      } else {
        console.log("quiz not found in user");
        throw new Error("quiz not found");
      }

      user.save();

      return;
    } catch (e) {
      throw e;
    }
  }
}

export default UserRepository;
