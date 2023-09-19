import { useState } from 'react';
import FormContext from '../../contexts/form';
import FormField from '../form-field/FormField';

const BaseForm = () => 
{
    const [formData, setFormData] = useState({});

    const formService = {

        get: (key) => formData[key],

        /**
        setValue({
            ...value,
            [key]: val
        })
         */
        set: (key, val) => setFormData(
            Object.assign(
                {},
                formData,
                {
                    [key]: val
                }
            )
        )

    }

    const send = (e) => 
    {
        // 1 - Recibir valor actual
        console.log('Datos del formulario: ', formData);
        // 2 - Hacer validaciones correspondientes
        // 3 - Enviar formulario con un alert
        alert('Enviando formulario...')
        // e.target.submit() // MAL En una SPA: recarga la página
    }

    return (
        <FormContext.Provider value={formService}>
            {console.log(formData)}
            <div> {/* No se usa <form> porque su envio recarga la página */}
                <FormField name="nombre" />
                <FormField name="apellido" />
                <button onClick={send}>Enviar</button>
            </div>
        </FormContext.Provider>
    );
}

export default BaseForm;
