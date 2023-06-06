import React, { useState, useEffect } from 'react'
import { LoginAuthUseCase } from '../../../Domain/useCases/auth/LoginAuth'
import { SaveUserUseCase } from '../../../Domain/useCases/userLocal/SaveUser'; 
import { GetUserUseCase } from '../../../Domain/useCases/userLocal/GetUser';

const HomeViewModel = () => {
    const [errorMessage, setErrorMessage] = useState("");

    const [values, setValues] = useState({
        email: "",
        password: ""
    })

    useEffect(() => {
        getUserSession()
    }, [])
    
    const getUserSession = async() => {
        const user = await GetUserUseCase();
        console.log("USUARIO SESION " + JSON.stringify(user));
    }

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]:value })
    }

    const login  = async () => {
        if(isValidForm()){
            const response = await LoginAuthUseCase(values.email, values.password);
            console.log("RESPUESTA: " + JSON.stringify(response));
            if(!response.success){
                setErrorMessage(response.message);  
            }else{
                await SaveUserUseCase(response.data);
            }
        }       
    }

    const isValidForm = ():boolean => {

        if(values.email === ""){
            setErrorMessage("Ingrese el email");
            return false;
        }

        if(values.password === ""){
            setErrorMessage("Ingrese la contraseña");
            return false;
        }

        return true;
    }

    return {
        ...values,
        onChange,
        errorMessage,
        login
    }
}

export default HomeViewModel;
