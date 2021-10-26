import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UsersManager from 'pages/admin/UsersManager';
import ProductsManager from 'pages/admin/ProductsManager';
import AdminLayout from 'layouts/AdminLayout';
import SellerLayout from 'layouts/SellerLayout';
import OrdersManager from 'pages/seller/OrdersManager';
import { Auth0Provider } from "@auth0/auth0-react";
import ButtonLogin from 'components/ButtonLogin';
import IndexAdmin from 'pages/admin/IndexAdmin';
import IndexSeller from 'pages/seller/IndexSeller';
import { UserContext } from 'context/UserContext';
import { useState } from 'react';
import PrivateRoute from 'components/PrivateRoute';
<script
  src="https://use.fontawesome.com/releases/v5.15.4/js/all.js"
></script>


function App() {
  const [userData, setUserData ]= useState({});
  return (
   
    <Auth0Provider
      domain='parse-manofacturer.us.auth0.com'
      clientId='tHoSOnRwFju4K39I7TqS5eIoARoYgZmV'
      redirectUri="http://localhost:3000/admin"
      audience='api-autentication-parse-manofacturer'
    >
      <div>
       <UserContext.Provider value={{userData, setUserData}}>
      <Router>
        <Switch>
          <Route path={['/admin', '/admin/productos', '/admin/ventas', '/admin/usuarios']}>
            <AdminLayout>
              <Switch>
          
                <Route path='/admin/productos'>
                <PrivateRoute roleList={["administrador"]}>
                  <ProductsManager />
                </PrivateRoute>
                </Route>
                <Route path='/admin/ventas'>
                {/* <PrivateRoute roleList={["admin"]}> */}
                 <OrdersManager />
                 {/* </PrivateRoute> */}
                </Route>
                <Route path='/admin/usuarios'>
                {/* <PrivateRoute roleList={["admin","vendedor"]}> */}
                  <UsersManager />
                  {/* </PrivateRoute> */}
                </Route>   
               
                <Route path='/admin'>
                {/* <PrivateRoute roleList={["admin"]}> */}
               <IndexAdmin/>
               {/* </PrivateRoute> */}
                </Route>
                
              </Switch>
            
            </AdminLayout>
            
          </Route>
          <Route path={['/vendedor', 'vendedor/ventas']}>
            <SellerLayout>
              <Switch>
                <Route path='/vendedor/ventas/listadoventas'>
                  <OrdersManager />
                </Route>
                <Route path='/vendedor'>
                <IndexSeller/>
                </Route>
              </Switch>
            </SellerLayout>
          </Route>
          <Route path="/">
            <ButtonLogin />
          </Route>
        </Switch>
      </Router>
      
    </UserContext.Provider>
    </div>
    </Auth0Provider>
  );
};
export default App;