
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

import { obtainSellers } from 'utils/Api-connection'
import React, { useEffect, useState, useRef } from 'react';
import { obtainUserByRole } from 'utils/Api-connection';
const filter = createFilterOptions();



export default function SellersOption() {
  const [value, setValue] = React.useState(null);
  const [listSellers, setListSellers] = useState([]);
 
  const [newClientData, setNewClient] = useState(false);
  const [reload, setReload] = useState(false);



  useEffect(async () => {
    console.log(
      'Hola, soy un use effect que se ejecuta cuando usan el client input, para cargar la lista de vendedores'
    );
    await obtainUserByRole("vendedor",
      (response) => {
        console.log('la respuesta que se recibio fue', response);
        console.log(response.data);
        const json = response.data;
        const sellers = [];
        for (var i in json) {
          var row = (json[i].id + "-" + json[i].name);
          var data = { "dataseller": row, "id": json[i].id, "name": json[i].name };
          sellers.push(data);
          console.log(data);
        }
        console.log("datos: ", sellers);
        setListSellers(sellers);


      },
      (error) => {
        console.error('Salio un error:', error);
      }
    );
    setReload(false);
  }, []);


  return (
    <>
     
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          console.log(event);
          if (typeof newValue === 'string') {
            setValue({
              title: newValue,
            });
          } else if (newValue && newValue.inputValue) {

           // setValue("Añadir Cliente Nuevo");
            //setNewClient(true);
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;
          // Suggest the creation of a new value
          const isExisting = options.some((option) => inputValue === option.name);
          if (inputValue !== '' && !isExisting) {
            filtered.push({
              inputValue,
              dataseller: `Add "${inputValue}"`,
            });
          }

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="free-solo-with-text-demo"
        options={listSellers}
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
          return option.dataseller;
        }}
        renderOption={(props, option) => <li {...props}>{option.dataseller}</li>}
        sx={{ width: 300 }}
        freeSolo
        renderInput={(params) => (
          <div className=" textfSeller">
          <TextField {...params} label="Buscar Vendedor"  
          hiddenLabel
          id="filled-hidden-label-small"
          defaultValue="Small"
          size="small"/> </div>
        )}
      />
      

    </>
  );
}



