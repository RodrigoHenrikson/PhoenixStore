
import MainLayout from "../components/layout/main/MainLayout"
import Componentalta from "../components/layout/alta/Componentalta"

export default function Alta()
{
    return (
        <MainLayout pageTitle={"Alta de Productos"} pageDescription={"Detalle con precisión el producto que desee dar de alta"}>
            <Componentalta />
        </MainLayout>
    )
};
