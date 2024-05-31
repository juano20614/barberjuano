import express from "express";
import registerController from '../controllers/register-controller';
import { validatorParams } from "../middleware/validateregister";
import { validator } from "../middleware/validateregister";
const router = express.Router();


router.post('/', validatorParams, validator, registerController);


export default router;