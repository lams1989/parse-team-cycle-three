import React from 'react'
import search from "media/zoom_in_white_48dp.svg"
import deleteicon from "media/backspace_white_48dp.svg"
import editicon from "media/mode_edit_white_48dp.svg"
import checkicon from "media/done_outline_white_48dp.svg"
import ProductTable from 'components/ProductTable'


const Products = () => {
  return (
    <div className="MainSection">
      <div classNameName="titlepage">
        <span className="title"> Lista de Productos</span>
      </div>
      <h2 className=" addNewSubt marg-l">Agregar Producto</h2>
      <div className="newOrderContainer">
        <ul className="ulProduct">
          <li>
            <label>ID Producto</label>
            <input className="inputChange inputNumber " placeholder="ID" ></input>
          </li>
          <li>
            <label>Precio Unitario</label>
            <input className="inputChange inputMedium" placeholder="$" ></input>
          </li>
          <li>
            <label>Estado</label>
            <select className="selectStatus" >
              <option className="aproved" value="available">Disponible</option>
              <option className="denied" value="notavailable">No disponible</option>
            </select>
          </li>
          <li>
            <label>Descripción</label>
            <input className="inputChange inputLarge" placeholder="Descripción producto"></input>
          </li>
        </ul>
        <div className="btnDiv">
          <button type="submit" className="btnGeneral btnCreateProduct">
          <img className="btnIcon" src={checkicon}  alt="img"></img>Registrar Producto</button>
          <button type="reset" className="btnGeneral btnCancel">Cancelar</button>
        </div>
      </div>
      <div className="searchContainer  marg-l">
        <form>
          <span>Selecciona </span>
          <select className="selectRole ">
            <option>ID Producto</option>
            <option>Descripción</option>
          </select>
          <input type="text" className="toSearchInput" placeholder="Digite el ID del producto" />
          <span>para </span>
          <button type="submit" className="btnGeneral btnSearchUser marg-l" id="submitProductSearchBtn">
          <img className="btnIcon"  src={search} alt="img"></img>  Buscar</button>
          <button type="submit" className="btnGeneral btnSearchUser marg-l" id="updateProductSearchBtn">
          <img className="btnIcon"  src={editicon} alt="img"></img>  Actualizar</button>
          <button type="submit" className="btnGeneral btnSearchUser marg-l" id="deleteProductSearchBtn">
          <img className="btnIcon"  src={deleteicon} alt="img"></img>     Eliminar</button>
        </form>
      </div>
      
      <ProductTable/>
    
    </div>
  )
}

export default Products;

