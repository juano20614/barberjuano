import express from "express"
import verytoken from "../controllers/verificar";
import validateToken from "../middleware/validateToken";

const router = express.Router();

router.get('/', validateToken, verytoken);

export default router;