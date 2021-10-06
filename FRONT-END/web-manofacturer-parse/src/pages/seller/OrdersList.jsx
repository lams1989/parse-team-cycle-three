import React from 'react'
import { Link } from 'react-router-dom';
import "styles/pages-styles.css"
const OrdersList = () => {
    return (
        <div className="MainSectionOrders">
        <div classNameName="titlepage">
          <span className="title"> LISTA de Ventas</span>
          <Link to='/admin/ventas/agregarVenta'>
          <button className=" btnListaVentas">Agregar Nueva Venta</button>
          </Link>
        </div>

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
        Buscar</button>

        </form>
         </div>
         

         <div className="listSectionProductsToBuy divOrders">
            
            <table className="ListTableProductsToBuy">
      
              <thead className="thead theadFix">
                <tr>
                
                  <th className="col_title ">ID Venta</th>
                  <th className="col_title">Cliente</th>
                  <th className="col_title">Productos</th>
                  <th className="col_title">Total</th>
                  <th className="col_title">Fecha Venta</th>
                  <th className="col_title">Estado</th>
                  <th className="col-title">Modificar</th>
                </tr>
              </thead>
      
             {/*All this data rows are examples. Later it will be implemented a function map that fills the rows*/}
              <tbody className="tbodyNToBuy">
                <tr className="datarow">
                
                  <td className="smallTD">20</td>
                  
                  <td className="mediumTD">Cliente </td>
                  <td className="descripTD">Producto # 173 Tamaño Extragrande</td>
                  <td className="smallTD">$ 142.000</td>
                  <td className="smallTD">5/10/2021</td>
                  <td className="smallTD pending" >En proceso</td>
                  <td className="smallTD btnDviv2">    
                  <button type="button" className="btnGeneral btnEdit">Modificar</button>
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
