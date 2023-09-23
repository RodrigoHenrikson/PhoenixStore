import { useEffect, useState } from "react";
import Card from "../card/Card";
import { useContext } from "react";
import { FilterContext } from "../search/SearchContexts";
import axios from "axios"; // Importa Axios para realizar solicitudes HTTP

const BarraBusqueda = () => {
  const [filtro, _setFiltro] = useState('');
  const filterContext = useContext(FilterContext);

  function setFiltro(val) {
    _setFiltro(val);
    filterContext.setFilter(val);
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

  useEffect(() => {
    if (items.length === 0) {
      console.log('Cargando Items....');
      
      axios.get('/catalogo')
        .then((response) => {
          setItems(response.data);
        })
        .catch((error) => {
          console.error('Error al cargar los datos:', error);
        });
    }
  }, [items]); 

  const filterContext = useContext(FilterContext);

  const listadoFiltrado = items.filter((item) =>
    item.titulo.toLowerCase().includes(filterContext.filter.toLowerCase())
  );

  return (
    <>
      <BarraBusqueda />
      <div className="cards__container">
        {listadoFiltrado.map((val, ix) => (
          <Card catalogoItem={val} key={ix} /> 
        ))}
      </div>
    </>
  );
};

export default CardList;
