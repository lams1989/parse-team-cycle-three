import React, { useEffect, useState, useRef } from 'react';


import { createProduct } from 'utils/Api-connection';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ProductsManager = () => {

  const formAddProduct = useRef(null);


  const submitCreateForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(formAddProduct.current);
    const newProduct = {};
    fd.forEach((value, key) => {
      newProduct[key] = value;
    });
    console.log(newProduct);
    await createProduct(
      {
        id: newProduct.id,
        description: newProduct.description.toLowerCase(),
        unitprice: newProduct.unitprice,
        state: newProduct.state
      },
      (response) => {
        console.log(response.data);
        toast.success('Producto agregado con éxito');
        document.getElementById("formCreateProduct").reset();
      },
      (error) => {
        console.error(error);
        toast.error('Error creando un producto');
      }
    );


  };


  return (
    <div className="MainSection">
      <h2 align="center" className=" addNewSubt marg-l">Nuevo Producto </h2>

      <div className="newOrderContainer">


        <form id="formCreateProduct" ref={formAddProduct} onSubmit={submitCreateForm} >
          <ul className="ulProduct">
            <li>
              <label>ID Producto</label>
              <input name="id" className="inputChange inputNumber " type="number" min="1" placeholder="ID" required></input>
            </li>
            <li>
              <label >Precio Unitario</label>
              <input name="unitprice" type="number" min="1" className="inputChange inputValue" placeholder="$" required></input>
            </li>
            <li>
              <label >Estado Producto</label>
              <select name="state" id="selectorState" className="selectStatus" required
              >
                <option value="" disabled>Selecciona</option>
                <option className="aproved" value="Disponible">Disponible</option>
                <option className="denied" value="No disponible">No disponible</option>
              </select>
            </li>
            <li>
              <label>Descripción</label>
              <input name="description" type="text" className="inputChange inputLarge" placeholder="Descripción producto" required maxLength="200"></input>
            </li>
          </ul>
          <div className="btnDiv">
            <button type="submit" className="btnGeneral btnCreateProduct">
              <i class="far fa-check-circle"></i>Añadir Producto</button>
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

      {/*  <div className="searchContainer withupdatesection marg-l">
        <form ref={formSearchProduct} onSubmit={submitSearchForm} >
          <span>Selecciona </span>
          <select name= "searchSelect" className="selectRole" required >
            <option value="" disabled> Buscar por</option>
            <option value="searchbyid">ID Producto</option>
            <option value= "searchbyDescrip">Descripción</option>
          </select>
          <input type="text" className="toSearchInput" name="toSearchInput" placeholder="Digita la info" required/>
          <span>para </span>
          <button type="submit" className="btnGeneral btnSearchUser marg-l"  >
          <img className="btnIcon"  src={search} alt="img"></img>  Buscar</button>
         
        </form>
        
        <button className="btnGeneral btnBack" onClick={()=>setReload(!reload)}><i className="fas fa-undo-alt"></i>Volver a tabla</button> 

      </div>
  <ProductTable listpr={listProducts} setReload={setReload}/>*/}

    </div>
  )
}

export default ProductsManager;

