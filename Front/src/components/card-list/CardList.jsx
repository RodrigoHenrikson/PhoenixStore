import { useEffect, useState } from "react";
import Card from "../card/Card";
import Preloader from "../preloader/Preloader";
import { useContext } from "react";
import { Buscar } from "../search/SearchService";
import { FilterContext } from "../search/SearchContexts";




/**
 * Contextos: RouterProvider

const CardList = () => 
{
    const [items, setItems] = useState([]);

    useEffect(() =>
    {
        if (items.length == 0)
            fetch('https://645ec9f5f9c0732c342fcddc.mockapi.io/Productos')
                .then(res => res.json())
                .then(datos => setItems(datos))
    })


    return (
        <div>
            {
                items.length == 0 ? <Preloader /> : (
                    <>
                        <div class="cards__container">
                        {items.map(
                            (item, i) => 
                            <Card item={item} key={i} />
                        )}
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default CardList;


const CardItem = ({ item }) => (
    <div className="cardcontainer">
      <h2>{item.titulo}</h2>
      <h2>{item.descripcion}</h2>
    </div>
  );
 */
  


  const BarraBusqueda = () => 
    {

        const [filtro, _setFiltro] = useState('');
        const filterContext = useContext(FilterContext);

        function setFiltro(val) {

          _setFiltro(val);
          filterContext.setFilter(val);

        }

        return (     
          <div className="barraBusqueda">
              <input value={filtro} onChange={(e) => setFiltro(e.target.value)} placeholder="Busqueda" />
          </div>
        );
    }

  const CardList = () =>
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

    const filterContext = useContext(FilterContext);
    const listadoFiltrado = Buscar(items, filterContext.filter)

    return (
        <>
        <BarraBusqueda />
        <div className="cards__container">
        {listadoFiltrado.map((val, ix) => (

          <Card item={val} key={ix} />

        ))}
      </div>
      </>
    );
  };

  export default CardList;