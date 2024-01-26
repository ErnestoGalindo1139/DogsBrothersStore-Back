import { Router } from "express";
import { createNewUser, getUserByEmail, getUsers } from "../controllers/users.controller";

const router = Router();

router.get('/users', getUsers);
router.get('/users/:correo_electronico', getUserByEmail);
router.post('/users', createNewUser);

export default router