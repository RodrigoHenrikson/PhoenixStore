import React, { useEffect, useState } from "react";
import ResultadoBusqueda from "./ResultadosBusqueda";
import BarraBusqueda from "./BarraBusqueda";
import { FilterProvider } from "./SearchContexts";

export default function Search() {
  const [items, setItems] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (!dataLoaded) {
      console.log("Cargando Items....");
      axios
        .get("http://localhost:5000/catalogo")
        .then((response) => {
          console.log("Datos del catálogo recibidos:", response.data);
          setItems(response.data);
          setDataLoaded(true);
        })
        .catch((error) => {
          console.error("Error al obtener el catálogo", error);
        });
    }
  }, []);

  return (
    <div>
      <FilterProvider>
        <BarraBusqueda items={items} />
        <ResultadoBusqueda items={items} />
      </FilterProvider>
    </div>
  );
}
