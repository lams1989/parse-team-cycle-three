import { nanoid } from 'nanoid';
import { Dialog, Tooltip } from '@material-ui/core';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import React, { useState, useEffect, useRef } from 'react';
import { obtainOrders, obtainOrderById, obtainOrderByClientName, deleteOrder } from 'utils/Api-connection';
import { obtainOrderByClientId } from 'utils/Api-connection';
import EditOrder from './EditOrder';
import { maxHeight, maxWidth } from '@material-ui/system';
import PrivateComponent from './PrivateComponent';

const OrdersTable = ({ }) => {
  const RowOrder = ({ order, setReload }) => {
    const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);
    const [UpdateDialog, setUpdateDialog] = useState(false);
    const [viewInfoOrder, setViewInfoOrder] = useState(false);
    const ToDeleteOrder = async () => {
      setConfirmDeleteDialog(false);
      await deleteOrder(
        order._id,
        (response) => {
          console.log(response.data);
          toast.success('Venta eliminada con éxito');
        },
        (error) => {
          console.error(error);
          toast.error('Error eliminando la venta');
        }
      );
      setReload(true);
    }
    return (
      <tr className="datarow">
        <td className="numberTD">{order.id_order}</td>
        <td className="numberTD">{order.seller.seller_id}</td>
        <td className="numberTD">{order.client.client_doc_id}</td>
        <td className="mediumTD">{order.client.client_name}</td>
        <td className="smallTD">{order.date}</td>
        <td className="smallTD"> $ {order.total}</td>
        <td className="smallTD " >{order.state}</td>
        <td className="smallTD">
          <div className="editBtnContainer3">
            <Tooltip title='Ver' arrow placement="top">
              <button type="button" className="btnGeneral btnDelete" onClick={() => setViewInfoOrder(true)}> <i className="fas fa-eye"></i></button></Tooltip>
            <Tooltip title='Editar' arrow placement="top">
              <button type="button" className="btnGeneral btnEdit" onClick={() => setUpdateDialog(true)}> <i className="fas fa-edit"></i></button></Tooltip>
          
              <PrivateComponent roleList={["administrador"]}>
            <Tooltip title='Eliminar' arrow placement="top">
              <button type="button" className="btnGeneral btnDelete" onClick={() => setConfirmDeleteDialog(true)}>
                <i className="fas fa-trash"></i></button></Tooltip>
                </PrivateComponent>
          </div>
        </td>
        <Dialog open={viewInfoOrder}>
          <div className="dialogViewOrder">
            <div className="headerDialogView">
              <h5>Venta # {order.id_order}</h5>
              <span className="spanClose">
                <i className="far fa-times-circle fa-2x" onClick={() => setViewInfoOrder(false)}></i> </span>
            </div>
            <div className="infoOrderheader">
              <span className="pLarge" > Cliente: ID {order.client.id} - {order.client.client_name} </span>
              <span> Vendedor: {order.seller.seller_id} - {order.seller.seller_name} </span>
              <span> Fecha: {order.date} </span>
            </div>
            <div className="tableDialogView">
              <table className="tableorderinfo">
                <thead>
                  <tr className="viewRow">
                    <th>Id</th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio Und</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {order.description.map((product) => {
                    return (
                      <tr key={nanoid()} className="viewRow">
                        <td className="numberTD">{product.id}</td>
                        <td className="mediumTD">{product.description}</td>
                        <td className="smallTD ">{product.quantity}</td>
                        <td className="smallTD">$ {product.unitprice}</td>
                        <td className="smallTD">$ {product.unitprice * product.quantity} </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>    <tr>
                  <td align="right" colspan="4">Total</td>
                  <td> {order.total}</td>
                </tr></tfoot>
              </table>
            </div>
            <div className="divtotalOrder">
              <button type="button" className="btnGeneral btnEdit BtnOK" onClick={() => setViewInfoOrder(false)} >OK</button>
            </div>
          </div>
        </Dialog>
        <Dialog
          fullWidth={true}
          maxWidth={"xl"}
          open={UpdateDialog}>
          <div className="editDialog">
            <div className="headerDialogView">
              <h4>MODIFICAR UNA VENTA</h4>
              <span className="spanClose">
                <i className="far fa-times-circle" onClick={() => setUpdateDialog(false)}></i> </span></div>
            <EditOrder orderObj={order} setUpdateDialog={setUpdateDialog} setReload={setReload}></EditOrder>
          </div>
        </Dialog>
        <Dialog open={confirmDeleteDialog}>
          <div className="dialogDelete">
            <div className="headerDialogView">
              <h5>¿Está seguro de eliminar esta venta?</h5>
              <span className="spanClose">
                <i className="far fa-times-circle fa-2x" onClick={() => setConfirmDeleteDialog(false)}></i> </span></div>
            <p align="center">ID: {order.id_order}   - Total: $ {order.total} </p>
            <p className="pLarge" align="center"> Cliente: ID {order.client.client_doc_id} - {order.client.client_name} </p>
            <p className="pLarge" align="center"> Fecha: ID {order.date}</p>
            <div className="editBtnContainer2">
              <button type="button" className="btnGeneral btnEdit BtnOK" onClick={() => ToDeleteOrder()} >Si</button>
              <button type="button" className="btnGeneral btnDelete" onClick={() => setConfirmDeleteDialog(false)} >No</button>
            </div>
          </div>
        </Dialog>
      </tr>
    )
  }
  /**table section fetch data and search methods */
  const formSearchOrder = useRef(null);
  const [reload, setReload] = useState(false);
  const [listOrders, setListOrders] = useState([]);

  const submitSearchOrderForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(formSearchOrder.current);
    console.log(fd.id);
    const searchOpt = {};
    fd.forEach((value, key) => {
      searchOpt[key] = value;
    });
    const searchby = searchOpt.searchSelect;
    console.log("s: ", searchby);
    const info = searchOpt.toSearchInput;
    if (searchby == "searchbyIdOrder") {
      if (!Number(info)) {
        toast.error("digite un ID numérico", {
          position: "bottom-center"
        });
      } else {
        console.log("searchbyIdOrder");
        await obtainOrderById(info,
          (response) => {
            console.log('la respuesta que se recibio fue', response);
            console.log(response.data);
            setListOrders(response.data);
          },
          (error) => {
            console.error('Salio un error:', error);
          }
        );

      }
    }
    else if (searchby == "searchbyIdClient") {
      if (!Number(info)) {
        toast.error("digite un ID numérico", {
          position: "bottom-center"
        });
      } else {
        console.log("serachbyidClient");
        await obtainOrderByClientId(info,
          (response) => {
            console.log('la respuesta que se recibio fue', response);
            console.log(response.data);
            setListOrders(response.data);
          },
          (error) => {
            console.error('Salio un error:', error);
          }
        );
      }
    }
    else if (searchby == "searchbyClientName") {
      console.log("clientename");
      await obtainOrderByClientName(info,
        (response) => {
          console.log('la respuesta que se recibio fue', response);
          console.log(response.data);
          setListOrders(response.data);
        },
        (error) => {
          console.error('Salio un error:', error);
        }
      );
    }
  }
  useEffect(async () => {
    console.log(
      'Hola, soy un use effect que se ejecuta cuando la pagina se renderiza, para cargar la lista inicial o para recargar tabla :)'
    );
    await obtainOrders(
      (response) => {
        console.log('the orders response was', response);
        console.log(response.data);
        setListOrders(response.data);
      },
      (error) => {
        console.error(' An error:', error);
      }
    );
    document.getElementById("formSearchingOrder").reset();
    setReload(false);
  }, [reload]);
  return (<>
    <div className="searchContainer  marg-l">
      <form id="formSearchingOrder" ref={formSearchOrder} onSubmit={submitSearchOrderForm} >
        <span>Buscar Venta por </span>
        <select id="searchSelect" name="searchSelect" className="selectRole ">
          <option value="" disabled>Buscar por</option>
          <option value="searchbyIdOrder">ID Venta</option>
          <option value="searchbyIdClient">ID Cliente</option>
          <option value="searchbyClientName">Nombre Cliente</option>
        </select>
        <input type="text" name="toSearchInput" className="toSearchInput" placeholder="Buscar" />
        <button type="submit" className="btnGeneral btnSearchUser" >
          <i className="fas fa-search-plus"></i>
          Buscar</button>
      </form>
      <button className="btnGeneral btnBack" onClick={() => setReload(!reload)}><i className="fas fa-undo-alt"></i>Volver a tabla</button>
    </div>
    <div className="listSectionContainer divOrders">
      <table className="ListTable">
        <thead className="thead ">
          <tr>
            <th className="col_title ">ID Venta</th>
            <th className="col_title ">ID Vendedor</th>
            <th className="col_title">ID Cliente</th>
            <th className="col_title">Cliente</th>
            <th className="col_title">Fecha Venta</th>
            <th className="col_title">Total</th>
            <th className="col_title">Estado</th>
            <th className="col-title col-last">Modificar</th>
          </tr>
        </thead>
        {/*All this data rows are examples. Later it will be implemented a function map that fills the rows*/}
        <tbody>
          {listOrders.map((order) => {
            console.log(order);
            return (
              <RowOrder key={nanoid()} order={order} setReload={setReload} />
            );
          })}
        </tbody>
      </table>
      <ToastContainer rtl
        position="top-center"
        autoClose={2000}
        transition={Zoom}
        limit={1}
      />
    </div>
  </>
  )
};
export default OrdersTable;



