import { useContext, useState } from "react";
import FormContext from "../../contexts/form";

const FormField = ({ name }) =>
{
    const ctx = useContext(FormContext); // Obtengo el formService
    const [val, setVal] = useState(ctx.get(name));

    return (
        <input 
            type="text" 
            value={val} 
            placeholder={name.toUpperCase()}
            onChange={
                (e) => ctx.set(name, e.target.value)
            } />
    );
}

export default FormField;
