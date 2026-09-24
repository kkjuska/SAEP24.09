import { query } from "../config/db.js";

export const userRepository = {
    async findById(id_usuario){
        console.log('chegou no repository')
        console.log(id_usuario)
        const res = await query('SELECT * FROM tb_usuario WHERE id_usuario = $1 ;', [id_usuario]);
        console.log('o banco retornou')
        // console.log(res)
        return res.rows[0]
    },
    async findByEmail(email, senha){
        console.log(email, senha)
        const res = await query('SELECT id_usuario, nome, email, senha FROM tb_usuario WHERE email = $1 AND senha = $2;', [email,senha]);
        // console.log(res)
        return res.rows[0]
    }
}