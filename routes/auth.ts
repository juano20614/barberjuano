import express from "express";
import authController from '../controllers/auth-controller';
import { validationConfirm } from "../middleware/valitdateauth";
import { validateAuth } from "../middleware/valitdateauth";
const router = express.Router();


router.post('/',validateAuth,validationConfirm, authController);


export default router;
