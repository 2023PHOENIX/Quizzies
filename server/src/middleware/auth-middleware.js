import jwt from "jsonwebtoken";

export const authenticateUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (authHeader) {
      const token = authHeader.split(" ")[1];

      const user = jwt.verify(token, process.env.jwtPrivateKey);
      console.log("middleware", user);
      req.user = user.user;
      next();
    } else {
      throw new Error("unable to find the token please re-login");
    }
  } catch (e) {
    next(e);
  }
};
