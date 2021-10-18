import axios from 'axios';

export const createProduct = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:3001/products/',
    headers: { 'Content-Type': 'application/json' },
    data
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtainProducts = async (successCallback, errorCallback) => {
  var options = {
    method: 'GET',
    url: 'http://localhost:3001/products/'
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtainProductById = async (id, successCallback, errorCallback) => {
  var options = {
    method: 'GET',
    url: `http://localhost:3001/products/${id}/`,
    headers: { 'Content-Type': 'application/json' }
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtainProductByDescrip = async (descrip, successCallback, errorCallback) => {
  var options = {
    method: 'GET',
    url: `http://localhost:3001/products/d/${descrip}/`,
    headers: { 'Content-Type': 'application/json' }
  };
  console.log(options);
  await axios.request(options).then(successCallback).catch(errorCallback);
};



export const updateProductInfo = async (id, dataToUpdate, successCallback, errorCallback) => {
  var options = {
    method: 'PATCH',
    url: `http://localhost:3001/products/upd/${id}/`,
    headers: { 'Content-Type': 'application/json' },
    data: dataToUpdate
  };
  console.log(options);
  await axios.request(options).then(successCallback).catch(errorCallback);
};


export const deleteProduct = async (id, successCallback, errorCallback) => {
  var options = {
    method: 'DELETE',
    url: `http://localhost:3001/products/${id}`,
    headers: { 'Content-Type': 'application/json' }
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const createUser = async (data, successCallback, errorCallback) => {
  var options = {
    method: 'POST',
    url: 'http://localhost:3001/users/',
    headers: { 'Content-Type': 'application/json' },
    data
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const optainUsers = async (successCallback, errorCallback) => {
  var options = {
    method: 'GET',
    url: 'http://localhost:3001/users/'
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const updateUser = async (id, dataToUpdate, successCallback, errorCallback) => {
  var options = {
    method: 'PATCH',
    url: `http://localhost:3001/users/upd/${id}/`,
    headers: { 'Content-Type': 'application/json' },
    data: dataToUpdate
  };
  console.log(options);
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtainUserById = async (id, successCallback, errorCallback) => {
  var options = {
    method: 'GET',
    url: `http://localhost:3001/users/${id}/`,
    headers: { 'Content-Type': 'application/json' }
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};


export const  fetchUsersbyAnyMatch=(listaProductos,words)=>{
  
  return   listaProductos.filter((elemento) => {
      return JSON.stringify(elemento).toLowerCase().includes(words.toLowerCase());
    })

}
