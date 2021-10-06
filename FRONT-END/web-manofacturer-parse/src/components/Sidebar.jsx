import React from 'react'
import { Link } from 'react-router-dom';
import 'styles/sidebar-style.css'
import menuimg from "media/bx-menu.svg"
import sellcart from "media/bxs-cart-add.svg"
import sellList from "media/list.svg"
import products from "media/bx-briefcase.svg"
import logout from "media/bxs-log-out.svg"
import users from "media/bxs-user-account.svg"
import shop from "media/bx-store-alt.svg"
const Sidebar = () => {
    return (
        <div class="sidebar">
            
            <div className="logo-details">
            <Link to='/admin'>
            
            <img src={shop}  alt="img"></img>
            </Link>
          <div className="logo_name">  
           Manufacturas</div>
          <img src={menuimg} id="btn" alt="img"></img>
          
      </div>
      <ul className="nav-list">
      
      <li>
      <Link to='/admin/ventas/agregarventa'>
      <a >
          <img src={sellcart} id="btnSell" alt="img"></img>
            <span className="links_name">Agregar Ventas</span>
          </a>
          </Link>
        </li>

        
       
      <li>
      <Link to='/admin/ventas/listadoventas'>
      <a >
          <img src={sellList} id="btnlistOrders" alt="img"></img>
            <span className="links_name">Listado de Ventas</span>
          </a>
          </Link>
        </li>
      
        
        
        <li>
        <Link to='/admin/productos'>
        <a >
          <img src={products} id="btnProducts" alt="img"></img>
            <span className="links_name">Productos</span>
          </a>
          </Link>
        </li>
       
        
      
        <li>
        <Link to='/admin/usuarios'>
        <a >
         <img src={users} id="btnUsers" alt="img"></img>
           <span className="links_name">Usuarios</span>
         </a>
         </Link>
       </li>
       
       </ul>
     
       <div className="logoutsection">
       <a  className="a_link" href="#salir"> 
         <img src={logout} id="btnLogout" alt="img"></img>
           <span className="links_name ">Salir</span>
         </a>
       </div>
         
        
       
        </div>
    )
}

export default Sidebar
