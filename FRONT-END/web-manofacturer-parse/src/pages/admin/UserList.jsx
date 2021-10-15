import UsersTable from 'components/UsersTable';
import React from 'react'
import "styles/pages-styles.css"
import useradd from "media/person_add_alt_white_48dp.svg"
import searchuser from "media/zoom_in_white_48dp.svg"

const UserList = () => {
  return (
    <div className="MainSection">
      <div classNameName="titlepage">
        <span className="title">   Lista de Usuarios</span>
      </div>
      
      <h3 className=" addNewSubt marg-l"> Agregar Usuario</h3>
      <div className="addContainer">
        <form className="addUserForm">
          <ul className="listFields">
            <li>
              <label> Nombre</label>
              <input className="inputChange" type="text" required placeholder="Nombre"></input>
            </li>
            <li>
              <label> Correo Electrónico</label>
              <input className="inputChange"  autoComplete="email" required placeholder="Correo electrónico"></input>
            </li>
            <li className="addDataRoleContainer">
              <label> Rol </label>
              <select className="selectRole">
                <option className="sellerRole" value="noRoleYet" disabled>Selecciona un rol</option>
                <option className="sellerRole" value="sellerRole">Vendedor</option>
                <option className="adminRole" value="adminRole">Administrador</option>
              </select>
            </li>
            <li>
              <label> Estado </label>
              <select className="selectStatus">
                <option className="aproved" value="aproved">Aprobado</option>
                <option className="denied" value="denied">No Aprobado</option>
                <option className="pending" value="pending">Pendiente</option>
              </select>
            </li>
          </ul>
          <div className="btnOptionsContainer">
            <button type="submit" className="btnGeneral btnCreateUser"> <img className="btnIcon"  src={useradd} alt="img"></img> Crear Usuario</button>
            <button type="reset" className="btnGeneral btnCancel">Cancelar</button>
          </div>
        </form>
      </div>
      <div className="searchContainer">
        <form >
          <span>Buscar Usuario por </span>
          <select className="selectRole selectSearchUser">
            <option>Nombre</option>
            <option>Correo</option>
            <option>Rol</option>
            <option>Estado</option>
          </select>
          <input type="text" className="toSearchInput" placeholder="Nombre usuario" />
          <button type="submit" className="btnGeneral btnSearchUser" id="submitUserSearchBtn">
          <img className="btnIcon"  src={searchuser} alt="img"></img> Buscar</button>
        </form>
      </div>
      
      <UsersTable/>
      
    </div>
   
  )
}


export default UserList
