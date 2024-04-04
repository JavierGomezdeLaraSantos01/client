import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Inicio from './views/Inicio'
import Login from './views/Login'
import Productos from './views/Productos'
import DetallesProducto from './views/DetallesProducto'
import NuevoProducto from './views/NuevoProducto'
ReactDOM.createRoot(document.getElementById('root')).render(

  <Router>

  <Header/>

    <Routes>

      <Route path='/' element={<Inicio/>}/>
      <Route path='/login' element={localStorage.getItem('usuario') == null? <Login/>:<Inicio/>}/>
      <Route path='/productos' element={localStorage.getItem('usuario') == null? <Login/>:<Productos/>}/>
      <Route path='/productos/:id' element={localStorage.getItem('usuario') == null? <Login/>:<DetallesProducto/>}/>
      <Route path='/productos/nuevoProducto' element={localStorage.getItem('usuario') == null? <Login/>:<NuevoProducto/>}/>

    </Routes>

    

  </Router>


)
