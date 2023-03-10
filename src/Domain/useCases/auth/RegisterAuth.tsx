import { AuthRepositoryImpl } from "../../../Datos/repositories/AuthRepository";
import { User } from "../../entities/User";

const { register } = new AuthRepositoryImpl();

export const RegisterAuthUserCase = async(user: User)=>{
    return await register(user);
}