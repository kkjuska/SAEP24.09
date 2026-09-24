import { userService } from "../services/userService.js";

export const userController = {
    async getById(req, res){
        try {
            const getUserById = await userService.getById(req.params.id)
            res.status(200).json(getUserById)
        } catch (error) {
            res.status(500).json({erro: error.message})
        }
    },
    async login(req, res){
        console.log('TAMO NO LOGIN')
        try {
            const user = await userService.login(req.body);
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json({erro: error.message})
        }
    }
}