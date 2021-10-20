
import { Link } from 'react-router-dom';
import "styles/pages-styles.css"
import search from "media/zoom_in_white_48dp.svg"
import sellcart from "media/sell_white_48dp.svg"
import OrdersTable from 'components/OrdersTable';

import { ToastContainer, toast,Zoom } from 'react-toastify';
import React, { useState ,useEffect,useRef} from 'react';
import { obtainOrders ,obtainOrderById,obtainOrderByClientName} from 'utils/Api-connection';
import { obtainOrderByClientId } from 'utils/Api-connection';

const OrdersList = () => {

const formSearchOrder= useRef(null);

const [reload, setReload]= useState(false);
const [listOrders, setListOrders]= useState([]);

const submitSearchOrderForm = async (e) => {
  e.preventDefault();
  const fd = new FormData(formSearchOrder.current);
  console.log(fd.id);
  const searchOpt = {};
  fd.forEach((value, key) => {
    searchOpt[key] = value;
  });
  const searchby= searchOpt.searchSelect;
  console.log("s: ",searchby);
  const info= searchOpt.toSearchInput;
 
  if(searchby=="searchbyIdOrder"){
    if (!Number(info)){
      toast.error("digite un ID numérico",{
        position: "bottom-center"
      });
    }else{
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
else if(searchby=="searchbyIdClient"){
  if (!Number(info)){
    toast.error("digite un ID numérico",{
      position: "bottom-center"
    });
  }else{
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
else if(searchby=="searchbyClientName"){
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

  return (
    <div className="MainSection">
      <div className="titlepage">
        <span className="title"> Lista de Ventas</span>
        <Link to='/admin/ventas/agregarVenta'>
          <div className="divBtnChangePage">
          <button className="btnGeneral btnListaVentas">
          <img className="btnIcon" src={sellcart} id="btnSell" alt="img"></img>
          Agregar Nueva Venta</button>
          </div>
         
        </Link>
      </div>
      
      <h3 className=" addNewSubt marg-l"> Consulta el listado de las ventas</h3>

      <div className="searchContainer  marg-l">  
      <form id="formSearchingOrder" ref={formSearchOrder} onSubmit={submitSearchOrderForm} >
          <span>Buscar Venta por </span>
          <select name="searchSelect" className="selectRole ">
             <option value="" disabled>Buscar por</option>
             <option value="searchbyIdOrder">ID Venta</option>
          
             <option value="searchbyIdClient">ID Cliente</option>
            <option value= "searchbyClientName">Nombre Cliente</option>
        
            
          </select>
          <input type="text" name="toSearchInput" className="toSearchInput" placeholder="Buscar" />
          <button type="submit" className="btnGeneral btnSearchUser" >
          <img className="btnIcon"  src={search} alt="img"></img> 
            Buscar</button>
        </form>
        <button className="btnGeneral btnBack" onClick={()=>setReload(!reload)}><i className="fas fa-undo-alt"></i>Volver a tabla</button> 
      </div>
      <OrdersTable listOrders= {listOrders} setReload= {setReload}/>
      
      <ToastContainer rtl
        position="top-center"
        autoClose={2000}
        transition={Zoom}
        limit={1}
      />
    </div>
  )
}


export default OrdersList
