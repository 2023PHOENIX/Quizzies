import express from "express";

const router = express.Router();

router.get("/healthz", (req, res) => {
  res.send({ message: "ok" });
});

export default router;
