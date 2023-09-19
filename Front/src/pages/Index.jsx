import { useSearchParams } from "react-router-dom";
import MainLayout from "../components/layout/main/MainLayout";
import CardList from "../components/card-list/CardList";
import FilterProvider from "../components/search/FilterProvider";
import BarraBusqueda from "../components/card-list/CardList";


/**
 * Contextos: RouterProvider
 */
export default function Index()
{
    const [searchParams, setSearchParams] = useSearchParams();

    const busqueda = searchParams.get('q');



    return (
        <FilterProvider>
        <MainLayout pageTitle={"Productos"} pageDescription={"¡Explora nuestro catálogo y encuentra las mejores ofertas del mercado!"} >
           
                
                <CardList />
                    
           
        </MainLayout>
        </FilterProvider> 
    )
}






