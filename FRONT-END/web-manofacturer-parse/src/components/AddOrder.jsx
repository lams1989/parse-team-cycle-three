
import "styles/pages-styles.css"
import { nanoid } from 'nanoid'
import checkicon from "media/done_outline_white_48dp.svg"
import deleteicon from "media/backspace_black_48dp.svg"
import { ToastContainer, toast,Zoom } from 'react-toastify';

import React, { useEffect, useState, useRef } from 'react';

import SelectDate from "./SelectDate";
import { obtainProductByState } from "utils/Api-connection";
import { obtainUserByRole } from "utils/Api-connection";
import { obtainClients } from "utils/Api-connection";
import InputOptions from "./InputOptions";
import { createClient } from "utils/Api-connection";
import { createOrder } from "utils/Api-connection";

const AddOrder = () => {

  /**Selected info for the order */
  
  const [idOrder, setIdOrder] = useState("");
  
  const [totalOrder, setTotalOrder] = useState(0);
  const [stateOrder, setStateOrder] = useState("En proceso");

  const [seller, setSeller] = useState(null);
  const [client, setClient]= useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [productsToBuy, setProductsToBuy] = useState([]);
  
  
  /**For the case of a new client */
  const [isnewClient, setIsNewClient] = useState(false);
  
  const [newClientName, setNewClientName] = useState("");
  
  const [newClientId, setNewClientId] = useState("");

  /**for the addd products section */
  const [productSelected, setProductSelected] = useState();
  const [productQuantityToAdd, setproductQuantityToAdd] = useState(1);
  const [reloadClients, setReloadClients] = useState(false);
  const [reloadProducts, setReloadProducts] = useState(false);
  const [actualRow, setActualRow]= useState(0);
  const [numRow, setNumberRow]= useState(0);


  /**List of  options*/
  const [optionSellers, setOptionSellers] = useState([]);
  const [optionClients, setOptionClients] = useState([]);
  //const [listClients, setListClients] =useState([]);
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
          var data = { "data": row, "client_doc_id": jsonClients[i].client_doc_id ,"client_name":jsonClients[i].client_name}
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
          var data = { "data": row ,"seller_id": json[i].id, "seller_name":json[i].name};
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
          var row = (jsonProd[i].id + "-" + jsonProd[i].description) + " $" + jsonProd[i].unitprice;
          var data = { "data": row , "description": jsonProd[i].description, "unitprice": jsonProd[i].unitprice, "id":jsonProd[i].id};
          optionsProd.push(data);

        }
        console.log("datos: ", optionsProd);
        setAvailableProducts(optionsProd);


      },
      (error) => {
        console.error('Salio un error:', error);
      }
    );
      setReloadClients(false);
    setReloadProducts(false);
  }, [reloadClients]);

  useEffect(async () => { 
    console.log("row actual: ", actualRow)
  }
  , [actualRow]);

  
  /**ReloadProducts list of added products to buy (table) and reset fields of product */
useEffect(async () => {
  console.log("aaa")
  setProductsToBuy(productsToBuy);

  document.getElementById("id_add").value= "";
  setproductQuantityToAdd(1);
  document.getElementById("descrip_add").value= "";
  document.getElementById("unitprice_add").value= 0;
  document.getElementById("total_add").value= 0;

  setProductSelected(null);
  setReloadProducts(false);

}, [reloadProducts]);

