import { receitaController } from "../controllers/receitaController.js";
import Router from 'express';

const receitaRouter = Router()

receitaRouter.get('/receita', receitaController.getAll)
receitaRouter.get('/receita/:id', receitaController.getByUserId)
receitaRouter.post('/receita', receitaController.create)
receitaRouter.delete('/receita/:id', receitaController.delete)

export default receitaRouter