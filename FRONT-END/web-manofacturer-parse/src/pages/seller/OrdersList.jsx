import React from 'react'
import { Link } from 'react-router-dom';
import "styles/pages-styles.css"
import search from "media/zoom_in_white_48dp.svg"
import sellcart from "media/sell_white_48dp.svg"
import OrdersTable from 'components/OrdersTable';

const OrdersList = () => {
  return (
    <div className="MainSection">
      <div className="titlepage">
        <span className="title"> LISTA de Ventas</span>
        <Link to='/admin/ventas/agregarVenta'>
          <div className="divBtnChangePage">
          <button className="btnGeneral btnListaVentas">
          <img className="btnIcon" src={sellcart} id="btnSell" alt="img"></img>
          Agregar Nueva Venta</button>
          </div>
         
        </Link>
      </div>
      <h3 className=" addNewSubt marg-l"> Consulta el listado de las ventas</h3>
      <div className="searchContainer  marg-l">
        
        <form>
          <span>Buscar Venta por </span>
          <select className="selectRole selectSearchUser">
            <option>ID Venta</option>
            <option>Nombre Cliente</option>
            <option>ID Cliente</option>
            <option>Vendedor</option>
            <option>Estado</option>
            <option>Fecha</option>
            <option>Total Venta</option>
          </select>
          <input type="text" className="toSearchInput" placeholder="Digite el ID de la Venta" />
          <button type="submit" className="btnGeneral btnSearchUser" id="submitUserSearchBtn">
          <img className="btnIcon"  src={search} alt="img"></img> 
            Buscar</button>
        </form>
      </div>
      <OrdersTable/>
      
    </div>
  )
}

export default OrdersList
