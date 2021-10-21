import React from 'react'
import { Link } from 'react-router-dom';
import "styles/pages-styles.css"
import sellList from "media/receipt_long_white_48dp.svg"
import checkicon from "media/done_outline_white_48dp.svg"
import deleteicon from "media/backspace_black_48dp.svg"
const AddOrder = () => {
  return (
    <div className="MainSection">
      
      <h2 className=" addNewSubt  marg-l">Agregar Nueva Venta</h2>
      <form className=" formNewOrder">
        <div className="newOrderContainer">
          <ul className="listFields">
            <li>
              <label>ID Venta</label>
              <input className="inputChange inputNumber" placeholder="001" disabled></input>
            </li>
            <li>
              <label>Fecha</label>
              <input className="inputChange" placeholder="5/10/2021" ></input>
            </li>
            <li>
              <label>Vendedor</label>
              <input className="inputChange" placeholder="Nombre Vendedor"></input>
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
          <ul className="listFields">
            <li>
              <label>ID Cliente</label>
              <input className="inputChange " placeholder="ID Cliente" ></input>
            </li>
            <li>
              <label htmlFor="">Nombre Cliente</label>
              <input className="inputChange " placeholder="Nombre Cliente"></input>
            </li>
            <li className="totalLi">
              <label>Total Venta</label>

              <input className="inputChange inputTotal " placeholder="$ Total"></input>
            </li>
          </ul>
        </div>
      </form>
      <div >
        <h3 className="subt1">Lista de Productos Comprados:</h3>
      </div>
      <div className="listSectionContainer divProductToAdd">
        <table className="ListTable">
          <thead className="thead">
            <tr>
              <th className="col_title">Añadir</th>
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
              <td className="smallTD">
                <button type="button" className="btnGeneral btnEdit">
                <img className="btnIcon" src={checkicon}  alt="img"></img>Añadir</button>
              </td>
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
              <td className="smallTD">
                <button type="button" className="btnGeneral btnEdit">
                <img className="btnIcon" src={checkicon} alt="img"></img>Añadir</button>
              </td>
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
      </div>
      <div className="infoFin">
        <div className="divBtnTotalOrder">
          <span className="totaltext">Total $142.000</span>
          <button className="btnBig btnAddOrder">
          <img className="btnIcon" src={checkicon}  alt="img"></img> Guardar
          </button>
          <button className=" btnBig btnCancelOrder">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddOrder
