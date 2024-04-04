import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>WOOFY</h1>
      <ul>
        <li>
          <Link to={"/"}>Inicio</Link>
        </li>
        {localStorage.getItem("usuario") == null ? <></> : <li><Link to={'/productos'}>Productos</Link></li>}
        {localStorage.getItem("usuario") == null ? <></> : <li><Link to={'/productos/nuevoProducto'}>Añadir Producto</Link></li>}
        {localStorage.getItem("usuario") == null ? (
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        ) : (
          <li>Bienvenido/a {localStorage.getItem("usuario")}</li>
        )}
      </ul>
    </header>
  );
}

export default Header;
