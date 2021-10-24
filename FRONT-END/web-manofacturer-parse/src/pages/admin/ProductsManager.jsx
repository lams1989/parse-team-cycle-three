

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React, { useState } from 'react';
import AddProduct from 'components/AddProduct';
import ProductTable from 'components/ProductTable';

const ProductsManager = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    console.log(value);
    setValue(newValue)
  }
  return (
    <>
      <div className="titlepage">
        <span className="title">  Productos</span>
      </div>
      <div className="tabscontainer">
        <Tabs value={value} onChange={handleChange} >
          <Tab label="Agregar Producto" />
          <Tab label="Ver Lista de Productos" />

        </Tabs>
      </div>
      <TabInfo value={value} index={0}> item1</TabInfo>
    </>
  )
}
function TabInfo(props) {
  const { value } = props;
  return (
    <div>
      {(value == 0) && (<><AddProduct></AddProduct></>)}
      {(value == 1) && (<><ProductTable></ProductTable></>)}
    </div>
  )
};
export default ProductsManager;
