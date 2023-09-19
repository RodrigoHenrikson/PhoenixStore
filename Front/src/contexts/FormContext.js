import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formValues, setFormValues] = useState({
    nombre: '',
    email: '',
    comentarios: ''
  });

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });
  };

  return (
    <FormContext.Provider value={{ formValues, setFormValues, handleChange }}>
      {children}
    </FormContext.Provider>
  );
};