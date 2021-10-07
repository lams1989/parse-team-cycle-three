import React from 'react'
import { Link } from 'react-router-dom';
import "styles/pages-styles.css"
const AddOrder = () => {
    return (
        <div className="MainSectionOrders">
        <div classNameName="titlepage">
          <span className="title"> Registro de Ventas</span>
         
       
        <Link to='/admin/ventas/listadoventas'>
          <button className=" btnListaVentas">Ver Listado Ventas</button>
          </Link>
        </div>
    
        
         
    <h2 className=" addNewSubt  marg-l">Agregar Nueva Venta</h2>
    <form className=" formNewOrder">
               <div className="newOrderContainer">
                  
                    <ul className="dataNew">
                   
                    <li>
                    <label>ID Venta</label>
                    <input className= "inputChange inputNumber" placeholder="001"disabled></input>
                    </li> 
                    <li>
                    <label>Fecha</label>
                    <input className= "inputChange" placeholder="5/10/2021"disabled></input>
                    </li>
                    <li>
                    <label>Vendedor</label>
                    
                    <input className= "inputChange" placeholder="Nombre Vendedor"></input>
                    </li>
                    
                    <li className="stateDiv">
                    <label>Estado Venta</label>
                    
                    <select className="selectStatus">
                    <option className="pending" value="processing">En proceso</option>
                     <option className="aproved" value="delivered">Entregada</option>
                     <option className="denied" value="canceled">Cancelada</option>
                   
                   </select>
                    </li>
                   
                    </ul>
                    <ul className="dataNew">
                       
                        <li>
                        <label>ID Cliente</label>
                    <input className= "inputChange " placeholder="ID Cliente" ></input>
                        </li>
                        <li>
                        <label>Nombre Cliente</label>
                    <input className= "inputChange " placeholder="Nombre Cliente"></input>
                        </li>
                        <li className="totalLi">
                    <label>Total Venta</label>
                    
                    <input className= "inputChange inputTotal " placeholder="$ Total"></input>
                    </li>
                      
                     
                    </ul>
   
                  
                   
   
               </div>
               </form>
    
    
              
        <div >
        <h3 className="subt1">Lista de Productos Comprados:</h3>
        </div>

        <div className="listSectionProductsToBuy divProductToAdd">
            
          <table className="ListTableProductsToBuy">
    
            <thead className="thead theadFix">
              <tr>
              <th className="col_title">Añadir Producto</th>
                <th className="col_title ">ID</th>
                <th className="col_title">Descripción</th>
                <th className="col_title">Cantidad</th>
                <th className="col_title">Precio Unitario</th>
                <th className="col_title">Total</th>
                <th className="col-title"></th>
              </tr>
            </thead>
    
           {/*All this data rows are examples. Later it will be implemented a function map that fills the rows*/}
            <tbody className="tbodyNToBuy">
              <tr className="datarow">
              <td className="smallTD">    
                  <button type="button" className="btnGeneral btnEdit">Añadir</button>
              </td>
                <td className="smallTD">XL173</td>
                <td className="descripTD">Producto # 173 Tamaño Extragrande</td>
                <td className="smallTD" >2</td>
                <td className="smallTD">$ 71.000</td>
                <td className="smallTD">$ 142.000</td>
                <td className="smallTD">    
                  <button type="button" className="btnGeneral btnDelete">Quitar</button>
              </td>
              </tr>
              <tr className="datarow">
              <td className="smallTD">    
                  <button type="button" className="btnGeneral btnEdit">Añadir</button>
              </td>
                <td className="smallTD"><input className="inputNumber" placeholder="XL1"></input></td>
                <td className="descripTD">Producto # 1</td>
                <td className="smallTD"><input type="number"className="inputNumber" placeholder="1"></input></td>
                <td className="smallTD"><input className="inputNumber inputValue" placeholder="$"></input></td>
                <td className="smallTD"><input className="inputNumber inputValue" placeholder="$"></input></td>
                <td className="smallTD">    
                  <button type="button" className="btnGeneral btnDelete">Quitar</button>
              </td>
              </tr>
             
            
           
    
            </tbody>
            </table>
           
        </div>
        <div className="infoFin">
           
            <div className="divtotalOrder">
            <span className="total">Total $142.000</span>
                   <button className="btnOrder btnAddOrder">
                       Guardar
                   </button>
                   <button className=" btnOrder btnCancelOrder">
                       Cancelar
                   </button>
                  
                 
                 </div>
           </div>
      </div>  
    
    
    
    
    )
}

export default AddOrder
