import { Router } from "express";
import { createContest, getContestData, createMCQ } from "../contoller/index.js";
import { authenticate, isCreator } from "../middleware/index.js";
const router = Router();
router.post("/contests", authenticate, isCreator, createContest);
router.get("/contests/:contestId", authenticate, getContestData);
router.post("/contests/:contestId/mcq", authenticate, isCreator, createMCQ);
export default router;
//# sourceMappingURL=contest.js.map