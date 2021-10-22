
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

import { obtainProducts } from 'utils/Api-connection'
import React, { useEffect, useState, useRef } from 'react';
const filter = createFilterOptions();

export default function ProductsOptions() {
  const [value, setValue] = React.useState(null);
  const [listProducts, setListProducts] = useState([]);
  const [product, setProduct] = useState();
  const [newProductData, setNewProduct] = useState(false);
  const [reload, setReload] = useState(false);



  useEffect(async () => {
    console.log(
      'Hola, soy un use effect que se ejecuta cuando usan el product input, para cargar la lista de productos'
    );
    await obtainProducts(
      (response) => {
        console.log('la respuesta que se recibio fue', response);
        console.log(response.data);
        const json = response.data;
        const products = [];
        for (var i in json) {
          var row = (json[i].id + "-" + json[i].description);
          var data = { "dataproduct": row, "id": json[i].id, "description": json[i].description };
          products.push(data);
          console.log(data);
        }
        console.log("datos: ", products);
        setListProducts(products);


      },
      (error) => {
        console.error('Salio un error:', error);
      }
    );
    setReload(false);
  }, []);


  return (
    <div className="productsOptions">

      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          console.log(event);
          if (typeof newValue === 'string') {
            setValue({
              title: newValue,
            });
          } else if (newValue && newValue.inputValue) {

            //setValue("Añadir Producte Nuevo");
            //setNewProduct(true);
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;
          // Suggest the creation of a new value
          const isExisting = options.some((option) => inputValue === option.description);
          {/*} if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            dataproduct: `Add "${inputValue}"`,
          });
        }*/}

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="free-solo-with-text-demo"
        options={listProducts}
        getOptionLabel={(option) => {
          // Value selected with enter, right from the input
          if (typeof option === 'string') {
            return option;
          }
          // Add "xxx" option created dynamically
          if (option.inputValue) {
            return option.inputValue;
          }
          // Regular option
          return option.dataproduct;
        }}
        renderOption={(props, option) => <li {...props}>{option.dataproduct}</li>}
        sx={{ width: 300 }}
        freeSolo
        renderInput={(params) => (
          <TextField {...params} label="Buscar Producto" fullWidth  id="fullWidth"/>

        )}
      />
      {
        
      }
      
    </div>
  );
}



