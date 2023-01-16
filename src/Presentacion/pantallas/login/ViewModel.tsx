import React, { useEffect, useState } from "react";

import { LoginAuthUseCase } from "../../../Domain/useCases/auth/LoginAuth";
import { SaveUserLocalUseCase } from "../../../Domain/useCases/auth/userLocal/SaveUserLocal";
import { useUserLocal } from "../../hooks/useUserLocal";

const LoginViewModel = () => {

  const [errorMessage, setErrorMessage] = useState("");

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const {user, getUserSession} = useUserLocal();
  console.log('====================================');
  console.log("USUARIO ok: " + JSON.stringify(user));
  console.log('====================================');

  const onChange = (property:string, value:any) => {
    setValues({ ...values, [property]: value });
  };

  const login = async() =>{

    if(isValidForm()){
      const response = await LoginAuthUseCase(values.email, values.password);
      if(!response.success){
        setErrorMessage(response.message);
      }else{
        await SaveUserLocalUseCase(response.data);
        getUserSession();
      }
    }

  };
  const isValidForm = (): boolean => {
    if(values.email === ""){
      setErrorMessage("Ingresa el email");
      return false;
    }

    if(values.password === ""){
      setErrorMessage("Ingresa la contraseña");
      return false;
    }
    return true;
  };
  return { ...values, onChange, login,  errorMessage, user};
};

export default LoginViewModel;
