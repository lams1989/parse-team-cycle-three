
import "styles/pages-styles.css"
import { nanoid } from 'nanoid'
import checkicon from "media/done_outline_white_48dp.svg"
import deleteicon from "media/backspace_black_48dp.svg"

import React, { useEffect, useState } from 'react';
import ClientsOption from "./ClientsOption"
import ProductsOptions from "./ProductsOptions";
import SellersOption from "./SellerOption";
import SelectDate from "./SelectDate";
const AddOrder = () => {

  const [client, setClient] = useState(null);
  
  const [seller, setSeller] = useState(null);
  
  const [productsToBuy, setProductsToBuy] = useState([]);
  const order= [
    {
      "id": 215,
      "description": "product 214234f nqwoiejomwqid",
      "unitprice": 23333,
      "quantity": 2
    },
    {
      "id": 25,
      "description": "frijol rojo x 500gr pack x 24und",
      "unitprice": 45600,
      "quantity": 2
    },
    {
      "id": 276,
      "description": "garbanzo marca util 250gr pack x 24 und",
      "unitprice": 23444,
      "quantity": 1
    },
    {
      "id": 4555,
      "description": "leche deshidratada lavaca 200ml x 6 und",
      "unitprice": 23222,
      "quantity": 1
    }
  ];

  return (
    <div className=" orderSplit">

      <form className=" formNewOrder">
        
        <div className="sectionOrder">
        <h2 className=" addNewSubt  marg-l">Ingrese la información: </h2>
          <div className="newOrderCont">

            <div className="labelsOrders">

              <label>ID Venta</label>
              <label>Fecha</label>
              <label>Estado Venta</label>

            </div>

            <div className="inputsOrders">
              <input className="inputChange inputValue" placeholder="001" ></input>
              
              <SelectDate/>
              <select className="selectStatus smallLargeTD">
                <option className="pending" value="processing">En proceso</option>
                <option className="aproved" value="delivered">Entregada</option>
                <option className="denied" value="canceled">Cancelada</option>
              </select>
              

            </div>
          </div>
          <div className="divClientOpt">
            <label >Vendedor</label>
            <SellersOption />

          </div>
          <div className="divClientOpt">
            <ClientsOption setClient={setClient}/>

          </div>

        </div>
      </form>





      <div className="listSectionContainer divProductToAdd ">
        <div>
          <h3 className="subt1">AÑADIR PRODUCTOS:</h3>

        </div>
        <div className="productsToCart">
          <ProductsOptions></ProductsOptions>
          <div className= "divCartOpt"><label>Cantidad </label>
          <input className="inputChange inputNumber" type="number" placeholder="1" min="1"></input></div>
          <div className= "divCartOpt"><label>x Precio Unitario</label>
          <input className="inputChange inputValue" type="number" placeholder="$" disabled></input></div>
          
          <div className= "divCartOpt"><label> = Total</label>
          <input className="inputChange inputValue" type="number" placeholder="$" disabled></input></div>
          <div className="btn2div"> 
          <button className="btnGeneral btnEdit"><i className="fas fa-shopping-cart "></i></button>
          <button type="button" className="btnGeneral btnDelete">
                  <img className="btnIcon" src={deleteicon}  alt="img"></img></button> </div>
        </div>


        <div className="tableDialogView divCartTable">
      
      <table className= "tableorderinfo">
      <thead>
        <tr className= "viewRowMedium">
          <th>Id</th>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio Und</th>
          <th>Subtotal</th>
          <th>Quitar</th>
        </tr>
      </thead>

      <tbody>
      
      {order.map((product) => {
            return (
              <tr  key={nanoid()} className="viewRowMedium">
              <td className="numberTD">{product.id}</td>
              <td className="mediumTD">{product.description}</td>
              <td className="smallTD ">  <input className="inputChange inputNumber" type="number" defaultValue={product.quantity} min="1"></input></td>
              <td className="smallTD">$ {product.unitprice}</td>   
              <td className="smallTD">$ {product.unitprice * product.quantity} </td> 
              <i className="fas fa-backspace"></i>
            </tr>
      
            
            );
            })}

         </tbody>
         <tfoot>    <tr>
          <td align="right"colspan="4">Total</td>
          <td> suma</td>
        </tr></tfoot>
      </table>
    </div>

 

        <div className="infoFin">
        <label >Total Venta</label>
          <input className="inputChange inputTotal " placeholder="$ Total" disa></input>
          <div className="divBtnTotalOrder ">
         
            <button className="btnBig btnAddOrder">
              <img className="btnIcon" src={checkicon} alt="img"></img> Guardar
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


export default AddOrder