useEffect(async () => {
  console.log("aaa: ", actualRow);
  

}, [actualRow]);
  useEffect(async () => {
    console.log("producto select: ", productSelected);
    if(productSelected!=null){

      document.getElementById("id_add").value= productSelected.id;
      document.getElementById("descrip_add").value= productSelected.description;
      document.getElementById("unitprice_add").value= productSelected.unitprice;
      document.getElementById("total_add").value= productSelected.unitprice*productQuantityToAdd;
     
    
    }
   // console.data("datasplit",data);

    }, [productSelected]);

    useEffect(async () => {
      console.log("producto select: ", productSelected);
      if(productSelected!=null ){
        document.getElementById("unitprice_add").value= productSelected.unitprice;
        document.getElementById("total_add").value= productSelected.unitprice*productQuantityToAdd;
      
      }
  
      }, [productQuantityToAdd]);
  
  const addProductToCart=() => {
   console.log("to add products to cart");

    if(productSelected!=null){
      
     let id= document.getElementById("id_add").value= productSelected.id;
      let descrip= document.getElementById("descrip_add").value= productSelected.description;
      let uprice= document.getElementById("unitprice_add").value= productSelected.unitprice;
      
      let totalProduct= document.getElementById("total_add").value= productSelected.unitprice*productQuantityToAdd;
      console.log("unit ",productQuantityToAdd, "total",totalProduct );
      const rowProduct= {"id": id, "description":descrip, "unitprice": uprice, "quantity": productQuantityToAdd, "subtotal": totalProduct, "numRow": numRow}

      productsToBuy.push(rowProduct);
      let totalplus= totalOrder + totalProduct;
      setTotalOrder(totalplus)
      let addrow= numRow+1;
      setNumberRow(addrow);
      setReloadProducts(true);
      console.log("productsBuy", productsToBuy);
    }else{
      toast.error('Seleccione otra vez el producto o uno nuevo');
    }
   
  
  }


  const deleteProductFromCart=(rowN, subtotal) => {
    
    console.log("i dont buy it, no");
    console.log("row", rowN);
    let newtotal= totalOrder - subtotal;
      setTotalOrder(newtotal)
    /**Filtering the list */
    const list = productsToBuy.filter((elem)=>{
      return elem.numRow!==rowN;
    })
    setProductsToBuy(list);

    console.log("filtrado", productsToBuy);
   }
  

  const submitCreateOrder = async () => {
    
    const clientObj = {"client_doc_id":  client.client_doc_id, "client_name": client.client_name}
    const sellerObj={"seller_id":seller.seller_id, "seller_name": seller.seller_name}
    
    if(productsToBuy.length>0 && client != null && seller !=null){
    const obj = {
      "id_order": idOrder,
      "date": selectedDate,
      "state": stateOrder,
     "description": productsToBuy,
     "client": clientObj,
     "seller": sellerObj,
     "total": totalOrder

    }
    console.log("obj", obj)

    await createOrder(
      {
        "id_order": idOrder,
        "date": selectedDate,
        "state": stateOrder,
       "description": productsToBuy,
       "client": clientObj,
       "seller": sellerObj,
       "total": totalOrder

      },
      (response) => {
        console.log(response.data);
        toast.success('Orden de venta agregada con éxito');
       
      },
      (error) => {
        console.error(error);
        toast.error('Error creando una orden venta');
      }
    );
    }else{
      toast.error('Error creando una orden venta. Revise de nuevo los datos.');
    }

  };
  const saveNewClient= async ()=>{
    if(newClientId!="" && optionClients!=null){
 
      console.log("doc", newClientId);
      console.log("name", newClientName);
      await createClient(
        {
          client_doc_id: newClientId,
          client_name: newClientName,
        },
        (response) => {
          console.log(response.data);
          toast.success('Cliente fue agregado exitosamente');
          setIsNewClient(false);
          setReloadClients(true);
        },
        (error) => {
          console.error(error);
          toast.error("Ya existe un cliente con ese documento de id");
        });
      }
      else{
        toast.error("Digite un id válido");
      }


  }
  return (
    
    <div className=" orderSplit">

    

      <div className="sectionOrder">
      <h2 className=" addNewSubt  marg-l">Ingrese la información: </h2>
      <div className="newOrderCont">

      <div className="labelsOrders">

      <label>ID Venta</label>
      <label>Fecha</label>
      <label>Estado Venta</label>

      </div>

      <div className="inputsOrders">
      <input name= "id_order" value= {idOrder}className="inputChange inputValue" type="number"  min="1"placeholder=""  onChange={(e)=>setIdOrder(e.target.value)} required></input>

      <SelectDate name= "date" value= {selectedDate}   setSelectedDate ={setSelectedDate}/>
      <select name="state" value= {stateOrder} className="selectStatus"onChange={(e)=>setStateOrder(e.target.value)}>
      <option className="pending" value="En proceso">En proceso</option>
      <option className="aproved" value="Entregada">Entregada</option>
      <option className="denied" value="Cancelada">Cancelada</option>
      </select>


      </div>
      </div>
      <div className="divClientOpt">
      <h5 >Vendedor</h5>
      <InputOptions  listOptions={optionSellers} setOptionSelected= {setSeller} labelOf= "Buscar Vendedor"/>

      </div>
      <div className="divClientOpt">
      <h5 >Cliente</h5>
      <InputOptions  listOptions={optionClients} setOptionSelected= {setClient} labelOf= "Buscar Cliente"/>
      
      <div className="divCenter">
      { 
        isnewClient ?
        <>
         <div className="closeNewClient">
              <button className="btnGeneral spanCloseClient" onClick={() => setIsNewClient(false)}>
                <i className="far fa-times-circle fa-1x" ></i> Cerrar </button>
            </div>
            <div className="divClient">
              <div>

                <label>ID cliente </label>
                <label>Nombre cliente</label>

              </div>
              <div>

                <input  type="number"className="inputChange " min="1" placeholder="ID Cliente" value ={newClientId} onChange={(e)=>setNewClientId(e.target.value)} required></input>
                <input  type="text" autoCapitalize= "sentences"className="inputChange " placeholder="Nombre Cliente" value ={newClientName} onChange={(e)=>setNewClientName(e.target.value)} required></input></div>

            </div>
            <button type="submit" className="btnGeneral btnMedium"   onClick={() => saveNewClient(true)}><i className="fas fa-save"></i>Guardar Cliente </button>
          </>: (
          <div className="saveBtnDiv">
            <button type="submit" className="btnGeneral  btnMedium"   onClick={() => setIsNewClient(true)}><i className="fas fa-user-plus"></i>Nuevo Cliente </button>

            </div>

        )
        }
</div> 
      

      </div>

      </div>


     



      <div className="listSectionContainer divProductToAdd ">
      <div>
      <h3 className="subt1">AÑADIR PRODUCTOS: </h3>

      </div>
      <div className="productsToCart">
        <div><InputOptions  listOptions={availableProducts} setOptionSelected= {setProductSelected} labelOf= "Buscar Producto"/></div>

        <div className="dataProductToAdd">
        <div className= "divCartOpt"><label>Id </label>
        <input id="id_add" className="inputChange inputNumber" type ="number" placeholder="" min="1" disabled></input></div>
     
        <div className= "divCartOpt"><label>Descripcion </label>
        <input id="descrip_add"className="inputChange mediumTD" type ="text" placeholder="" min="1"disabled ></input></div>
      <div className= "divCartOpt"><label>Cantidad </label>
      <input id="quantity_add" className="inputChange inputNumber" type ="number" placeholder="1" min="1" value={productQuantityToAdd} 
      onChange={(e)=>setproductQuantityToAdd(e.target.value)}></input></div>
      <div className= "divCartOpt"><label>x Precio Und </label>
      <input id="unitprice_add" className="inputChange inputNumber" type ="number" placeholder="$"  disabled  ></input></div>

      <div className= "divCartOpt"><label> = Total</label>
      <input id="total_add" className="inputChange inputNumber" type ="number" placeholder="$" disabled ></input></div>
      <div className="btn2div">
      <button className="btnGeneral btnEdit" onClick= {() => addProductToCart()}><i className="fas fa-shopping-cart "></i></button>
      <button type ="button" className="btnGeneral btnDelete">
      <img className="btnIcon" src={deleteicon} onClick= {() => setReloadProducts(true)} alt="img"></img></button> </div>     
      </div>

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

      <tbody>  {productsToBuy.map((product) => {
            var rowN= product.numRow;
    
          { return (
           <tr  key={nanoid()} className="viewRowMedium">
           <td className="numberTD">{product.id}</td>
           <td className="mediumTD">{product.description}</td>
           <td className="smallTD ">  <label>{product.quantity}</label></td>
           <td className="smallTD">$ {product.unitprice}</td>
           <td className="smallTD">$ {product.unitprice * product.quantity} </td>
               
           <button onClick= {() => deleteProductFromCart(product.numRow, product.subtotal)}><i className="fas fa-backspace" ></i></button>
           </tr>
     
     
          );}
         })}
     
     
     
      </tbody>
      <tfoot>    <tr>
      <td align="right"colspan="4">Total</td>
      <td> <input className="inputChange inputNumber " placeholder="$ Total" value={totalOrder} disabled></input></td>
      </tr></tfoot>
      </table>
      </div>



      <div className="infoFin">
      <label >Total Venta</label>
      <input className="inputChange inputTotal " placeholder="$ Total" value= {totalOrder}disabled></input>
      <div className="divBtnTotalOrder ">

      <button type="submit"className="btnBig btnAddOrder"  onClick={()=>submitCreateOrder()}>
      <img className="btnIcon" src={checkicon} alt="img"></img> Guardar
      </button>
      <button type="reset"className=" btnBig btnCancelOrder">
      Cancelar
      </button>
      </div>
      </div>
      </div>
    

      <ToastContainer rtl
       position="top-center"
       autoClose={2000}
       transition={Zoom}
       limit={1}
       />
    
    </div>
  
  )
}



export default AddOrder
