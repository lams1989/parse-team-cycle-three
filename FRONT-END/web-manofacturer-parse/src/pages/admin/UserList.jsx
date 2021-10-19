import UsersTable from 'components/UsersTable';
import React, { useEffect, useState, useRef } from 'react';
import "styles/pages-styles.css"
import useradd from "media/person_add_alt_white_48dp.svg"
import searchuser from "media/zoom_in_white_48dp.svg"
import { createUser, optainUsers, obtainUserById } from "utils/Api-connection"
import { ToastContainer, toast, Zoom } from 'react-toastify';


const UserList = () => {

  const formAddUser = useRef(null);
  const [reload, setReload] = useState(true);
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    const fetchUsers= async () => {
    
    await optainUsers(
      (response) => {
        setUsersList(response.data);
        setReload(false);
      },
      (error) => {
        console.error('Salio un error:', error);
      }
      );
    };
    console.log('consulta', reload);
    if (reload) {
      fetchUsers();
    }
  }, [reload]);


  const submitCreateUser = (e) => {
    e.preventDefault();
    const formData = new FormData(formAddUser.current);
    const newUser = {};
    formData.forEach((value, key) => {
      newUser[key] = value;
    });

    createUser(
      {
        id: newUser.userId,
        name: newUser.name.toUpperCase(),
        email: newUser.email.toLowerCase(),
        role: newUser.role,
        state: newUser.state
      },
      (response) => {
        console.log(response.data);
        toast.success('user was created SUCCESSFULLY');
        setReload(true);
      },
      (error) => {
        console.error(error);
        toast.error('Create user ERROR');
      }
    );
 
  };

  
  return (
    <div className="MainSection">
      <div className="titlepage">
        <span className="title">   Lista de Usuarios</span>
      </div>

      <h3 className=" addNewSubt marg-l"> Agregar Usuario</h3>
      <div className="addContainer">
        <form ref={formAddUser} onSubmit={submitCreateUser}>
          <ul className="listFields">
            <li>
              <label> ID Usuario</label>
              <input name="userId" className="inputChange inputValue" type="text" required placeholder="ID"></input>
            </li>
            <li>
              <label> Nombre</label>
              <input name="name" className="inputChange" type="text" required placeholder="Nombre"></input>
            </li>
            <li>
              <label> Correo Electrónico</label>
              <input name="email" className="inputChange smallLargeTD" autoComplete="email" required placeholder="Correo electrónico"></input>
            </li>
            <li className="addDataRoleContainer">
              <label> Rol </label>
              <select name="role" className="selectRole">
                <option className="sellerRole" value="noRoleYet" disabled>Selecciona un rol</option>
                <option className="sellerRole" value="vendedor">Vendedor</option>
                <option className="adminRole" value="administrador">Administrador</option>
              </select>
            </li>
            <li>
              <label> Estado </label>
              <select name="state" className="selectStatus">
                <option className="aproved" value="aprobado">Aprobado</option>
                <option className="denied" value="no aprobado">No Aprobado</option>
                <option className="pending" value="pendiente">Pendiente</option>
              </select>
            </li>
          </ul>
          <div className="btnOptionsContainer">
            <button type="submit" className="btnGeneral btnCreateUser"> <img className="btnIcon" src={useradd} alt="img"></img> Crear Usuario</button>
            <button type="reset" className="btnGeneral btnCancel">Cancelar</button>
          </div>
        </form>
      </div>
      <ToastContainer rtl
        position="top-center"
        autoClose={2000}
        transition={Zoom}
        limit={1}
      />
     

      <UsersTable listpr={usersList} setReload={setReload} />

    </div>
  )
}

export default UserList
