import { useState } from "react";
import { useContext } from "react";
import { FilterContext } from "./SearchContexts";

const BarraBusqueda = () => {
  const [filtro, _setFiltro] = useState("");
  const filterContext = useContext(FilterContext);

  function setFiltro(val) {
    _setFiltro(val);
    filterContext.setFilter(val);
  }

  // Agregar un console.log para verificar el valor de filtro
  console.log("Valor de filtro en BarraBusqueda:", filtro);

  return (
    <div>
      <input value={filtro} onChange={(e) => setFiltro(e.target.value)} />
    </div>
  );
};

export default BarraBusqueda;

