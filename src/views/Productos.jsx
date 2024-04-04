import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
function Productos() {

    const [productos,setProductos] = useState([]);

    useEffect(()=>{
        const controller = new AbortController();

        const options = {
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            },
            signal:controller.signal
        }
        fetch('http://localhost:3000/productos',options)
        .then(res => res.json())
        .then(data => setProductos(data.productos))
        .finally(()=>controller.abort());

    },[]);

  return (
    <>
      <table border={1}>
        <tbody>
        <tr>
          {productos.map((producto)=>{
            return <td key={producto.id}><Link to={'/productos/'+producto.id}>{producto.nombre}</Link></td>
          })}
        </tr>
        </tbody>
      </table>
    </>
  )
}

export default Productos