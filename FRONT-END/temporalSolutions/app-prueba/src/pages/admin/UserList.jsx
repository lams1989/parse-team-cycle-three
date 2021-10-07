
import React from 'react';
import { Link } from 'react-router-dom';
import iconsearch from "media/search-solid.svg";
import 'styles/user-list-styles.css';
import addU from "media/user-plus-solid.svg"
import { useEffect } from 'react/cjs/react.development';

 const UserList = () => {

  
    return (
      <div className="userListSection">
        <div className="titlepage"><h1>  Lista de Usuarios</h1></div>
        
        
        <button className="btnGeneral addNewUserBtn" >

          <span>Agregar Usuario</span>
        
         </button>
         
         
        <div className= "addUserContainer">
        
        <form className= "addUserForm">
          <ul className="listFields">
          
          <li className="addData">
          <label> Nombre</label>
          <input type="text" required placeholder="Nombre"></input>
          </li>
          <li className="addData">
          <label> Correo Electrónico</label>
          <input type="email" autoComplete="email" required placeholder="Correo electrónico"></input>
          </li>
          <li className="addDataRoleContainer">
          <label> Rol </label>
          <select className="selectRole">
            <option className= "sellerRole"value="sellerRole">Vendedor</option>
            <option className= "adminRole" value="adminRole">Administrador</option>
          </select>
          </li>
          <li className="addData">
          <label> Estado </label>
          <select  className="selectStatus" >
            <option className="aproved" value="aproved">Aprobado</option>
            <option className="denied" value="denied">No Aprobado</option>
            <option className="pending" value="pending">Pendiente</option>
          </select>
          </li>
          
          </ul>
          <div className="btnOptionsContainer">
          <button type="submit" class="btnGeneral btnAdd">Crear Usuario</button>
          <button type="reset" class="btnGeneral btnCancel">Cancelar</button>
          </div>
        </form>
          
        </div>

        
        <div className= "searchUserContainer">
        <form> 
          
          <span>Buscar Usuario por  </span>
          <select className="selectRole selectSearchUser">
            <option>Nombre</option>
            <option>Correo</option>
            <option>Rol</option>
            <option>Estado</option>
          </select>
          
          
          <input type="text" className="toSearchInput" placeholder="Nombre usuario"/>
          
          <button type= "submit" className="btnGeneral btnSearchUser" id="submitUserSearchBtn">
           Buscar</button>
          
          
        
          </form>
        </div>

        <div className="listSection">
          <div className="TableContainer">
          <table className="userListTable">
          <thead className="thead">
            <tr>
            <th className= "col_title">Nombre</th>
            <th className= "col_title">Correo</th>
            <th className= "col_title">Rol</th>
            <th className= "col_title">Estado</th>
            <th className= "col-title"></th>
            </tr>
            
            </thead>    
            <tbody>
            <tr className="datarowUser">
            <td>Angela Bermudez</td>
            <td>angelabermudez99@gmail.com</td>
            <td>Admin</td>
            <td className= "aproved">Aprobado</td>
            <td>
              <div className="editBtnContanier">
                <button type= "button" class="btnGeneral btnEdit">Editar</button>
                <button type= "button"class="btnGeneral btnDelete">Eliminar</button>
              </div>
            </td>
            </tr>
            <tr>
            <td>Camila Mar</td>
            <td>camilaMar001@gmail.com</td>
            <td>Admin</td>
            <td className= "denied">No aprobado</td>
            <td>
              <div className="editBtnContanier">
                <button type= "button" className="btnGeneral btnEdit">Editar</button>
                <button type= "button"className="btnGeneral btnDelete">Eliminar</button>
              </div>
            </td>
            </tr>
            <tr>
            <td>Fabio Bermudez</td>
            <td>fabioberm@gmail.com</td>
            <td>Admin</td>
            <td className= "aproved">Aprobado</td>
            <td>
              <div className="editBtnContanier">
                <button type= "button" className="btnGeneral btnEdit">Editar</button>
                <button type= "button"className="btnGeneral btnDelete">Eliminar</button>
              </div>
            </td>
            </tr>
            <tr>
            <td>Tati Díaz</td>
            <td>tatidiazm@gmail.com</td>
            <td>Admin</td>
            <td className= "aproved">Aprobado</td>
            <td>
              <div className="editBtnContanier">
                <button type= "button" className="btnGeneral btnEdit">Editar</button>
                <button type= "button"className="btnGeneral btnDelete">Eliminar</button>
              </div>
            </td>
            </tr>
            
            
            <tr>
            <td>Roger Rodriguez</td>
            <td>rogerodri@gmail.com</td>
            <td>Vendedor</td>
            <td className= "pending">Pendiente</td>
            <td>
              <div className="editBtnContanier">
                <button type= "button" class="btnGeneral btnEdit">Editar</button>
                <button type= "button"class="btnGeneral btnDelete">Eliminar</button>
              </div>
            </td>
            </tr>

            <tr>
            <td>Angela Bermudez</td>
            <td>angelabermudez99@gmail.com</td>
            <td>Vendedor</td>
            <td className= "denied">No aprobado</td>
            <td>
              <div className="editBtnContanier">
                <button type= "button" className="btnGeneral btnEdit">Editar</button>
                <button type= "button"className="btnGeneral btnDelete">Eliminar</button>
              </div>
            </td>
            </tr>
            </tbody>

            </table>   
            
        </div>

        </div>
        
      </div>

      
      
      );
    }
    
    export default UserList;
    
       /**  <div>
         <h1>Lista de Usuarios</h1>
         <div class= "SearchOptionsDiv">



         </div>
         <div className="mainContainer">
          <table class="userslistTable">
            <thead >
            <th>
            <td class= "col_title">Nombre</td>
            <td class= "col_title">Correo</td>
            <td class= "col_title">Rol</td>
            <td class= "col_title">Estado</td>
            <td class= "col-title col_btn_editar">Editar</td>
            
            </th>
            </thead>
            <tbody>

              <div className= "tableRows">
              <UserRow class="rowinfo" name='Emilia Cifuentes' email= 'emilia19@gmail.com' role='admin'state='aprobado'></UserRow>
           
              <UserRow class="rowinfo" name='Daniela Cifuentes' email= 'danitacif@gmail.com' role='admin'state='aprobado'></UserRow>
            
              <UserRow class="rowinfo" name='Enrique Diaz' email= 'enriquezz9@gmail.com' role='vendedor'state='aprobado'></UserRow>
            
              <UserRow class="rowinfo" name='Gabriel Perez' email= 'gabperez01@gmail.com' role='vendedor'state='pendiente'></UserRow>
            
              <UserRow class="rowinfo" name='Hina Perez' email= 'hinaperez01@gmail.com' role='vendedor'state='noaprobado'></UserRow>
            
              <UserRow class="rowinfo" name='Julio Jimenez' email= 'juliojim89@gmail.com' role='vendedor'state='pendiente'></UserRow>
              </div>
           
           </tbody>
          
          </table>
         </div>
        </div>
        
       <div>
         userlist
       </div>
    )
}

export default UserList;**/
