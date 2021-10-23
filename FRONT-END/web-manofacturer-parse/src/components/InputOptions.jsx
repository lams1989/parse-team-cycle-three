
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

import React, { useEffect, useState } from 'react';
const filter = createFilterOptions();



export default function InputOptions({ listOptions, setOptionSelected, labelOf }) {


  const [value, setValue] = React.useState(null);

  const [reload, setReload] = useState(false);



  useEffect(async () => {
    console.log(
      'Hola, soy un use effect que se ejecuta cuando usas el input, para cargar la lista de opciones :)'
    );
    setOptionSelected(value);
    console.log("value:", value);
    setReload(false);
  }, [value]);


  return (
    <>

      <Autocomplete
        value={value}
        onChange={(event, newValue) => {


          setValue(newValue);

        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="free-solo-with-text-demo"
        options={listOptions}
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
          return option.data;
        }}
        renderOption={(props, option) => <li {...props}>{option.data}</li>}
        sx={{ width: 300 }}
        freeSolo
        renderInput={(params) => (

          <TextField {...params} label={labelOf} />
        )}
      />


    </>
  );
}



