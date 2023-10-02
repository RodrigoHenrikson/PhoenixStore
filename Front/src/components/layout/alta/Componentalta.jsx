import React, { useState } from 'react';



const Componentalta = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    precio: '',
    stock: '',
    marca: '',
    categoria: '',
    descripcion_corta: '',
    descripcion_larga: '',
    envio_sin_cargo: '',
    foto: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validar los campos del formulario
    if (formData.nombre.trim().length < 3 || !/^[a-zA-Z0-9\s]+$/.test(formData.nombre)) {
      alert('El campo de nombre debe tener al menos 3 caracteres y puede contener letras mayúsculas, minúsculas, números y espacios.');
      return;
    }   

    if (!formData.precio) {
      alert('Por favor, ingresa un precio válido.');
      return;
    }

    if (!formData.stock) {
      alert('Por favor, ingresa un stock válido.');
      return;
    }

    if (!formData.marca) {
      alert('Por favor, ingresa una marca.');
      return;
    }

    if (!formData.categoria) {
      alert('Por favor, selecciona una categoría.');
      return;
    }

    if (formData.descripcion_corta.trim().length === 0) {
      alert('Por favor, ingresa una descripción corta.');
      return;
    }

    if (formData.descripcion_larga.trim().length === 0) {
      alert('Por favor, ingresa una descripción larga.');
      return;
    }

    if (!formData.envio_sin_cargo) {
      alert('Por favor, selecciona si el envío es sin cargo o no.');
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('nombre', formData.nombre);
    formDataToSend.append('precio', formData.precio);
    formDataToSend.append('stock', formData.stock);
    formDataToSend.append('marca', formData.marca);
    formDataToSend.append('categoria', formData.categoria);
    formDataToSend.append('descripcion_corta', formData.descripcion_corta);
    formDataToSend.append('descripcion_larga', formData.descripcion_larga);
    formDataToSend.append('envio_sin_cargo', formData.envio_sin_cargo);
    formDataToSend.append('foto', formData.foto);

    try {
     
      const response = await fetch('http://localhost:5000/cardsAlta', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.status === 200) {
        alert('Producto agregado correctamente.');
        // Restablecer el formulario
        setFormData({
          nombre: '',
          precio: '',
          stock: '',
          marca: '',
          categoria: '',
          descripcion_corta: '',
          descripcion_larga: '',
          envio_sin_cargo: '',
          foto: '',
        });
      } else {
        alert('Hubo un problema al agregar el producto. Por favor, inténtalo nuevamente.');
      }
    } catch (error) {
      console.error('Error al agregar el producto:', error);
      alert('Hubo un error al agregar el producto. Por favor');
    } 
    console.log(event.target)
    const Fd = new FormData(event.target);
    
    // 1) For...of de keys 2) Verificar que estén todas las keys que se manden 3) Enviar con fetch, método POST y el formData como cuerpo (solo eso, sin headers)

    for (const key of formDataToSend.keys()) {
      console.log(`Key: ${key}, Valor: ${formDataToSend.get(key)}`);
    }
  };

  return (
    <form className="fmr__alta" action="http://localhost:5000/cardsAlta" method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
      <label className="frmLabel" htmlFor="nombre">Nombre:</label>
      <input className="field" type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleInputChange} required />

      <label className="frmLabel" htmlFor="precio">Precio:</label>
      <input className="field" type="number" id="precio" name="precio" value={formData.precio} onChange={handleInputChange} required />

      <label className="frmLabel" htmlFor="stock">Stock:</label>
      <input className="field" type="number" id="stock" name="stock" value={formData.stock} onChange={handleInputChange} required />

      <label className="frmLabel" htmlFor="marca">Marca:</label>
      <input className="field" type="text" id="marca" name="marca" value={formData.marca} onChange={handleInputChange} required />

      <label className="frmLabel" htmlFor="categoria">Categoría:</label>
      <select id="categoria" name="categoria" className="field" value={formData.categoria} onChange={handleInputChange} required>
        <option value="">Seleccione una categoría</option>
        <option value="tecnologia">Tecnología</option>
        <option value="celulares">Celulares</option>
        <option value="accesorios-pc">Accesorios de PC</option>
        <option value="notebooks">Notebooks</option>
        <option value="auriculares">Auriculares</option>
      </select>

      <label className="frmLabel" htmlFor="descripcion_corta">Descripción corta:</label>
      <input className="field" type="text" id="descripcion_corta" name="descripcion_corta" value={formData.descripcion_corta} onChange={handleInputChange} required />

      <label className="frmLabel" htmlFor="descripcion_larga">Descripción larga:</label>
      <textarea className="field" id="descripcion_larga" name="descripcion_larga" value={formData.descripcion_larga} onChange={handleInputChange} required></textarea>

      <label className="frmLabel" htmlFor="envio_sin_cargo">Envío sin cargo:</label>
      <div className="siyno">
        <input type="radio" id="envio_sin_cargo_si" name="envio_sin_cargo" value="si" checked={formData.envio_sin_cargo === 'si'} onChange={handleInputChange} required />
        <label htmlFor="envio_sin_cargo_si">Sí</label>
        <input type="radio" id="envio_sin_cargo_no" name="envio_sin_cargo" value="no" checked={formData.envio_sin_cargo === 'no'} onChange={handleInputChange} required />
        <label htmlFor="envio_sin_cargo_no">No</label>
      </div>
         
      <label className="frmLabel" htmlFor="foto">Foto:</label>
      <input className="field" type="file" id="foto" name="foto" accept="image/*" onChange={(event) => setFormData({ ...formData, foto: event.target.files[0] })} required />

      <br />
      <button className="btn__form" type="submit">Enviar</button>
    </form>
    
  );
};

export default Componentalta;



