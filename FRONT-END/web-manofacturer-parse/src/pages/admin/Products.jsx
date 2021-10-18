import React, { useEffect, useState, useRef } from 'react';
import search from "media/zoom_in_white_48dp.svg"
import checkicon from "media/done_outline_white_48dp.svg"
import ProductTable from 'components/ProductTable'
import { createProduct,obtainProducts,obtainProductById,obtainProductByDescrip} from 'utils/Api-connection';

import { ToastContainer, toast,Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {

  const formAddProduct = useRef(null);
  const formSearchProduct= useRef(null);
  const [listProducts, setListProducts]= useState([]);
  
  const [reload, setReload]= useState(false);

  
   useEffect(async () => {
    console.log(
      'Hola, soy un use effect que se ejecuta solo una vez cuando la pagina se renderiza, para cargar la lista de productos inicial'
    );
    await obtainProducts(
      (response) => {
        console.log('la respuesta que se recibio fue', response);
        console.log(response.data);
        setListProducts(response.data);
      },
      (error) => {
        console.error('Salio un error:', error);
      }
    );
    setReload(false);
  }, [reload]);
  const submitCreateForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(formAddProduct.current);
    const newProduct = {};
    fd.forEach((value, key) => {
      newProduct[key] = value;
    });
    console.log(newProduct);
  await   createProduct(
      {
      id: newProduct.id,
      description: newProduct.description.toLowerCase(),
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
      
      setReload(true);
};

const submitSearchForm = async (e) => {
  e.preventDefault();
  const fd = new FormData(formSearchProduct.current);
  console.log(fd.id);
  const searchOpt = {};
  fd.forEach((value, key) => {
    searchOpt[key] = value;
  });
  const searchby= searchOpt.searchSelect;
  console.log("s: ",searchby);
  const info= searchOpt.toSearchInput;
 
  if(searchby=="searchbyid"){
    if (!Number(info)){
      toast.error("digite un ID numérico",{
        position: "bottom-center"
      });
    }else{
      console.log("serachbyid");
     await obtainProductById(info,
        (response) => {
          console.log('la respuesta que se recibio fue', response);
          console.log(response.data);
          setListProducts(response.data);
        },
        (error) => {
          console.error('Salio un error:', error);
        }
      ); 
    }
} 
else if(searchby=="searchbyDescrip"){
  console.log("serachbydescrip");
  await obtainProductByDescrip(info,
    (response) => {
      console.log('la respuesta que se recibio fue', response);
      console.log(response.data);
      setListProducts(response.data);
    },
    (error) => {
      console.error('Salio un error:', error);
    }
  );
} 
}
  return (
    <div className="MainSection">
   
      <div className="titlepage">
        <span className="title"> Lista de Productos</span>
      </div>
      <h2 className=" addNewSubt marg-l">Agregar Producto</h2>
      
      <div className="newOrderContainer">
        <form ref={formAddProduct} onSubmit={submitCreateForm} >
        <ul className="ulProduct">
          <li>
            <label>ID Producto</label>
            <input  name="id" className="inputChange inputNumber " placeholder="ID"  required></input>
          </li>
          <li>
            <label>Precio Unitario</label>
            <input  name="unitprice"type="number" min="1" className="inputChange inputValue" placeholder="$" required></input>
          </li>
          <li>
            <label >Estado Producto</label>
            <select name="state" id="selectorState"className="selectStatus"  required 
            >
              <option value="" disabled>Selecciona</option>
              <option className="aproved" value="Disponible">Disponible</option>
              <option className="denied" value="No disponible">No disponible</option>
            </select>
          </li>
          <li>
            <label>Descripción</label>
            <input name="description" type="text" className="inputChange inputLarge"  placeholder="Descripción producto" required maxLength="200"></input>
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
      <div className="searchContainer withupdatesection marg-l">
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
    <ProductTable listpr={listProducts} setReload={setReload}/>
  
    </div>
  )
}

export default Products;

