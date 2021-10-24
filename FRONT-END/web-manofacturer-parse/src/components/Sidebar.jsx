import React from 'react';
import { Link } from 'react-router-dom';
import 'styles/sidebar-style.css';
import sellList from "media/receipt_long_white_48dp.svg";
import products from "media/inventory_white_48dp.svg";
import logoutImage from "media/exit_to_app_white_48dp.svg";
import users from "media/people_white_48dp.svg";
import shop from "media/home_white_48dp.svg";
import { useAuth0 } from "@auth0/auth0-react";

const Sidebar = () => {
  const outSesion = () => {
    logout({ returnTo: window.location.origin });
    localStorage.setItem('token', null);
  };
  const { logout } = useAuth0();
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
            <img className="iconSidebar" src={sellList} id="btnlistOrders" alt="img"></img>
            <span className="links_name">  Ventas</span>
          </Link>
        </li>
        <li>
          <Link to='/admin/productos'>
            <img className="iconSidebar" src={products} id="btnProducts" alt="img"></img>
            <span className="links_name">Productos</span>
          </Link>
        </li>
        <li>
          <Link to='/admin/usuarios'>
            <img className="iconSidebar" src={users} id="btnUsers" alt="img"></img>
            <span className="links_name">Usuarios</span>
          </Link>
        </li>
      </ul>
      <div className="logoutsection">
        <button className="btnGeneral btnEdit btnExit" onClick={() => outSesion()}>
          <img className="iconSidebar" src={logoutImage} id="btnLogout" alt="img"></img>
          <span className="links_name ">Salir</span>
        </button>
      </div>
    </div>
  )
};
export default Sidebar;
