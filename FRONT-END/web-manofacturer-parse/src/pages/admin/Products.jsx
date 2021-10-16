import React, { useEffect, useState, useRef } from 'react';
import search from "media/zoom_in_white_48dp.svg"
import deleteicon from "media/backspace_white_48dp.svg"
import editicon from "media/mode_edit_white_48dp.svg"
import checkicon from "media/done_outline_white_48dp.svg"
import ProductTable from 'components/ProductTable'
import { createProduct,obtainProducts,obtainProductById,obtainProductByDescrip} from 'utils/Api-connection';
import searchIcon from "media/zoom_in_white_48dp.svg"
import { ToastContainer, toast,Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Products = () => {

  const formAddProduct = useRef(null);
  const formEditProduct= useRef(null);
  const formSearchProduct= useRef(null);
  const [listProducts, setListProducts]= useState([]);
  const [showUpdateSection, setShowUpdateSection] = useState(false);
  const [reload, setReload]= useState(false);
  const [userFetchedbyId, setUserFetchedbyId]= useState(null);

   useEffect(() => {
    console.log(
      'Hola, soy un use effect que se ejecuta solo una vez cuando la pagina se renderiza, para cargar la lista de productos inicial'
    );
     obtainProducts(
      (response) => {
        console.log('la respuesta que se recibio fue', response);
        console.log(response.data);
        setListProducts(response.data);
        //setProducts(response.data);
      },
      (error) => {
        console.error('Salio un error:', error);
      
      }
    );
    setReload(false);
  }, [reload]);

  const setProductToupdate=() =>{
    
  }

  const submitCreateForm = (e) => {
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
    
      setReload(true);
     
};


const submitFormEditProduct = (e) => {
  e.preventDefault();
  
  const fd = new FormData(formSearchProduct.current);
  console.log(fd.id);
  
  console.log("ok");
}

const submitSearchForm = (e) => {
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
      obtainProductById(info,
        (response) => {
          console.log('la respuesta que se recibio fue', response);
          console.log(response.data);
          setListProducts(response.data);
          
          
          //setProducts(response.data);
        },
        (error) => {
          console.error('Salio un error:', error);
        
        }
      ); 
    }
  
 
  
} 
else if(searchby=="searchbyDescrip"){
  console.log("serachbydescrip");
  obtainProductByDescrip(info,
    (response) => {
      console.log('la respuesta que se recibio fue', response);
      console.log(response.data);
      setListProducts(response.data);
      
      //setProducts(response.data);
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
      
      <div className="searchContainer withupdatesection marg-l">
        <form ref={formSearchProduct} onSubmit={submitSearchForm} >
          <span>Selecciona </span>
          <select name= "searchSelect" className="selectRole" required >
            <option value="" disabled> Buscar por</option>
            <option value="searchbyid">ID Producto</option>
            <option value= "searchbyDescrip">Descripción</option>
          </select>
          
          <input type="text" className="toSearchInput" name="toSearchInput"  placeholder="Digita la info" required/>
          <span>para </span>
          <button type="submit" className="btnGeneral btnSearchUser marg-l" id="submitProductSearchBtn" >
          <img className="btnIcon"  src={search} alt="img"></img>  Buscar</button>
          <button type="button" className="btnGeneral btnSearchUser marg-l" id="updateProductSearchBtn"onClick={()=>setShowUpdateSection(!showUpdateSection)}>
          <img className="btnIcon"  src={editicon} alt="img"></img>  Actualizar</button>
          <button type="reset" className="btnGeneral btnSearchUser marg-l" id="deleteProductSearchBtn">
          <img className="btnIcon"  src={deleteicon} alt="img"></img>     Eliminar</button>
        </form>
        <button clasName="btnBack" onClick={()=>setReload(!reload)}>Volver a tabla</button>
      </div>

      <form ref={formEditProduct} onSubmit={submitFormEditProduct} >
      {
      showUpdateSection && (
            <div className="updateSection">
              <ul className="updateProductUl">
              <li>
              <label>ID</label>
              <input  name="id"type="number" min="1" className="inputChange inputValue" placeholder="Id" ></input>
              </li>
              <li>
                
            <label>Descripción</label>
            <input name="description" type="text" className="inputChange inputMedium"  placeholder="Descripción producto" required></input>
            </li>
              <li> <label>Precio Unitario</label>
              <input  name="unitprice"type="number" min="1" className="inputChange inputValue" placeholder="$" required></input>
              </li>
             
          <li>
            <label>Estado</label>
            <select name="state" id="selectorState"className="selectStatus"  required 
            >
              <option value="" disabled>Selecciona</option>
              <option className="aproved" value="Disponible">Disponible</option>
              <option className="denied" value="No disponible">No disponible</option>
            </select>
          </li>
            <li className="btnFlex">
            <label>Guardar</label>
              <div className="">
              <button type="submit"className="btnGeneral btnEdit">Ok</button>
              <button type="reset"className="btnGeneral btnDelete">X</button>
              </div>
            </li>
              </ul>
             

            </div>
          )}
      </form>
    <ProductTable listpr={listProducts}/>
    
    </div>
  )
}

export default Products;

