import { AuthRepositoryImplements } from "../../../Data/repositories/AuthRepository";

const {login} = new AuthRepositoryImplements();

export const LoginAuthUseCase = async (email: string, password: string) => {
    return await login(email, password);
}