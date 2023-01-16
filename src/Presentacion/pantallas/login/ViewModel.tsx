import React, { useState } from "react";

import { LoginAuthUseCase } from "../../../Domain/useCases/auth/LoginAuth";

const LoginViewModel = () => {

  const [errorMessage, setErrorMessage] = useState("");

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const onChange = (property:string, value:any) => {
    setValues({ ...values, [property]: value });
  };

  const login = async() =>{

    if(isValidForm()){
      const response = await LoginAuthUseCase(values.email, values.password);
      if(!response.success){
        setErrorMessage(response.message);
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
  return { ...values, onChange, login,  errorMessage};
};

export default LoginViewModel;
