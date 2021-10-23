import React from 'react'
import { Link } from 'react-router-dom';
import 'styles/sidebar-style.css'
import sellcart from "media/sell_white_48dp.svg"
import sellList from "media/receipt_long_white_48dp.svg"
import products from "media/inventory_white_48dp.svg"
import logout from "media/exit_to_app_white_48dp.svg"
import users from "media/people_white_48dp.svg"
import shop from "media/home_white_48dp.svg"
import { nanoid } from 'nanoid'

const Sidebar = () => {
  return (
    <div className="sidebar">

      <div className="logo-details">
        <Link to='/admin'>

          <img src={shop} className="homeicon" alt="img"></img>
        </Link>
        <div className="logo_name">
          Manufacturas</div>
      </div>
      <ul className="nav-list">
     

        <li>
          <Link to='/admin/ventas'>
            <a>
              <img className="iconSidebar" src={sellList} id="btnlistOrders" alt="img"></img>
              <span className="links_name">  Ventas</span>
            </a>
          </Link>
        </li>

        <li>
          <Link to='/admin/productos'>
            <a >
              <img className="iconSidebar" src={products} id="btnProducts" alt="img"></img>
              <span className="links_name">Productos</span>
            </a>
          </Link>
        </li>

        <li>
          <Link to='/admin/usuarios'>
            <a >
              <img className="iconSidebar" src={users} id="btnUsers" alt="img"></img>
              <span className="links_name">Usuarios</span>
            </a>
          </Link>
        </li>
      </ul>

      <div className="logoutsection">
        <Link to='/'>
          <a className="a_link" href="#salir">
            <img className="iconSidebar" src={logout} id="btnLogout" alt="img"></img>
            <span className="links_name ">Salir</span>
          </a>
        </Link>

      </div>
    </div>
  )
}

export default Sidebar
