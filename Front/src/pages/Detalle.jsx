import React, { useEffect, useState } from "react";
import MainLayout from "../components/layout/main/MainLayout";
import Card from "../components/card/Card";
import Preloader from "../components/preloader/Preloader";
import { useParams } from "react-router-dom"; 

export default function Detalle() {
  const [item, setItem] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    if (item === null) {
      
       fetch(`http://localhost:5000/detalle/${id}`)
       
        .then((res) => res.json())
        .then((datos) => setItem(datos))
        .catch((error) => {
          console.error("Error al obtener el detalle", error);
        });
    }
  }, [id, item]);

  return (
    <MainLayout pageTitle={"Detalle del Producto"} pageDescription={"Informate a fondo sobre el producto"}>
      
      {item === null ? <Preloader /> : <Card catalogoItem={item} mostrarDescripcionLarga={true} 
                                        customCSSClass="detalle-card"  />

}
      
    </MainLayout>
  );
}
