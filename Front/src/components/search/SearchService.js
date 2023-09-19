export function Buscar(listado, filtro)
{
    return listado.filter(
        (item) => item.titulo.toLocaleLowerCase().includes(filtro.toLocaleLowerCase()));
}