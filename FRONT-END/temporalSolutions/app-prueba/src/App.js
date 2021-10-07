import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Orders from 'pages/seller/Orders';
import UserList  from 'pages/admin/UserList';
import Products from 'pages/admin/Products';

import AuthLayout from 'layouts/AuthLayout';
import AdminLayout from 'layouts/AdminLayout';
import SellerLayout from 'layouts/SellerLayout';
import index from 'pages/admin';

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
          <Route path= '/admin/ventas'>
          <Orders/>
          </Route>
          <Route path= '/admin/usuarios'>
          <UserList/>
          </Route>
          <Route path= '/admin'>
           <index/>
          </Route>
        </Switch>
      </AdminLayout>
      </Route>


     <Route path= {['/vendedor','vendedor/ventas']}>
       <SellerLayout>
         <Switch>
          <Route path= '/vendedor/ventas'>
          <Orders/>
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


 