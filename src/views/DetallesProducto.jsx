import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
function DetallesProducto() {

    let {id} = useParams();

    const [producto,setProducto] = useState({});

    useEffect(()=>{
        const controller = new AbortController();

        const options = {
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            },
            signal:controller.signal
        }
        fetch('http://localhost:3000/productos/detalleProducto?id='+id,options)
        .then(res=>res.json())
        .then(data => setProducto(data))
        .finally(()=>controller.abort());

    },[]);
  return (
    <>
    <h2>{producto.nombre}</h2>
    <h3>Precio: {producto.precio}€</h3>
    <p>{producto.descripcion}</p>
    </>
  )
}

export default DetallesProducto