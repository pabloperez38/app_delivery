import React, { useState } from "react";

import { ApiDelivery } from "../../../Datos/sources/remote/api/ApiDelivery";
import { RegisterAuthUserCase } from "../../../Domain/useCases/auth/RegisterAuth";

const RegisterViewModel = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmarPassword: "",
  });

  const onChange = (property:string, value:any) => {
    setValues({ ...values, [property]: value });
  };

  const registro = async () => {
    if(isValidForm()){
       const response = await RegisterAuthUserCase(values);
    }
  
   
  };

  const isValidForm= ():boolean  => {
    if(values.name === ""){
      setErrorMessage("Ingresa el nombre");
      return false;
    }
    if(values.email === ""){
      setErrorMessage("Ingresa el email");
      return false;
    }
    if(values.phone === ""){
      setErrorMessage("Ingresa el teléfono");
      return false;
    }
    if(values.password === ""){
      setErrorMessage("Ingresa la contraseña");
      return false;
    }
    if(values.confirmarPassword === ""){
      setErrorMessage("Re ingresa la contraseña");
      return false;
    }
    if(values.password !== values.confirmarPassword)
    {
      setErrorMessage("Las contraseñas no coinciden");
      return false;

    }
    return true;
  }

  return { ...values, onChange, registro, isValidForm, errorMessage };
};

export default RegisterViewModel;
