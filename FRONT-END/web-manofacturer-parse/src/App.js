import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AddOrder from 'pages/seller/AddOrder';
import UserList  from 'pages/admin/UserList';
import Products from 'pages/admin/Products';

import AuthLayout from 'layouts/AuthLayout';
import AdminLayout from 'layouts/AdminLayout';
import SellerLayout from 'layouts/SellerLayout';
import OrdersList from 'pages/seller/OrdersList';

function App() {
  return (

    <Router>
      <Switch>

      <Route path='/login'>
        <AuthLayout/>

      </Route>
      <Route path={['/admin','/admin/productos','/admin/ventas','/admin/usuarios']}>
       <AdminLayout>
        <Switch>
          <Route path= '/admin/productos'>
          <Products/>
          </Route>
          <Route path= '/admin/ventas/agregarventa'>
          <AddOrder/>
          </Route>
          <Route path= '/admin/ventas/listadoventas'>
          <OrdersList/>
          </Route>
          <Route path= '/admin/usuarios'>
          <UserList/>
          </Route>
          <Route path= '/admin'>
          
          </Route>
        </Switch>
      </AdminLayout>
      </Route>


     <Route path= {['/vendedor','vendedor/ventas']}>
       <SellerLayout>
         <Switch>
          <Route path= '/vendedor/ventas/agregarventa'>
         <AddOrder/>
          </Route>
          <Route path= '/vendedor/ventas/listadoventas'>
          <OrdersList/>
          </Route>

          <Route path= '/vendedor'>
          
          </Route>
         </Switch>
       </SellerLayout>
     </Route>
     
      </Switch>
    </Router>
    

  );
}

export default App;


 