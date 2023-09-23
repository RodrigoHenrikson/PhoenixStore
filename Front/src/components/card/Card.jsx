import { Link } from "react-router-dom";
import "./card.scss";

const Card = ({ catalogoItem }) => (
  <div className="card">
    <div className="card__img">
      <img src={catalogoItem.imagen} alt={catalogoItem.titulo} />
    </div>

    <div className="card__item">
      <h3>{catalogoItem.titulo}</h3>
      <h2 className="item__price">$ {catalogoItem.precio}</h2>
      <h4 className="item__descripcion">{catalogoItem.descripcion}</h4>
      <div className="btn__Buy">
        <Link to={`/detalle/${catalogoItem._id}`} className="link">Comprar</Link>
      </div>
    </div>
  </div>
);

export default Card;
