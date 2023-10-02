export function Buscar(listado, filtro) {
    if (!Array.isArray(listado) || typeof filtro !== 'string') {
      return [];
    }
  
    const filtroLimpio = filtro.trim().toLowerCase();
  
    return listado.filter((item) =>
      item.nombre.toLowerCase().includes(filtroLimpio)
    );
  }
  