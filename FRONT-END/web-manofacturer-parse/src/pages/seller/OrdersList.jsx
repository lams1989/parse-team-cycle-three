import React from 'react'
import { Link } from 'react-router-dom';
import "styles/pages-styles.css"
import search from "media/zoom_in_white_48dp.svg"
import editicon from "media/mode_edit_white_48dp.svg"
import sellcart from "media/sell_white_48dp.svg"
const OrdersList = () => {
  return (
    <div className="MainSection">
      <div classNameName="titlepage">
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
      <div className="listSectionContainer divOrders">
        <table className="ListTable">
          <thead className="thead ">
            <tr>
              <th className="col_title ">ID Venta</th>
              <th className="col_title">Cliente</th>
              <th className="col_title">Productos</th>
              <th className="col_title">Total</th>
              <th className="col_title">Fecha Venta</th>
              <th className="col_title">Estado</th>
              <th className="col-title col-last">Modificar</th>
            </tr>
          </thead>
          {/*All this data rows are examples. Later it will be implemented a function map that fills the rows*/}
          <tbody>
            <tr className="datarow">
              <td className="smallTD">20</td>
              <td className="mediumTD">Cliente </td>
              <td className="descripTD">Producto # 173 Tamaño Extragrande</td>
              <td className="smallTD">$ 142.000</td>
              <td className="smallTD">5/10/2021</td>
              <td className="smallTD pending" >En proceso</td>
              <td className="smallTD btnDviv2">
                <button type="button" className="btnGeneral btnEdit">
                <img className="btnIcon" src={editicon}  alt="img"/>   Modificar</button>
              </td>
            </tr>
            <tr className="datarow">
              <td className="smallTD">19</td>
              <td className="mediumTD">190- Gabriela Marin </td>
              <td className="descripTD">Producto # 172 Tamaño pequeño</td>
              <td className="smallTD">$ 149.000</td>
              <td className="smallTD">5/10/2021</td>
              <td className="smallTD aproved" >Entregada </td>
              <td className="smallTD btnDviv2">
                <button type="button" className="btnGeneral btnEdit">Modificar</button>
              </td>
            </tr>
            <tr className="datarow">
              <td className="smallTD">18</td>
              <td className="mediumTD">Wiliam Diaz </td>
              <td className="descripTD"># 193 Tamaño Mediano, #190 pequeño  </td>
              <td className="smallTD">$ 90.000</td>
              <td className="smallTD">4/10/2021</td>
              <td className="smallTD aproved" >Entregada </td>
              <td className="smallTD btnDviv2">
                <button type="button" className="btnGeneral btnEdit">Modificar</button>
              </td>
            </tr>
            <tr className="datarow">
              <td className="smallTD">17</td>
              <td className="mediumTD">Cliente </td>
              <td className="descripTD">Producto # 173 Tamaño Extragrande</td>
              <td className="smallTD">$ 142.000</td>
              <td className="smallTD">5/10/2021</td>
              <td className="smallTD aproved" >Entregada </td>
              <td className="smallTD btnDviv2">
                <button type="button" className="btnGeneral btnEdit">Modificar</button>
              </td>
            </tr>
            <tr className="datarow">
              <td className="smallTD">16</td>
              <td className="mediumTD">Camila Jimenez </td>
              <td className="descripTD"># 173 Tamaño Extragrande</td>
              <td className="smallTD">$ 142.000</td>
              <td className="smallTD">4/10/2021</td>
              <td className="smallTD denied" >Canceled </td>
              <td className="smallTD btnDviv2">
                <button type="button" className="btnGeneral btnEdit">Modificar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrdersList
