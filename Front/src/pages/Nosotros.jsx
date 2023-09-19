import React from 'react';
import MainLayout from "../components/layout/main/MainLayout"
import ComponentNosotros from '../components/layout/nosotros/Componentnosotros';



const Nosotros = () => {
    
  
    return (
                         
        <MainLayout pageTitle={"Nosotros"} pageDescription={"¡Descubre quiénes somos y por qué somos tu elección confiable!"}>
           
                <ComponentNosotros />
                                
           
        </MainLayout>
    )
            
     ;
  };
  
  export default Nosotros;