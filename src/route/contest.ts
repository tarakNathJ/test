import { Router } from "express";
import {
  createContest,
  getContestData,
  createMCQ,
  submitMCQAnswers,
} from "../contoller/index.js";
import { authenticate, isCreator, isContestee } from "../middleware/index.js";

const router = Router();

router.post("/contests", authenticate, isCreator, createContest);
router.get("/contests/:contestId", authenticate, getContestData);
router.post("/contests/:contestId/mcq", authenticate, isCreator, createMCQ);

router.post(
  "/api/contests/:contestId/mcq/:questionId/submit",
  authenticate,
  isContestee,
  submitMCQAnswers
);
export default router;
