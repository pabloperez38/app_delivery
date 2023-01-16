import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { AxiosError } from "axios";
import { ResponseApiDelivery } from "../sources/remote/models/ResponseApiDelivery";
import { User } from "../../Domain/entities/User";

export class AuthRepositoryImpl implements AuthRepository{

    async register(user: User): Promise<ResponseApiDelivery> {
        try {

            const response = await ApiDelivery.post<ResponseApiDelivery>("/users/create", user);                        
            return Promise.resolve(response.data);

        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError:ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data)); 
            return Promise.resolve(apiError)
        }
        
    }
}