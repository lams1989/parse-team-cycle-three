

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import React, {  useState } from 'react';

import OrdersTable from 'components/OrdersTable';
import AddOrder from 'components/AddOrder';

const OrdersManager = () => {


  const [value, setValue]= useState(0);
  const handleChange= (event, newValue)=>{
    console.log(value);
    setValue(newValue) 
    
  }
  return (
   <>
      <div className="titlepage">
      
    <span className="title"> Ventas</span>
  
  </div>
   <div className="tabscontainer"> 
    <Tabs value={value} onChange= {handleChange}>
    <Tab  label="Agregar Venta"   />
   <Tab  label="Ver Lista de Ventas"  />

    </Tabs>
    </div>
    <TabInfo value= {value} index={0}> </TabInfo>
 </>
  )
}

function TabInfo(props)
{
  
  const {children, value, index}=props;
  return(
    <div>
      
      {(value==0) && (<><AddOrder></AddOrder></>)}
      {(value==1) && (<><OrdersTable></OrdersTable></>)}
    </div>
  )
      
}

export default  OrdersManager
