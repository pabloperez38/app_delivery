import { UserLocalRepositoryImplements } from "../../../Data/repositories/UserLocalRepository";
import { User } from "../../entities/User";

const { remove } = new UserLocalRepositoryImplements();

export const RemoveUserLocalUseCase = async () => {
    return await remove(); 
}