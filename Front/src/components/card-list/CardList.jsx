import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import { useContext } from "react";
import { FilterContext } from "../search/SearchContexts";
import axios from "axios"; 

const BarraBusqueda = () => {
  const [filtro, _setFiltro] = useState('');
  const filterContext = useContext(FilterContext);

  function setFiltro(val) {
    _setFiltro(val);
    filterContext.setFilter(val);
    console.log("Valor de filtro en BarraBusqueda:", val);
  }

  return (
    <div className="barraBusqueda">
      <input
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        placeholder="Busqueda"
      />
    </div>
  );
};

const CardList = () => {
  const [items, setItems] = useState([]);
  const filterContext = useContext(FilterContext);

  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (!dataLoaded) {
      console.log('Cargando Items....');
      
      axios.get('http://localhost:5000/catalogo') 
        .then((response) => {
          console.log('Datos del catálogo recibidos:', response.data);
          setItems(response.data);
          setDataLoaded(true); 
        })
        .catch((error) => {
          console.error('Error al obtener el catálogo', error);
        });
    }
  }, [dataLoaded]);

  
  const listadoFiltrado = filterContext.filter
    ? items.filter((item) => {
        if (item.titulo) {
          return item.titulo.toLowerCase().includes(filterContext.filter.toLowerCase());
        }
        return false;
      })
    : items;

  console.log('Datos en items:', items);
  
  return (
    <>
      <BarraBusqueda />
      {listadoFiltrado.map((val, ix) => (
        <Card catalogoItem={val} key={ix} />
      ))}
    </>
  );
};

export default CardList;
