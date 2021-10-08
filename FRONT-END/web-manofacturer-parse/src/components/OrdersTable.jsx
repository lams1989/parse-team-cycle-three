import React from 'react'
import orderslist from 'mocks/orders.json'
import editicon from "media/mode_edit_white_48dp.svg"

const OrdersTable = () => {
  return (
    <div className="listSectionContainer divOrders">
        <table className="ListTable">
          <thead className="thead ">
            <tr>
              <th className="col_title ">ID Venta</th>
              <th className="col_title ">ID Vendedor</th>
              <th className="col_title">Cliente</th>
              <th className="col_title">Productos</th>
              <th className="col_title">Total</th>
              <th className="col_title">Fecha Venta</th>
              <th className="col_title">Estado</th>
              <th className="col-title col-last">Modificar</th>
            </tr>
          </thead>
          {/*All this data rows are examples. Later it will be implemented a function map that fills the rows*/}
          <tbody>
            
          {orderslist.map((order) => {
              return (
                <tr className="datarow">
              <td className="numberTD">{order.id}</td>
              <td className="numberTD">{order.idseller}</td>
              <td className="descripTD">{order.client}</td>
              <td className="descripTD">{order.products}</td>
              <td className="smallTD">{order.total}</td>
              <td className="smallTD">{order.date}</td>
              <td className="smallTD " >{order.state}</td>
              <td className="smallTD divBtnEditRow">
                <button type="button" className="btnGeneral btnEdit">
                <img className="btnIcon" src={editicon}  alt="img"/> </button>
              </td>
            </tr>
              
              );
            })}
           
          </tbody>
        </table>
      </div>
  )
}

export default OrdersTable
 
 
 
 