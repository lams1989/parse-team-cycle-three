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