import { Router } from "express";
import studentController from "../controller/student.js";

const router= new Router();
router.get('/students',studentController.getAll);

export default router;