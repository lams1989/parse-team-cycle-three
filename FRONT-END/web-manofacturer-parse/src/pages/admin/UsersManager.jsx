

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import React, {  useState } from 'react';

import UsersTable from 'components/UsersTable';
import AddUser from 'components/AddUser';

const UsersManager = () => {


  const [value, setValue]= useState(0);
  const handleChange= (event, newValue)=>{
    console.log(value);
    setValue(newValue) 
    
  }
  return (
    <>
      <div className="titlepage">
      
    <span className="title"> Usuarios</span>
  
  </div>
  <div className="tabscontainer"> 
    <Tabs value={value} onChange= {handleChange}>
    <Tab  label="Agregar Usuario"   />
   <Tab  label="Ver Lista de Usuarios"  />

    </Tabs>
    </div>
    <TabInfo value= {value} index={0}> item1</TabInfo>
    </>
  )
}

function TabInfo(props)
{
  
  const {children, value, index}=props;
  return(
    <div>
      
      {(value==0) && (<><AddUser></AddUser></>)}
      {(value==1) && (<><UsersTable></UsersTable></>)}
      
    </div>
  )
      
}

export default  UsersManager
