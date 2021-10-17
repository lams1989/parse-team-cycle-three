import UsersTable from 'components/UsersTable';
import React, { useEffect, useState, useRef } from 'react';
import "styles/pages-styles.css"
import useradd from "media/person_add_alt_white_48dp.svg"
import searchuser from "media/zoom_in_white_48dp.svg"
import { createUser, optainUsers, obtainUserById } from "utils/Api-connection"
import { ToastContainer, toast, Zoom } from 'react-toastify';


const UserList = () => {

  const formAddUser = useRef(null);
  const formSearchUser = useRef(null);
  const [reload, setReload] = useState(false);
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    console.log(
      'Hola, soy un use effect que se ejecuta solo una vez cuando la pagina se renderiza, para cargar la lista de productos inicial'
    );
    optainUsers(
      (response) => {
        console.log('la respuesta que se recibio fue', response);
        console.log(response.data);
        setUsersList(response.data);
      },
      (error) => {
        console.error('Salio un error:', error);

      }
    );
    setReload(false);
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
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        state: newUser.state
      },
      (response) => {
        console.log(response.data);
        toast.success('user was created SUCCESSFULLY');
      },
      (error) => {
        console.error(error);
        toast.error('Create user ERROR');
      }
    );
    setReload(true);
  };

  const submitSearchUser = (e) => {
    e.preventDefault();
    const formData = new FormData(formSearchUser.current);

    const userSearch = {};

    formData.forEach((value, key) => {
      userSearch[key] = value;
    });

    obtainUserById(
        userSearch.id,
      (response) => {
        console.log(response.data);
        toast.success('Usuario encontrado con exito');
      },
      (error) => {
        console.error(error);
        toast.error('Error en busqueda');
      }
    );

    setReload(true);
  }




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
              <label> Client ID</label>
              <input name="userId" className="inputChange" type="text" required placeholder="ID"></input>
            </li>
            <li>
              <label> Nombre</label>
              <input name="name" className="inputChange" type="text" required placeholder="Nombre"></input>
            </li>
            <li>
              <label> Correo Electrónico</label>
              <input name="email" className="inputChange" autoComplete="email" required placeholder="Correo electrónico"></input>
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
      <div className="searchContainer">
        <form ref={formSearchUser} onSubmit={submitSearchUser}>
          <span>Buscar Usuario por </span>
          <select className="selectRole selectSearchUser">
            <option>Nombre</option>
            <option>Correo</option>
            <option>Rol</option>
            <option>Estado</option>
          </select>
          <input type="text" className="toSearchInput" placeholder="Nombre usuario" />
          <button type="submit" className="btnGeneral btnSearchUser" id="submitUserSearchBtn">
            <img className="btnIcon" src={searchuser} alt="img"></img> Buscar</button>
        </form>
      </div>

      <UsersTable listpr={usersList} />

    </div>

  )
}


export default UserList
