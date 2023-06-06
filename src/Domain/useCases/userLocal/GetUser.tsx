import { UserLocalRepositoryImplements } from "../../../Data/repositories/UserLocalRepository";
import { User } from "../../entities/User";

const { getUser } = new UserLocalRepositoryImplements();

export const GetUserUseCase = async () => {
    return await getUser(); 
}