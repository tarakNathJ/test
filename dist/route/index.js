import { Router } from "express";
import { signUp, login } from "../contoller/index.js";
const router = Router();
router.post("/signup", signUp);
router.post("/login", login);
export default router;
//# sourceMappingURL=index.js.map