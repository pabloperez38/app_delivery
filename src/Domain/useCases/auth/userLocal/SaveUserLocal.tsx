import { User } from "../../../entities/User";
import { UserLocalRepositoryImpl } from "../../../../Datos/repositories/UserLocalRepository";

const {save} = new UserLocalRepositoryImpl();

export const SaveUserLocalUseCase = async (user: User) =>{
    return await save(user);
};