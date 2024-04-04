import React from 'react'
import { useState } from 'react'
function Login() {


    const [datosUsu,setDatosUsu] = useState({nombre:'',contra:''});
    const [login,setLogin] = useState(true);

    function iniciaSesion(e) {
        
        e.preventDefault();
        const options = {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(datosUsu)
        }

        fetch('http://localhost:3000',options)
        .then(res=>res.json()).then(data=>{

            if (data.state == 'failed') {
                setLogin(false);
            }else{
                setLogin(true);
                localStorage.setItem('usuario',datosUsu.nombre);
                localStorage.setItem('contrasena',datosUsu.contra);
                window.location.replace('/');
            }

        });
    
    }

    function cambiaCampo(e) {
        let dato = e.target.name; 
        let valor = e.target.value; 

        setDatosUsu({...datosUsu,[dato]:valor})
    }
  return (
    <>
        {login == false? <h3>Usuario o contrasaeña incorrectos</h3>:<></>}
        <form action="#" method="post" onSubmit={iniciaSesion}>

            <label htmlFor="nom">Nombre:</label>
            <input type="text" name="nombre" id="nom" value={datosUsu.nombre} onChange={cambiaCampo}/><br />

            <label htmlFor="pass">Contraseña:</label>
            <input type="text" name="contra" id="pass" value={datosUsu.contra} onChange={cambiaCampo}/><br />

            <input type="submit" value="Enviar" />
        </form>
    
    </>
  )
}

export default Login