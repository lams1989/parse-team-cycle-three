
import "styles/pages-styles.css"
import { nanoid } from 'nanoid'
import checkicon from "media/done_outline_white_48dp.svg"
import deleteicon from "media/backspace_black_48dp.svg"

import React, { useEffect, useState } from 'react';
import ClientsOption from "./ClientsOption"
import ProductsOptions from "./ProductsOptions";
import SellersOption from "./SellerOption";
import SelectDate from "./SelectDate";
import { obtainProductByState } from "utils/Api-connection";
import { obtainUserByRole } from "utils/Api-connection";
import { obtainClients } from "utils/Api-connection";
import InputOptions from "./InputOptions";
const AddOrder = () => {

  /**Selected info for the order */
  const [client, setClient] = useState(null);
  const [productSelected,setProductSelected]= useState([]);
  const [seller, setSeller] = useState(null);
  const [productsToBuy, setProductsToBuy] = useState([]);
  const [reload, setReload] = useState(false);


/**List of  */
  const [optionSellers, setOptionSellers] = useState([]);
  const [optionClients, setOptionClients] = useState([]);
  const [availableProducts, setAvailableProducts] = useState(null);
  
 
  useEffect(async () => {
    console.log(
      'Hola, soy un use effect que se ejecuta cuando usas el input, para cargar la lista de opciones :)'
    );
    await obtainClients(
      (response) => {
        console.log('la respuesta que se recibio fue', response);
        console.log(response.data);
        const jsonClients = response.data;
        const options = [];
        for (var i in jsonClients) {
          var row = (jsonClients[i].client_doc_id + "-" + jsonClients[i].client_name);
          var data= {"data":row}
          options.push(data);
        //  console.log(data);
        }
        console.log("datos: ", options);
        setOptionClients(options);


      },
      (error) => {
        console.error('Salio un error:', error);
      }
    );
    await obtainUserByRole("vendedor",
    (response) => {
      console.log('la respuesta que se recibio fue', response);
      console.log(response.data);
      const json = response.data;
      const options = [];
      for (var i in json) {
        var row = (json[i].id + "-" + json[i].name);
        var data = { "data": row};
        options.push(data);
        console.log(data);
      }
      console.log("datos: ", options);
      setOptionSellers(options);


    },
    (error) => {
      console.error('Salio un error:', error);
    }
  );
  
  await obtainProductByState("Disponible",
    (response) => {
      console.log('la respuesta que se recibio fue', response);
      console.log(response.data);
      const jsonProd = response.data;
      const optionsProd = [];

      for (var i in jsonProd) {
        var row = (jsonProd[i].id + "-" + jsonProd[i].description) +" $"+ jsonProd[i].unitprice;
        var data = { "data": row };
        optionsProd.push(data);
    
      }
      console.log("datos: ", optionsProd);
      setAvailableProducts(optionsProd);


    },
    (error) => {
      console.error('Salio un error:', error);
    }
  );
    setReload(false);
  }, []);

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
            <InputOptions  listOptions={optionSellers} setOptionSelected= {setSeller} labelOf= "Buscar Vendedor"/>

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
        <InputOptions  listOptions={availableProducts} setOptionSelected= {setProductSelected} labelOf= "Buscar Producto"/>
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
