import React from 'react'
function NuevoProducto() {


  return (
   <>
   <form action="http://localhost:3000/productos/nuevoProducto" method="post">
        <label htmlFor="nom">Nombre: </label>
        <input type="text" name="nombre" id="nom"/><br />
        <label htmlFor="pre">Precio: </label>
        <input type="number" name="precio" id="pre" min={1}/> <br />
        <label htmlFor="desc">Descripción: </label>
        <textarea name="descripcion" id="desc" cols="30" rows="10"></textarea><br />
        <input type="submit" value="Crear productos" />
   </form>
   </>
  )
}

export default NuevoProducto