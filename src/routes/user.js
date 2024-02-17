import expresss from "express";
import { getUser } from "../controllers/userController.js";

const router = expresss.Router();

router.get("/test", getUser);

export default router;
