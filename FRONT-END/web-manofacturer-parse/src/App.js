import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UsersManager from 'pages/admin/UsersManager';
import ProductsManager from 'pages/admin/ProductsManager';
import AdminLayout from 'layouts/AdminLayout';
import OrdersManager from 'pages/seller/OrdersManager';
import { Auth0Provider } from "@auth0/auth0-react";
import ButtonLogin from 'components/ButtonLogin';
import Index from 'pages/admin/Index';
import { UserContext } from 'context/UserContext';
import { useState } from 'react';
import PrivateRoute from 'components/PrivateRoute';
import OrdersTable from 'components/OrdersTable';
<script
  src="https://use.fontawesome.com/releases/v5.15.4/js/all.js"
></script>


function App() {
  const [userData, setUserData] = useState({});
  return (

    <Auth0Provider
      domain='parse-manofacturer.us.auth0.com'
      clientId='tHoSOnRwFju4K39I7TqS5eIoARoYgZmV'
      redirectUri="http://localhost:3000/admin"
      audience='api-autentication-parse-manofacturer'
    >
      <div>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Router>
            <Switch>
              <Route path={['/admin', '/admin/productos', '/admin/ventas', '/admin/usuarios', '/vendedor/ventas', '/vendedor', '/vendedor/ventas/verlistado']}>
                <AdminLayout>
                  <Switch>

                    <Route path='/admin/productos'>
                      <PrivateRoute roleList={["administrador"]}>
                        <ProductsManager />
                      </PrivateRoute>
                    </Route>
                    <Route path='/admin/ventas'>
                      <PrivateRoute roleList={["administrador"]}>
                        <OrdersManager />
                      </PrivateRoute>
                    </Route>
                    <Route path='/admin/usuarios'>
                      <PrivateRoute roleList={["administrador"]}>
                        <UsersManager />
                      </PrivateRoute>
                    </Route>
                    <Route path='/vendedor/ventas/verlistado'>
                      <PrivateRoute roleList={["vendedor"]}>
                        <OrdersTable></OrdersTable>
                      </PrivateRoute>
                    </Route>
                    <Route path='/vendedor/ventas/'>
                      <PrivateRoute roleList={["vendedor"]}>
                        <OrdersManager />
                      </PrivateRoute>
                    </Route>

                    <Route path='/vendedor'>
                      <Index />
                    </Route>
                    <Route path='/admin'>
                      {/* <PrivateRoute roleList={["admin"]}> */}
                      <Index />
                      {/* </PrivateRoute> */}
                    </Route>

                  </Switch>

                </AdminLayout>
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