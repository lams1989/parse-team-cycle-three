import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import UsersManager from 'pages/admin/UsersManager';
import ProductsManager from 'pages/admin/ProductsManager';

import AuthLayout from 'layouts/AuthLayout';
import AdminLayout from 'layouts/AdminLayout';
import SellerLayout from 'layouts/SellerLayout';
import OrdersManager from 'pages/seller/OrdersManager';
import IndexAdmin from 'pages/admin/IndexAdmin';
import IndexSeller from 'pages/seller/IndexSeller';
<script
  src="https://use.fontawesome.com/releases/v5.15.4/js/all.js"
></script>


function App() {
  return (

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

        <Route path='/'>
          <AuthLayout />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;