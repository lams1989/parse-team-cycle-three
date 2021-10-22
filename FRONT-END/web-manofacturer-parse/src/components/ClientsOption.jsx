
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

import { obtainClients } from 'utils/Api-connection'
import React, { useEffect, useState ,useRef} from 'react';
const filter = createFilterOptions();



export default function ClientsOption() {
  const [value, setValue] = React.useState(null);
  const [listClients, setListClients]= useState([]);
  const [client, setClient]= useState();
  const [newClientData, setNewClient]= useState(false);
const [reload, setReload]= useState(false);



  useEffect(async () => {
    console.log(
      'Hola, soy un use effect que se ejecuta cuando usan el client input, para cargar la lista de clientes'
    );
    await obtainClients(
      (response) => {
        console.log('la respuesta que se recibio fue', response);
        console.log(response.data); 
        const json= response.data;
        const clients= [];
        for (var i in json) {
          var row =  (json[i].client_doc_id + "-"+ json[i].client_name);
          var data= {"dataclient":row, "client_name": json[i].client_name, "client_doc_id":json[i].client_doc_id};
          clients.push(data);
          console.log(data);
      }
      console.log("datos: ",clients );
        setListClients(clients);

      
      },
      (error) => {
        console.error('Salio un error:', error);
      }
    );
    setReload(false);
  }, []);
  

  return (
    <>
    <h5>Cliente</h5>
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        console.log(event);
        if (typeof newValue === 'string') {
          setValue({
            title: newValue,
          });
        }else if (newValue && newValue.inputValue) {
        
         setValue("Añadir Cliente Nuevo");
         setNewClient(true);
        } else{
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue === option.title);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            dataclient: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={listClients}
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
        return option.dataclient;
      }}
      renderOption={(props, option) => <li {...props}>{option.dataclient}</li>}
      sx={{ width: 300 }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Buscar Cliente" />
      )}
    />
  {
    newClientData &&  ( 
    <div className="clientDiv">
    <div className="closeNewClient"> 
    <button className="btnGeneral spanCloseClient">
    <i className="far fa-times-circle fa-1x" onClick={() => setNewClient(false)}></i> Cerrar </button>
    </div>
    <div className="divClient" >
      <div>
    
       <label>ID cliente </label>
       <label>Nombre cliente</label>
       
      </div> 
      <div>
     
      <input className="inputChange " placeholder="ID Cliente" ></input>
        <input className="inputChange " placeholder="Nombre Cliente"></input></div>

    </div>
    
    </div>
    
    )
    
  }
   
    </>
  );
}



