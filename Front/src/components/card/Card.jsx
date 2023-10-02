import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";

const Card = ({ catalogoItem, mostrarDescripcionLarga, customCSSClass }) => {
  if (!catalogoItem) {
    return null;
  }

  const imageUrl = catalogoItem.foto;

  return (
    <div className={`card ${customCSSClass}`}> {}
      <div className="card__img">       
        <img src={imageUrl} alt={catalogoItem.nombre} />
      </div>

      <div className="card__item">
        <h3>{catalogoItem.nombre}</h3>
        <h2 className="item__price">$ {catalogoItem.precio}</h2>
        <h4 className="item__descripcion">{catalogoItem.descripcion_corta}</h4>
        {mostrarDescripcionLarga && (
          <p className="item__descripcion-larga">{catalogoItem.descripcion_larga}</p>
        )}
        <div className="btn__Buy">
          <Link to={`/detalle/${catalogoItem._id}`} className="link">
            Comprar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;






/* CODIGO ANTERIOR CON SUBIDA IMAGEN BINARIO
import { Link } from "react-router-dom";
import "./card.scss";

const Card = ({ catalogoItem }) => {
  // Convierte los datos binarios en una URL de imagen
  const imageUrl = catalogoItem.foto
    ? URL.createObjectURL(
        new Blob([catalogoItem.foto.buffer], { type: catalogoItem.foto.contentType })
      )
    : "";

  return (
    <div className="card">
      <div className="card__img">       
        <img src={imageUrl} alt={catalogoItem.nombre} />
      </div>

      <div className="card__item">
        <h3>{catalogoItem.nombre}</h3>
        <h2 className="item__price">$ {catalogoItem.precio}</h2>
        <h4 className="item__descripcion">{catalogoItem.descripcion_corta}</h4>
        <div className="btn__Buy">
          <Link to={`/detalle/${catalogoItem._id}`} className="link">
            Comprar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;





/* import { Link } from "react-router-dom";
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

export default Card; */
