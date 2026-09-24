import express from "express";
import userRouter from "./routes/userRoutes.js";
import receitaRouter from "./routes/receitaRoutes.js";
import cors from "cors";

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(userRouter, receitaRouter)

app.listen(PORT, () => {
    console.log(`Servidor rodando na URL: http://localhost:${PORT}`)})