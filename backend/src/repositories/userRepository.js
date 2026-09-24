import { query } from "../config/db.js";

export const userRepository = {
    async findById(id_usuario){
        const res = await query('SELECT * FROM tb_usuario WHERE id_usuario = $1', [id_usuario]);
        return res.rows[0]
    },
    async findByEmail(email, senha){
        const res = await query('SELECT id_usuario, nome, email, senha FROM tb_usuario WHERE email = $1 AND senha = $2', [email,senha]);
        return res.rows[0]
    }
}