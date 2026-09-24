import { userRepository } from "../repositories/userRepository.js";

export const userService = {
    async getById(id_usuario){
        return await userRepository.findById(id_usuario);
    },
    async login(reqUser){
        const user = await userRepository.findByEmail(reqUser.email, reqUser.senha)

        if (user){
            console.log('IUUUUHU LOGIN FEITO')
        }

        if(!user){
            throw new Error("Email ou senha invalidos!")
        }

        return user
    }
}