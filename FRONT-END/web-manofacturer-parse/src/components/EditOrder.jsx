
import "styles/pages-styles.css"
import { nanoid } from 'nanoid'

import checkicon from "media/done_outline_white_48dp.svg"
import deleteicon from "media/backspace_black_48dp.svg"
import { ToastContainer, toast, Zoom } from 'react-toastify';

import React, { useEffect, useState } from 'react';

import SelectDate from "./SelectDate";
import { obtainProductByState } from "utils/Api-connection";
import { obtainUserByRole } from "utils/Api-connection";
import { obtainClients } from "utils/Api-connection";
import InputOptions from "./InputOptions";
import { createClient } from "utils/Api-connection";
import { Dialog } from '@material-ui/core';
import { updateOrder } from "utils/Api-connection";



const EditOrder = ({ orderObj, setUpdateDialog, setReload }) => {

  /**Selected info for the order */

  const [idOrder, setIdOrder] = useState(orderObj.id_order);
  const [totalOrder, setTotalOrder] = useState(orderObj.total);
  const [stateOrder, setStateOrder] = useState(orderObj.state);
  const [selectedDate, setSelectedDate] = useState(orderObj.date);
  const [productsToBuy, setProductsToBuy] = useState(orderObj.description);

  /**If decide to change the seller and client */
  const [newSeller, setNewSeller] = useState(orderObj.seller);
  const [newClient, setNewClient] = useState(orderObj.client);

  const [editClient, setEditClient] = useState(false);
  const [editSeller, setEditSeller] = useState(false);


  const [dialogCancel, setDialogCancel] = useState(false);
  const [confirmUpdateDialog, setConfirmUpdateDialog] = useState(false);

  /**For the case of a new client */
  const [isnewClient, setIsNewClient] = useState(false);
  const [newClientName, setNewClientName] = useState("");
  const [newClientId, setNewClientId] = useState("");

  /**for the addd products cart section */
  const [productSelected, setProductSelected] = useState();
  const [productQuantityToAdd, setproductQuantityToAdd] = useState(1);
  const [reloadClients, setReloadClients] = useState(false);
  const [reloadProducts, setReloadProducts] = useState(false);
  const [actualRow, setActualRow] = useState(0);
  const [numRow, setNumberRow] = useState(0);


  /**List of  options for the inputs to choose, initial for the page*/
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
          var data = { "data": row, "client_doc_id": jsonClients[i].client_doc_id, "client_name": jsonClients[i].client_name }
          options.push(data);
        }
        console.log("datosClientes: ", options);
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
          var row = ( json[i].name);
          var data = { "data": row, "seller_id": json[i]._id, "seller_name": json[i].name };
          options.push(data);
          console.log(data);
        }
        console.log("datosVendedores: ", options);
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
          var data = { "data": row, "description": jsonProd[i].description, "unitprice": jsonProd[i].unitprice, "id": jsonProd[i].id };
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


  /**ReloadProducts list of available products to buy now (table) and reset fields 
  */
  useEffect(async () => {
    console.log("aaa")
    setProductsToBuy(productsToBuy);

    document.getElementById("id_add").value = "";
    setproductQuantityToAdd(1);
    document.getElementById("descrip_add").value = "";
    document.getElementById("unitprice_add").value = 0;
    document.getElementById("total_add").value = 0;

    setProductSelected(null);
    setReloadProducts(false);

  }, [reloadProducts]);


  /**If a different product is selected , it cleans fields*/
  useEffect(async () => {
    console.log("producto select: ", productSelected);
    if (productSelected != null) {

      document.getElementById("id_add").value = productSelected.id;
      document.getElementById("descrip_add").value = productSelected.description;
      document.getElementById("unitprice_add").value = productSelected.unitprice;
      document.getElementById("total_add").value = productSelected.unitprice * productQuantityToAdd;


    }

  }, [productSelected]);

  /**For changing the quantity of the product and display the right total before added to cart */
  useEffect(async () => {
    console.log("producto select: ", productSelected);
    if (productSelected != null) {
      document.getElementById("unitprice_add").value = productSelected.unitprice;
      document.getElementById("total_add").value = productSelected.unitprice * productQuantityToAdd;

    }

  }, [productQuantityToAdd]);

  /**For adding products to the productsToBuy List */
  const addProductToCart = () => {
    console.log("to add products to cart");

    if (productSelected != null) {

      let id = document.getElementById("id_add").value = productSelected.id;
      let descrip = document.getElementById("descrip_add").value = productSelected.description;
      let uprice = document.getElementById("unitprice_add").value = productSelected.unitprice;

      let totalProduct = document.getElementById("total_add").value = productSelected.unitprice * productQuantityToAdd;
      console.log("unit ", productQuantityToAdd, "total", totalProduct);
      const rowProduct = { "id": id, "description": descrip, "unitprice": uprice, "quantity": productQuantityToAdd, "subtotal": totalProduct, "numRow": numRow }

      productsToBuy.push(rowProduct);
      let totalplus = totalOrder + totalProduct;
      setTotalOrder(totalplus)
      let addrow = numRow + 1;
      setNumberRow(addrow);
      setReloadProducts(true);
      console.log("productsBuy", productsToBuy);
    } else {
      toast.error('Seleccione otra vez el producto o uno nuevo');
    }


  }

  /**For deleting products from the cart productsToBuy list */
  const deleteProductFromCart = (rowN, subtotal) => {

    console.log("i dont buy it, no");
    console.log("row", rowN);
    let newtotal = totalOrder - subtotal;
    setTotalOrder(newtotal)
    /**Filtering the list */
    const list = productsToBuy.filter((elem) => {
      return elem.numRow !== rowN;
    })
    setProductsToBuy(list);

    console.log("filtrado", productsToBuy);
  }


  /**Edits or updates a order with all the data to be send to database */
  const submitEditOrder = async () => {

    const clientObjEdited = { "client_doc_id": newClient.client_doc_id, "client_name": newClient.client_name }
    const sellerObjEdited = { "seller_id": newSeller.seller_id, "seller_name": newSeller.seller_name }
    let id_order_db = orderObj._id;
    const obj = {
      id_order_db,
      "id_order": idOrder,
      "date": selectedDate,
      "state": stateOrder,
      "description": productsToBuy,
      "client": clientObjEdited,
      "seller": sellerObjEdited,
      "total": totalOrder

    }
    console.log("obj ", obj)

    if (productsToBuy.length > 0 && newClient != null && newSeller != null) {

      const clientObjEdited = { "client_doc_id": newClient.client_doc_id, "client_name": newClient.client_name }
      const sellerObjEdited = { "seller_id": newSeller.seller_id, "seller_name": newSeller.seller_name }
      let id_order_db = orderObj._id;

      await updateOrder(

        orderObj._id,
        {
          "id_order": idOrder,
          "date": selectedDate,
          "state": stateOrder,
          "description": productsToBuy,
          "client": clientObjEdited,
          "seller": sellerObjEdited,
          "total": totalOrder
        },
        (response) => {
          console.log(response.data);

          toast.success('Venta modificada con éxito');
          setUpdateDialog(false);
          setReload(true);
        },
        (error) => {
          console.error(error);
          toast.error('Error modificando la orden de venta');

        }

      );

    } else {
      toast.error("Error al modificar la venta. No puede haber venta sin articulos.");
    }

    setConfirmUpdateDialog(false);

  }

  /**For creating new client and saving it to clients database, after that, the option
   * of clients is reloaded and client can be selected from the input
   */
  const saveNewClient = async () => {
    if (newClientId != "" && optionClients != null) {

      console.log("doc", newClientId);
      console.log("name", newClientName);
      await createClient(
        {
          client_doc_id: newClientId,
          client_name: newClientName,
        },
        (response) => {
          console.log(response.data);
          toast.success('Cliente fue agregado exitosamente, revise el selector de clientes');
          setIsNewClient(false);
          setReloadClients(true);
        },
        (error) => {
          console.error(error);
          toast.error("Ya existe un cliente con ese documento de id");
        });
    }
    else {
      toast.error("Digite un id válido");
    }

  }


  /**User interface part */
  return (

    <div className=" orderSplit">


      <div className="sectionOrder ">
        <h1 className=" addNewSubt  marg-l"> VENTA REALIZADA  # {orderObj.id_order}: </h1>
        <div className="newOrderCont">

          <div className="labelsOrders">

            <label>ID Venta</label>
            <label>Fecha</label>
            <label>Estado Venta</label>
            <label>Vendedor</label>
            <label>Cliente</label>
          </div>

          <div className="inputsOrders">
            <label>{orderObj.id_order}</label>
            <SelectDate name="date" value={selectedDate} setSelectedDate={setSelectedDate} />
            <select name="state" value={stateOrder} className="selectStatus" onChange={(e) => setStateOrder(e.target.value)}>
              <option className="pending" value="En proceso">En proceso</option>
              <option className="aproved" value="Entregada">Entregada</option>
              <option className="denied" value="Cancelada">Cancelada</option>
            </select>
            <input className="inputChange " value={newSeller.seller_name} disabled></input>

            <input className="inputChange " value={newClient.client_name} disabled></input>
          </div>
        </div>

        <div className="changeOpt">
          <div>
            <button className="btnGeneral btnOpt" onClick={() => setEditSeller(!editSeller)}>Cambiar Vendedor</button>
            {editSeller && (<div className="divClientOpt">

              <InputOptions listOptions={optionSellers} setOptionSelected={setNewSeller} labelOf="Buscar Vendedor" />

            </div>)}
          </div>
          <div>
            <>
              <button className="btnGeneral btnOpt" onClick={() => setEditClient(!editClient)}>Cambiar Cliente</button>
              {editClient && (<div className="divClientOpt">
                <InputOptions listOptions={optionClients} setOptionSelected={setNewClient} labelOf="Buscar Cliente" />

                <div className="divCenter">
                  {
                    isnewClient ?
                      <div className="dataNewClientdiv">
                        <div className="closeNewClient">
                          <button type="submit" className="btnGeneral btnEdit mg-le" onClick={() => saveNewClient(true)}><i className="fas fa-save"></i>Guardar  </button>

                          <button className="btnGeneral spanCloseClient" onClick={() => setIsNewClient(false)}>
                            <i className="far fa-times-circle fa-1x" ></i> Cerrar </button>
                        </div>
                        <div className="divClient">
                          <div>

                            <label>ID Cliente  </label>
                            <label>Nombre Cliente </label>

                          </div>
                          <div>

                            <input type="number" className="inputChange " min="1" placeholder="ID Cliente" value={newClientId} onChange={(e) => setNewClientId(e.target.value)} required></input>
                            <input type="text" autoCapitalize="sentences" className="inputChange " placeholder="Nombre Cliente" value={newClientName} onChange={(e) => setNewClientName(e.target.value)} required></input></div>

                        </div>

                      </div> : (
                        <div className="saveBtnDiv">
                          <button type="submit" className="btnGeneral  btnOpt" onClick={() => setIsNewClient(true)}><i className="fas fa-user-plus"></i>Nuevo Cliente </button>

                        </div>

                      )
                  }
                </div>

              </div>)}
            </>
          </div>

        </div>



      </div>




      <div className="listSectionContainer divProductToAdd ">
        <div>
          <h3 className="subt1"> PRODUCTOS COMPRADOS: </h3>

        </div>
        <div className="productsToCart">
          <div><InputOptions listOptions={availableProducts} setOptionSelected={setProductSelected} labelOf="Buscar Producto" /></div>

          <div className="dataProductToAdd">
            <div className="divCartOpt"><label>Id </label>
              <input id="id_add" className="inputChange inputNumber" type="number" placeholder="" min="1" disabled></input></div>

            <div className="divCartOpt"><label>Descripcion </label>
              <input id="descrip_add" className="inputChange mediumTD" type="text" placeholder="" min="1" disabled ></input></div>
            <div className="divCartOpt"><label>Cantidad </label>
              <input id="quantity_add" className="inputChange inputNumber" type="number" placeholder="1" min="1" value={productQuantityToAdd}
                onChange={(e) => setproductQuantityToAdd(e.target.value)}></input></div>
            <div className="divCartOpt"><label>x Precio Und </label>
              <input id="unitprice_add" className="inputChange inputNumber" type="number" placeholder="$" disabled  ></input></div>

            <div className="divCartOpt"><label> = Total</label>
              <input id="total_add" className="inputChange inputNumber" type="number" placeholder="$" disabled ></input></div>
            <div className="btn2div">
              <button className="btnGeneral btnEdit" onClick={() => addProductToCart()}><i className="fas fa-shopping-cart "></i></button>
              <button type="button" className="btnGeneral btnDelete">
                <img className="btnIcon" src={deleteicon} onClick={() => setReloadProducts(true)} alt="img"></img></button> </div>
          </div>

        </div>


        /
        <div className="tableDialogView divCartTable">

          <table className="tableorderinfo">
            <thead>
              <tr className="viewRowMedium">
                <th>Id</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio Und</th>
                <th>Subtotal</th>
                <th>Quitar</th>
              </tr>
            </thead>

            <tbody>  {productsToBuy.map((product) => {
              var rowN = product.numRow;

              {
                return (
                  <tr key={nanoid()} className="viewRowMedium">
                    <td className="numberTD">{product.id}</td>
                    <td className="mediumTD">{product.description}</td>
                    <td className="smallTD ">  <label>{product.quantity}</label></td>
                    <td className="smallTD">$ {product.unitprice}</td>
                    <td className="smallTD">$ {product.unitprice * product.quantity} </td>

                    <button onClick={() => deleteProductFromCart(product.numRow, product.subtotal)}><i className="fas fa-backspace" ></i></button>
                  </tr>


                );
              }
            })}



            </tbody>
            <tfoot>    <tr>
              <td align="right" colspan="4">Total $</td>
              <td> <input className="inputChange inputNumber " placeholder="$ Total" value={totalOrder} disabled></input></td>
            </tr></tfoot>
          </table>
        </div>



        <div className="infoFin">
          <label className="labeltotal">Total Venta $</label>
          <input className="inputChange inputTotal " placeholder="$ Total" value={totalOrder} disabled></input>
          <div className="divBtnTotalOrder ">

            <button type="submit" className="btnBig btnAddOrder" onClick={() => setConfirmUpdateDialog(true)}>
              <img className="btnIcon" src={checkicon} alt="img"></img> Guardar
            </button>
            <button type="button" onClick={() => setUpdateDialog(false)} className=" btnBig btnCancelOrder">
              Cancelar
            </button>
          </div>
        </div>
      </div>

      <Dialog open={confirmUpdateDialog}>
        <div className="dialogUpdate">

          <h5>Actualización de la Orden:</h5>

          <div className="infoUpdateDiv">
            <p align="center"> ID: {idOrder}      --    Estado: {stateOrder}</p>
            <p align="center">Cliente:{newClient.client_doc_id} - {newClient.client_name}</p>
            <p align="center"> Vendedor: {newSeller.seller_id} - {newSeller.seller_name}   </p>

            <p align="center"> Precio Total: ${totalOrder}   </p>

          </div>

          <div className="editBtnContainer2">
            <button type="button" className="btnGeneral btnEdit" onClick={() => submitEditOrder()} >Si</button>
            <button type="reset" className="btnGeneral btnDelete" onClick={() => setConfirmUpdateDialog(false)} >No</button>
          </div>

        </div>
      </Dialog>

      <Dialog open={dialogCancel}>
        <div className="dialogDelete">

          <h5>¿Está seguro de cancelar la edición de la orden ?</h5>
          <p align="center">Los datos editados no se guardarán.   </p>


          <div className="editBtnContainer2">

            <button type="button" id="reloadPage" className="btnGeneral btnEdit" onClick={() => setUpdateDialog(false)}> Si</button>
            <button type="button" className="btnGeneral btnDelete" onClick={() => setDialogCancel(false)} >No</button>
          </div>
        </div>
      </Dialog>

      <ToastContainer rtl
        position="top-center"
        autoClose={2000}
        transition={Zoom}
        limit={1}
      />

    </div>

  )
}



export default EditOrder
