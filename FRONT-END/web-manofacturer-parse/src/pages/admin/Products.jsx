import React, { useEffect, useState, useRef } from 'react';
import search from "media/zoom_in_white_48dp.svg"
import deleteicon from "media/backspace_white_48dp.svg"
import editicon from "media/mode_edit_white_48dp.svg"
import checkicon from "media/done_outline_white_48dp.svg"
import ProductTable from 'components/ProductTable'
import { createProduct} from 'utils/Api-conexion';

import { ToastContainer, toast,Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Products = () => {

    const changePlaceholder= (e)=>{
      var inputSearch = document.getElementById('toSearchInput');
      if(e.target.value=="searchbyid"){
        
        inputSearch.placeholder='Digita el id del producto';
      } else{
        inputSearch.placeholder='Digita la descripción';
      }
    }

  const formAddProduct = useRef(null);

  const submitForm = (e) => {
    e.preventDefault();
    
    const fd = new FormData(formAddProduct.current);
    
    const newProduct = {};
    fd.forEach((value, key) => {
      newProduct[key] = value;
    });
    console.log(newProduct);

     createProduct(
      {
      id: newProduct.id,
      description: newProduct.description,
      unitprice: newProduct.unitprice,
      state: newProduct.state
      },
      (response) => {
        console.log(response.data);
        toast.success('Producto agregado con éxito');
      },
      (error) => {
        console.error(error);
        toast.error('Error creando un producto');
      }
    );
    
    
};

  return (
    <div className="MainSection">
      <div className="titlepage">
        <span className="title"> Lista de Productos</span>
      </div>
      <h2 className=" addNewSubt marg-l">Agregar Producto</h2>
      
      <div className="newOrderContainer">
        <form ref={formAddProduct} onSubmit={submitForm} >
        <ul className="ulProduct">
          <li>
            <label>ID Producto</label>
            <input  name="id" className="inputChange inputNumber " placeholder="ID"  ></input>
          </li>
          <li>
            <label>Precio Unitario</label>
            <input  name="unitprice"type="number" min="1" className="inputChange inputMedium" placeholder="$" required></input>
          </li>
          <li>
            <label>Estado</label>
            <select name="state" id="selectorState"className="selectStatus"  required 
            >
              <option value="" disabled>Selecciona</option>
              <option className="aproved" value="available">Disponible</option>
              <option className="denied" value="notavailable">No disponible</option>
            </select>
          </li>
          <li>
            <label>Descripción</label>
            <input name="description" type="text" className="inputChange inputLarge"  placeholder="Descripción producto" required></input>
          </li>
        </ul>
        <div className="btnDiv">
          <button type="submit"  className="btnGeneral btnCreateProduct">
          <img className="btnIcon" src={checkicon}  alt="img"></img>Registrar Producto</button>
          <button type="reset" className="btnGeneral btnCancel">Cancelar</button>
        </div>
        </form>
      </div>
       <ToastContainer rtl
       position="top-center"
       autoClose={2000}
       transition={Zoom}
       limit={1}
       />
      
      <div className="searchContainer  marg-l">
        <form>
          <span>Selecciona </span>
          <select id="selectorSearchBy"className="selectRole"  required onChange={ (e)=>{
             changePlaceholder(e);
              console.log(e.target.value);
            }}>
            <option value="searchbyid">ID Producto</option>
            <option value= "searchbydescrip">Descripción</option>
          </select>
          <input type="text" className="toSearchInput" id="toSearchInput"placeholder="Digita el ID del producto" />
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

