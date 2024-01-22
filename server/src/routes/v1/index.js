import express from "express";
import { signup, login } from "../../controllers/auth-controller.js";
import { authenticateUser } from "../../middleware/auth-middleware.js";
import {
  createQuiz,
  dashBoard,
  getQuiz,
  submitQuizData,
} from "../../controllers/quiz-controller.js";

const router = express.Router();

router.get("/healthz", (req, res) => {
  res.send({ message: "ok" });
});

router.post("/signup", signup);
router.post("/login", login);

// WARN: routes with authentication
router.post("/createQuiz", authenticateUser, createQuiz);
router.get("/dashboard", authenticateUser, dashBoard);
// WARN: routes with authorization

// WARN: it should be public route.
router.get("/quiz/:id", getQuiz);
router.post("/quiz/:id/", submitQuizData);
export default router;
