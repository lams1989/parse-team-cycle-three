
import { Link } from 'react-router-dom';
import "styles/pages-styles.css"
import search from "media/zoom_in_white_48dp.svg"
import sellcart from "media/sell_white_48dp.svg"
import OrdersTable from 'components/OrdersTable';
import React, { useState ,useEffect,useRef} from 'react';
import { obtainOrders } from 'utils/Api-connection';

const OrdersList = () => {


  {/**const [searching, setSearching] = useState('');
  const [filterOrders, setFilterOrders] = useState([]);
const formSearchOrder= useRef(null);**/}
const [reload, setReload]= useState(false);
const [listOrders, setListOrders]= useState([]);

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
        
        <form>
          <span>Buscar Venta por </span>
          <select className="selectRole selectSearchUser">
             <option value="" disabled>Buscar por</option>
             <option value="idClient">ID Cliente</option>
            <option value= "nameClient">Nombre Cliente</option>
            <option>ID Venta</option>
           
            
          </select>
          <input type="text" className="toSearchInput" placeholder="Digite el ID de la Venta" />
          <button type="submit" className="btnGeneral btnSearchUser" id="submitUserSearchBtn">
          <img className="btnIcon"  src={search} alt="img"></img> 
            Buscar</button>
        </form>
      </div>
      <OrdersTable listOrders= {listOrders} setReload= {setReload}/>
      
    </div>
  )
}

export default OrdersList
