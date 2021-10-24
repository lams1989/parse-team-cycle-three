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

export const obtainProductByState = async (state, successCallback, errorCallback) => {
  var options = {
    method: 'GET',
    url: `http://localhost:3001/products/s/${state}/`,
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
export const obtainUserByRole = async (role, successCallback, errorCallback) => {
  var options = {
    method: 'GET',
    url: `http://localhost:3001/users/r/${role}/`,
    headers: { 'Content-Type': 'application/json' }
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};


export const deleteUser = async (id, successCallback, errorCallback) => {
  var options = {
    method: 'DELETE',
    url: `http://localhost:3001/users/${id}`,
    headers: { 'Content-Type': 'application/json' }
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};



/**Obtain List of Orders */
export const obtainOrders = async (successCallback, errorCallback) => {
  var options = {
    method: 'GET',
    url: 'http://localhost:3001/orders/'
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtainOrderById = async (id, successCallback, errorCallback) => {
  var options = {
    method: 'GET',
    url: `http://localhost:3001/orders/${id}/`,
    headers: { 'Content-Type': 'application/json' }
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtainOrderByClientId = async (idclient, successCallback, errorCallback) => {
  var options = {
    method: 'GET',
    url: `http://localhost:3001/orders/idclient/${idclient}/`,
    headers: { 'Content-Type': 'application/json' }
  };
  console.log(options);
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtainOrderByClientName = async (clientname, successCallback, errorCallback) => {
  var options = {
    method: 'GET',
    url: `http://localhost:3001/orders/clientname/${clientname}/`,
    headers: { 'Content-Type': 'application/json' }
  };
  console.log(options);
  await axios.request(options).then(successCallback).catch(errorCallback);
};


export const deleteOrder = async (id, successCallback, errorCallback) => {
  var options = {
    method: 'DELETE',
    url: `http://localhost:3001/orders/${id}`,
    headers: { 'Content-Type': 'application/json' }
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtainClients = async (successCallback, errorCallback) => {
  var options = {
    method: 'GET',
    url: 'http://localhost:3001/clients/'
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const createClient = async (data, successCallback, errorCallback) => {
  var options = {
    method: 'POST',
    url: 'http://localhost:3001/clients/',
    headers: { 'Content-Type': 'application/json' },
    data
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
export const createOrder = async (data, successCallback, errorCallback) => {
  var options = {
    method: 'POST',
    url: 'http://localhost:3001/orders/',
    headers: { 'Content-Type': 'application/json' },
    data
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
export const updateOrder = async (idOrder, dataToUpdate, successCallback, errorCallback) => {
  var options = {
    method: 'PUT',
    url: `http://localhost:3001/orders/upd/${idOrder}/`,
    headers: { 'Content-Type': 'application/json' },
    data: dataToUpdate
  };
  console.log(options);
  await axios.request(options).then(successCallback).catch(errorCallback);
};