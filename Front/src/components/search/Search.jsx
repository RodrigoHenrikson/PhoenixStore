import { useEffect, useState } from "react";
import ResultadoBusqueda from "./ResultadosBusqueda";
import BarraBusqueda from "./BarraBusqueda";
import { FilterContext } from "./SearchContexts";
import FilterProvider from "./FilterProvider";

//Listado de Productos Previo

export default function Searc()
{
    const [items, setItems] = useState([]);
    

    useEffect(() =>
    {
        if (items.length == 0)
        {
            console.log('Cargando Items....');
            fetch('https://645ec9f5f9c0732c342fcddc.mockapi.io/Productos')
                .then(r => r.json())
                .then(d => setItems(d))
        }
    }
    );

    return (
        <div>
            <FilterProvider>
            <BarraBusqueda />
            <ResultadoBusqueda items={items} />
            </FilterProvider>
        </div>
    )
};