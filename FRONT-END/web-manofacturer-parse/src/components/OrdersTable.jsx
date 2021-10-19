import { nanoid } from 'nanoid'
import React, { useEffect, useState } from 'react';
import { Dialog, Tooltip } from '@material-ui/core';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import { deleteOrder } from 'utils/Api-connection';

const OrdersTable = ({listOrders, setReload}) => {

  const RowOrder=({order,setReload})=>{

  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);

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
      <td className="numberTD">{order.seller_id}</td>
      <td className="numberTD">{order.client.client_id}</td>
      <td className="descripTD">{order.client.client_name}</td>
      <td className="mediumTD">{order.date}</td>
      <td className="smallTD">{order.total}</td>
      <td className="smallTD " >{order.state}</td>
      <td className="smallTD">
                  <div className="editBtnContainer">
      <Tooltip title='Editar' arrow placement="left">
        <button type="button" className="btnGeneral btnEdit"> <i class="fas fa-user-cog"></i></button></Tooltip>
        <Tooltip title='Eliminar' arrow placement="botton"> 
          <button type="reset" className="btnGeneral btnDelete" onClick={() => setConfirmDeleteDialog(true)}>  <i class="fas fa-trash"></i></button></Tooltip>
          </div>
                </td>
    
 <Dialog open={confirmDeleteDialog}>
  <div className="dialogDelete">
    
<h5>¿Está seguro de eliminar esta venta?</h5>
<p align="center">ID: {order.id_order}  </p>
<p className="pLarge" align="center"> Cliente: ID {order.client.id} - {order.client.client_name} </p>

<div className="editBtnContainer2">
  <button type="button" className="btnGeneral btnEdit"  onClick={() => ToDeleteOrder()} >Si</button>
  <button type="reset" className="btnGeneral btnDelete" onClick={() => setConfirmDeleteDialog(false)} >No</button>
</div> 
 </div>
</Dialog>

    </tr>

    
  )
}



  return (
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
            return (
                <RowOrder  key={nanoid()} order= {order} setReload= {setReload}/>
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
  )
}
export default OrdersTable



