import { useContext } from "react";
import { Buscar } from "./SearchService";
import Card from "../card/Card";

  
  const ResultadoBusqueda = ({ items = [] }) => {
    
    const FilterContext = useContext(FilterContext);
  
    const listadoFiltrado = Buscar(items, filterContext.filter)

    return (
      <div>
        {listadoFiltrado.map((val, ix) => (
          
            <Card key={ix} item={val} />
         
        ))}
      </div>
    );
  };
  
  export default ResultadoBusqueda;
  