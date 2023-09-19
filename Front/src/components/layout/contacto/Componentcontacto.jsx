import React, { useContext } from 'react';
import TextBox from './textbox';
import { FormContext } from '../../../contexts/FormContext';

const Componentcontacto = () => {
  const { formValues, setFormValues } = useContext(FormContext);

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formValues.nombre.length < 3 || !/^[a-zA-Z\s]+$/.test(formValues.nombre)) {
      alert("El campo de nombre debe tener al menos 3 caracteres y solo puede contener letras mayúsculas, minúsculas y espacios.");
      return;
    }

    if (!formValues.email.includes("@") || formValues.email.length < 3) {
      alert("El campo de email debe contener una dirección de correo válida.");
      return;
    }

    if (formValues.comentarios.length > 150) {
      alert("El campo de comentarios no puede exceder los 150 caracteres.");
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });
    
      let responseData = '';
    
      try {
        responseData = await response.json(); 
      } catch (error) {
        console.error('Error al leer la respuesta como texto:', error);
      }
    
      
      console.log('Respuesta del servidor:', responseData);
    
      if (response.ok) {
        console.log(responseData.mensaje)
        if (responseData.mensaje === "FORMULARIO ENVIADO CORRECTAMENTE") {
          alert('Formulario enviado exitosamente');
        } else {
          
          console.error('Respuesta inesperada del servidor:', responseData);
          alert('Error inesperado al enviar el formulario de contacto');
        }
    
        // Restablece el estado del formulario
        setFormValues({
          nombre: '',
          email: '',
          comentarios: '',
        });
      } else {
        alert('Error al enviar el formulario de contacto');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Error al enviar el formulario de contacto');
    }
    
  };

  return (
    <form className="fmr" id="frmContacto" onSubmit={handleSubmit}>
      <TextBox
        label="Nombre"
        id="nombre"
        name="nombre"
        placeholder="Escribe tu nombre completo"
        value={formValues.nombre}
        onChange={handleChange}
      />
      <TextBox
        label="Email"
        id="email"
        name="email"
        placeholder="juan@gmail.com"
        value={formValues.email}
        onChange={handleChange}
      />
      <div>
        <label htmlFor="comentarios" className="frmLabel">
          Comentarios:
        </label>
        <textarea
          name="comentarios"
          id="comentarios"
          cols="30"
          rows="10"
          placeholder="Escribe hasta 150 caracteres..."
          className="field"
          value={formValues.comentarios}
          onChange={handleChange}
        ></textarea>
      </div>
      <button className="btn__form" type="submit">
        Enviar
      </button>
    </form>
  );
};

export default Componentcontacto;
