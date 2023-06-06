import { UserLocalRepositoryImplements } from "../../../Data/repositories/UserLocalRepository";
import { User } from "../../entities/User";

const { save } = new UserLocalRepositoryImplements();

export const SaveUserUseCase = async (user:User) => {
    return await save(user); 
}