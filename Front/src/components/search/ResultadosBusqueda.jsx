import { useContext } from "react";
import { Buscar } from "./SearchService";
import Card from "../card/Card";
import { FilterContext } from "./SearchContexts";

const ResultadoBusqueda = ({ items = [] }) => {
  const { filter } = useContext(FilterContext);

  // Agregar un console.log para verificar el valor de filter
  console.log("Valor de filter en ResultadoBusqueda:", filter);

  const listadoFiltrado = filter.trim() === "" ? items : Buscar(items, filter);

  // Agregar un console.log para verificar el resultado del filtrado
  console.log("Resultado del filtrado en ResultadoBusqueda:", listadoFiltrado);

  return (
    <div>
      {listadoFiltrado.map((val, ix) => (
        <Card key={ix} catalogoItem={val} />
      ))}
    </div>
  );
};

export default ResultadoBusqueda;
