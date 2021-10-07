import React from 'react'
import { Link } from 'react-router-dom';
import 'styles/sidebar-style.css'
import menuimg from "media/bars-solid.svg"
import sellcart from "media/cart.svg"
import products from "media/product.svg"
import users from "media/users-solid.svg"
import shop from "media/shop-solid.svg"
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
      <Link to='/admin/ventas'>
      <li>
      
          <a>
          <img src={sellcart} id="btnSell" alt="img"></img>
            <span className="links_name">Ventas</span>
          </a>
         
        </li>
        </Link>
        
        <Link to='/admin/productos'>
        <li>
       
          <a >
          <img src={products} id="btnProducts" alt="img"></img>
            <span className="links_name">Productos</span>
          </a>
     
        </li>
        </Link>
        
        <Link to='/admin/usuarios'>
        <li>
         <a >
         <img src={users} id="btnUsers" alt="img"></img>
           <span className="links_name">Usuarios</span>
         </a>
        
       </li>
       </Link>
       </ul>
     
       <div className="logoutsection">
       <a href="#salir">
         <img src={users} id="btnLogout" alt="img"></img>
           <span className="links_name ">Salir</span>
         </a>
       </div>
         
        
       
        </div>
    )
}

export default Sidebar
