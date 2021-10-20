import { nanoid } from 'nanoid'
import React, { useEffect, useState } from 'react';
import { Dialog, Tooltip } from '@material-ui/core';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import { deleteOrder } from 'utils/Api-connection';

const OrdersTable = ({listOrders, setReload}) => {

  const RowOrder=({order,setReload})=>{

  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);
  
  const [viewInfoOrder, setViewInfoOrder] = useState(false);

  const [arrayProducts, setArrayProducts]= useState([]);
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
      <td className="smallTD">{order.total}</td>
      <td className="smallTD " >{order.state}</td>
      <td className="smallTD">
                  <div className="editBtnContainer3">
        <Tooltip title='Ver' arrow placement="top">
        <button type="button" className="btnGeneral btnDelete" onClick={() => setViewInfoOrder(true)}> <i className="fas fa-eye"></i></button></Tooltip>
      <Tooltip title='Editar' arrow placement="top">
        <button type="button" className="btnGeneral btnEdit"> <i className="fas fa-user-cog"></i></button></Tooltip>
        <Tooltip title='Eliminar' arrow placement="top"> 
          <button type="reset" className="btnGeneral btnDelete" onClick={() => setConfirmDeleteDialog(true)}>  
          <i class="fas fa-trash"></i></button></Tooltip>
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
<span> Vendedor: {order.seller_id} </span>
<span> Fecha: {order.date} </span>

</div>
    <div className="tableDialogView">
      
      <table className= "tableorderinfo">
      <thead>
        <tr className= "viewRow">
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
              <tr  key={nanoid()} className="viewRow">
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
          <td align="right"colspan="4">Total</td>
          <td> {order.total}</td>
        </tr></tfoot>
      </table>
    </div>

    <div className="divtotalOrder">
  
<button type="button" className="btnGeneral btnEdit BtnOK" onClick={() => setViewInfoOrder(false)} >OK</button>
 </div>


 </div>
</Dialog>


 <Dialog open={confirmDeleteDialog}>
  <div className="dialogDelete">
    
<h5>¿Está seguro de eliminar esta venta?</h5>
<p align="center">ID: {order.id_order}   - Total: $ {order.total} </p>

<p className="pLarge" align="center"> Cliente: ID {order.client.client_doc_id} - {order.client.client_name} </p>
<p className="pLarge" align="center"> Fecha: ID {order.date}</p>


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
            console.log(order);
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



