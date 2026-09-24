import { receitaRepository } from "../repositories/receitaRepository.js";

export const receitaService = {
    async getAll(){
        return await receitaRepository.findAll();
    },
    async getByUserId(id_usuario){
        return await receitaRepository.findByUserId(id_usuario);
    },
    async create(reqReceita){
        return await receitaRepository.create(reqReceita)
    },
    async delete(id_receita){
        const receitaDeletado = await receitaRepository.delete(id_receita)
        if(!receitaDeletado) throw new Error('Receita não encontrada!')
        return receitaDeletado
    }
}