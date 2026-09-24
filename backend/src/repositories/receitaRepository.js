import { query } from "../config/db.js";

export const receitaRepository = {
    async findAll(){
        const res = await query('SELECT * FROM tb_receita')
        res.rows
    },
    async findByUserId(id_usuario){
        const res = await query('SELECT * FROM tb_usuario JOIN tb_receita ON tb_receita.id_usuario = tb_usuario.id_usuario WHERE id_usuario = $1', [id_usuario])
        res.rows[0]
    },
    async create(receita){
        const {titulo_receita, origem_receita, url_imagem} = receita
        const sql = 'INSERT INTO tb_receita (titulo_receita, origem_receita, url_imagem) VALUES ($1, $2, $3)'
        const res = await query(sql, [titulo_receita, origem_receita, url_imagem])
        return res.rows[0]
    },
    async delete(id_receita){
        const sql = 'DELETE FROM tb_receita WHERE id_receita = $1';
        const res = await query(sql, [id_receita])
        return res.rows[0];
    }
}