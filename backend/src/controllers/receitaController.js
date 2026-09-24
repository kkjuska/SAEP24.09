import { receitaService } from "../services/receitaService.js";

export const receitaController = {
    async getAll(req, res){
        try {
            const getAll = await receitaService.getAll()
            res.status(200).json(getAll)
        } catch (error) {
            res.status(500).json({erro: error.message})
        }
    },
    async getByUserId(req, res){
        try {
            const getByUserId = await receitaService.getByUserId(req.params.id_usuario)
            res.status(200).json(getByUserId)
        } catch (error) {
            res.status(500).json({erro: error.message})
        }
    },
    async create(req, res){
        try {
            const novaReceita = await receitaService.create(req.body)
            res.status(201).json(novaReceita)
        } catch (error) {
            res.status(500).json({erro: error.message})
        }
    },
    async delete(req, res){
        try {
            const deletar = await receitaService.delete(req.params.id)
            res.status(200).json({erro: error.message})
        } catch (error) {
            res.status(500).json({erro: error.message})
        }
    }
}