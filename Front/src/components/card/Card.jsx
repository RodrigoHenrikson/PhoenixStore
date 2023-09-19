import { Link } from "react-router-dom";
import "./card.scss"


/**
 * Contextos: RouterProvider
 */
const Card = ({ item }) => (
    <div class="card">
        
        <div class="card__img">
                <img src={item.imagen} />
        </div>

        <div class="card__item">
                <h3>{item.titulo}</h3>
                <h2 class="item__price">$ {item.precio}</h2>
                <h4 class="item__descripcion">$ {item.descripcion}</h4>
                <div class="btn__Buy"> <Link to={`/detalle/${item.id}`} class="link" >Comprar</Link> </div>
        </div>
        
        
                
        
        
    </div>
)

export default Card;
