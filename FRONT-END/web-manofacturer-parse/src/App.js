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
<script
  src="https://use.fontawesome.com/releases/v5.15.4/js/all.js"
></script>

function App() {
  return (
    <Auth0Provider
      domain='parse-manofacturer.us.auth0.com'
      clientId='tHoSOnRwFju4K39I7TqS5eIoARoYgZmV'
      redirectUri="http://localhost:3000/admin"
      audience='api-autentication-parse-manofacturer'
    >
      <Router>
        <Switch>
          <Route path={['/admin', '/admin/productos', '/admin/ventas', '/admin/usuarios']}>
            <AdminLayout>
              <Switch>
                <Route path='/admin/productos'>
                  <ProductsManager />
                </Route>
                <Route path='/admin/ventas'>
                  <OrdersManager />
                </Route>
                <Route path='/admin/usuarios'>
                  <UsersManager />
                </Route>
                <Route path='/admin'>
               <IndexAdmin/>
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
    </Auth0Provider>
  );
};
export default App;