
import "styles/pages-styles.css"
import checkicon from "media/done_outline_white_48dp.svg"
import deleteicon from "media/backspace_black_48dp.svg"
import FreeSoloCreateOption from './FreeSoloCreateOption'

import React, { useEffect, useState } from 'react';
import ClientsOption from "./ClientsOption"
import ProductsOptions from "./ProductsOptions";
const AddOrder = () => {
  
  const [listClients, setListClients]= useState([]);
  

  return (
    <div className=" orderSplit">
  
      <form className=" formNewOrder">
      <h2 className=" addNewSubt  marg-l">Ingrese la información: </h2>
      <div className="sectionOrder">

        <div className="newOrderCont">

        <div className="labelsOrders">
      
        <label>ID Venta</label>
        <label>Fecha</label>
        <label>Vendedor</label>
        
        <label>Estado Venta</label>
        <label>Total Venta</label>
       
        </div>

        <div className="inputsOrders">
        <input className="inputChange inputValue" placeholder="001" ></input>
        <input className="inputChange" placeholder="5/10/2021" ></input>
        <input className="inputChange" placeholder="Nombre Vendedor"></input>
    
        <select className="selectStatus smallLargeTD">
                <option className="pending" value="processing">En proceso</option>
                <option className="aproved" value="delivered">Entregada</option>
                <option className="denied" value="canceled">Cancelada</option>
              </select>
        <input className="inputChange inputTotal " placeholder="$ Total"></input>
       
        </div>
        </div>
        <div className="divBtnTotalOrder">
          <ClientsOption/>
         
        </div>
        
        </div>
      </form>
      
      
      
      
     
      <div className="listSectionContainer divProductToAdd ">
      <div>
      <h3 className="subt1">AÑADIR PRODUCTOS:</h3>
      
      </div>
    <div className="productsToCart">
    
    <ProductsOptions></ProductsOptions>
    </div>
  

      <h3 className="subt1">Lista de Productos Comprados:</h3>
      
        <table className="ListTable">
          <thead className="thead">
            <tr>
             
              <th className="col_title ">ID</th>
              <th className="col_title">Descripción</th>
              <th className="col_title">Cantidad</th>
              <th className="col_title">Precio Unitario</th>
              <th className="col_title">Total</th>
              <th className="col-title col-last">Quitar</th>
            </tr>
          </thead>

          {/*All this data rows are examples. Later it will be implemented a function map that fills the rows*/}
          <tbody>
            <tr className="datarow">
             
              <td className="smallTD">XL173</td>
              <td className="descripTD">Producto # 173 Tamaño Extragrande</td>
              <td className="smallTD" >2</td>
              <td className="smallTD">$ 71.000</td>
              <td className="smallTD">$ 142.000</td>
              <td className="smallTD">
                <button type="button" className="btnGeneral btnDelete">
                <img className="btnIcon" src={deleteicon} id="btnlistOrders" alt="img"></img>Quitar</button>
              </td>
            </tr>
            <tr className="datarow ">
              
              <td className="smalTD "><input className="inputChange inputValue" placeholder="XL1"></input></td>
              <td className="descripTD">Producto # 1</td>
              <td className="smallTD pad-b"><input type="number" className="inputChange inputNumber" placeholder="1"></input></td>
              <td className="smallTD pad-b"><input className="inputChange  inputValue" placeholder="$"></input></td>
              <td className="smallTD pad-b"><input className="inputChange inputValue" placeholder="$"></input></td>
              <td className="smallTD">
                <button type="button" className="btnGeneral btnDelete">
                <img className="btnIcon" src={deleteicon} id="btnlistOrders" alt="img"></img>Quitar</button>
              </td>
            </tr>
          </tbody>
        </table>

          <div className="infoFin">
        <div className="divBtnTotalOrder margin-lef">
          <button className="btnBigG btnAddOrder">
          <img className="btnIcon" src={checkicon}  alt="img"></img> Guardar
          </button>
          <button className=" btnBig btnCancelOrder">
            Cancelar
          </button>
        </div>
      </div>
      </div>
    
    </div>
  )
}

const addProductRow=()=>{

  return(
 <h1>producto1</h1>

  )

}
export default AddOrder
