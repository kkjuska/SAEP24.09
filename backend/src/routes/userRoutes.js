import { userController } from "../controllers/userController.js";
import { Router } from 'express';

const userRouter = Router()

userRouter.get('/user/:id', userController.getById);
userRouter.post('/user/login', userController.login);

export default userRouter