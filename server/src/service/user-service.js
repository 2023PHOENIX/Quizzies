import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { UserRepository } from "../repository/index.js";

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async signup(data) {
    try {
      console.log(data);
      if (data.password !== data.confirmPassword) {
        throw new Error("your password is not same");
      }
      const encyptedPassword = await bcrypt.hash(data.password, 10);
      data.password = encyptedPassword;
      const user = await this.userRepository.create(data);

      if (user) {
        const token = jwt.sign({ user: user }, process.env.jwtPrivateKey, {
          expiresIn: "24h",
        });
        return { token: token };
      } else {
        throw new Error("user is not created.Please try again after some time");
      }
    } catch (e) {
      throw e;
    }
  }

  async login(data) {
    try {
      const user = await this.userRepository.findByEmail(data.email);
      if (user) {
        const isPasswordMatched = await bcrypt.compare(
          data.password,
          user.password,
        );

        if (isPasswordMatched) {
          const token = jwt.sign({ user: user }, process.env.jwtPrivateKey, {
            expiresIn: "24h",
          });
          return { token: token };
        } else {
          throw new Error("Password is incorrect");
        }
      } else {
        throw new Error("User does not exist");
      }
    } catch (e) {
      throw e;
    }
  }
}

export default UserService;
