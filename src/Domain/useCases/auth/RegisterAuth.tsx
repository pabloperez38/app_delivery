import { AuthRepositoryImplements } from "../../../Data/repositories/AuthRepository";
import { User } from "../../entities/User";

const {register} = new AuthRepositoryImplements();

export const RegisterAuthUseCase = async(user:User) => {
    return await register(user);
}