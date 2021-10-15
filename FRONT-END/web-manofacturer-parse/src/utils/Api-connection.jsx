import axios from 'axios';

export const createProduct= async (data, successCallback, errorCallback) => {
const options = {
  method: 'POST',
  url: 'http://localhost:3002/products/',
  headers: {'Content-Type': 'application/json'},
  data,
};

await axios.request(options).then(successCallback).catch(errorCallback);
};
export const obtainProducts = async (successCallback, errorCallback) => {
  var options = {method: 'GET', url: 'http://localhost:3002/products/'};
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtainProductById = async (id,successCallback, errorCallback) => {
  
  var options = {method: 'GET',  url: `http://localhost:3002/products/${id}/`,headers: {'Content-Type': 'application/json'}};
  
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtainProductByDescrip = async (descrip,successCallback, errorCallback) => {
  var options = {method: 'GET',  url: `http://localhost:3002/products/d/${descrip}/`,headers: {'Content-Type': 'application/json'}};
  console.log(options);
  await axios.request(options).then(successCallback).catch(errorCallback);
};