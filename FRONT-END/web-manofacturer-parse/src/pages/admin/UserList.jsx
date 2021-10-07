import React from 'react'
import "styles/pages-styles.css"

const UserList = () => {
  return (
    <div className="MainSection">
      <div classNameName="titlepage">
        <span className="title"> Lista de Usuarios</span>
      </div>
      <h2 className=" addNewSubt">Agregar Usuario</h2>
      <div className="addContainer">
        <form className="addUserForm">
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
                <option className="sellerRole" value="noRoleYet" disabled>Selecciona un rol</option>
                <option className="sellerRole" value="sellerRole">Vendedor</option>
                <option className="adminRole" value="adminRole">Administrador</option>
              </select>
            </li>
            <li className="addData">
              <label> Estado </label>
              <select className="selectStatus">
                <option className="aproved" value="aproved">Aprobado</option>
                <option className="denied" value="denied">No Aprobado</option>
                <option className="pending" value="pending">Pendiente</option>
              </select>
            </li>
          </ul>
          <div className="btnOptionsContainer">
            <button type="submit" className="btnGeneral btnAdd">Crear Usuario</button>
            <button type="reset" className="btnGeneral btnCancel">Cancelar</button>
          </div>
        </form>
      </div>
      <div className="searchContainer">
        <form>
          <span>Buscar Usuario por </span>
          <select className="selectRole selectSearchUser">
            <option>Nombre</option>
            <option>Correo</option>
            <option>Rol</option>
            <option>Estado</option>
          </select>
          <input type="text" className="toSearchInput" placeholder="Nombre usuario" />
          <button type="submit" className="btnGeneral btnSearchUser" id="submitUserSearchBtn">
            Buscar</button>
        </form>
      </div>
      <div className="listSection">
        <table className="ListTable">
          <thead className="thead">
            <tr>
              <th className="col_title">Nombre</th>
              <th className="col_title">Correo</th>
              <th className="col_title">Rol</th>
              <th className="col_title">Estado</th>
              <th className="col-title"></th>
            </tr>
          </thead>
          {/*All this data rows are examples. Later it will be implemented a function map that fills the rows*/}
          <tbody className="tbodyN">
            <tr >
              <td>Angela Bermudez</td>
              <td className="emailrow">angelabermudez99@gmail.com</td>
              <td>Admin</td>
              <td className="aproved">Aprobado</td>
              <td>
                <div className="editBtnContanier">
                  <button type="button" className="btnGeneral btnEdit">Editar</button>
                  <button type="button" className="btnGeneral btnDelete">Eliminar</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Camila Mar</td>
              <td className="emailrow">camilaMar001@gmail.com</td>
              <td>Admin</td>
              <td className="aproved">Aprobado</td>
              <td>
                <div className="editBtnContanier">
                  <button type="button" className="btnGeneral btnEdit">Editar</button>
                  <button type="button" className="btnGeneral btnDelete">Eliminar</button>
                </div>
              </td>
            </tr>
            {/*Example of datarow for editing information --will be implement later in react*/}
            <tr className="datarowUserEditable">
              <td> <input className="toSearchInput" type="text" placeholder="Camila Mar" disabled /></td>
              <td> <input className="toSearchInput" type="text" placeholder="camilaMar001@gmail.com" disabled /></td>
              <td> <select className="selectRole">
                <option className="sellerRole" value="noRoleYet" disabled>Selecciona un rol</option>
                <option className="sellerRole" value="sellerRole">Vendedor</option>
                <option className="adminRole" value="adminRole">Administrador</option>
              </select></td>
              <td className="aproved"> <select className="selectStatus" >
                <option className="aproved" value="aproved">Aprobado</option>
                <option className="denied" value="denied">No Aprobado</option>
                <option className="pending" value="pending">Pendiente</option>
              </select></td>
              <td><div className="editBtnContanier">
                <button type="button" className="btnGeneral btnEdit">Editar</button>
                <button type="button" className="btnGeneral btnDelete">Eliminar</button>
              </div>
              </td>
            </tr>
            <tr>
              <td>Fabio Bermudez</td>
              <td className="emailrow">fabioberm@gmail.com</td>
              <td>Vendedor</td>
              <td className="pending">Pending</td>
              <td>
                <div className="editBtnContanier">
                  <button type="button" className="btnGeneral btnEdit">Editar</button>
                  <button type="button" className="btnGeneral btnDelete">Eliminar</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Tati Díaz</td>
              <td className="emailrow">tatidiazm@gmail.com</td>
              <td>Vendedor</td>
              <td className="aproved">Aprobado</td>
              <td>
                <div className="editBtnContanier">
                  <button type="button" className="btnGeneral btnEdit">Editar</button>
                  <button type="button" className="btnGeneral btnDelete">Eliminar</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Roger Rodriguez</td>
              <td className="emailrow">rogerodri@gmail.com</td>
              <td>Vendedor</td>
              <td className="pending">Pendiente</td>
              <td>
                <div className="editBtnContanier">
                  <button type="button" className="btnGeneral btnEdit">Editar</button>
                  <button type="button" className="btnGeneral btnDelete">Eliminar</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Angela Camila</td>
              <td className="emailrow">angez99@gmail.com</td>
              <td>Vendedor</td>
              <td className="denied">No aprobado</td>
              <td>
                <div className="editBtnContanier">
                  <button type="button" className="btnGeneral btnEdit">Editar</button>
                  <button type="button" className="btnGeneral btnDelete">Eliminar</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Dimitri Garces</td>
              <td className="emailrow">dimitrigarces1@gmail.com</td>
              <td>Vendedor</td>
              <td className="denied">No aprobado</td>
              <td>
                <div className="editBtnContanier">
                  <button type="button" className="btnGeneral btnEdit">Editar</button>
                  <button type="button" className="btnGeneral btnDelete">Eliminar</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Luisa Ordoñez</td>
              <td className="emailrow">luisaord@gmail.com</td>
              <td>Vendedor</td>
              <td className="denied">No aprobado</td>
              <td>
                <div className="editBtnContanier">
                  <button type="button" className="btnGeneral btnEdit">Editar</button>
                  <button type="button" className="btnGeneral btnDelete">Eliminar</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Karina Gigi</td>
              <td className="emailrow ">kargina@gmail.com</td>
              <td>Vendedor</td>
              <td className="aproved">Aprobado</td>
              <td>
                <div className="editBtnContanier">
                  <button type="button" className="btnGeneral btnEdit">Editar</button>
                  <button type="button" className="btnGeneral btnDelete">Eliminar</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Daria Torres</td>
              <td className="emailrow">dariatorress@gmail.com</td>
              <td>Vendedor</td>
              <td className="denied">No aprobado</td>
              <td>
                <div className="editBtnContanier">
                  <button type="button" className="btnGeneral btnEdit">Editar</button>
                  <button type="button" className="btnGeneral btnDelete">Eliminar</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Francisco Kim</td>
              <td className="emailrow">fransciscokimti@gmail.com</td>
              <td>Vendedor</td>
              <td className="pending">pendiente</td>
              <td>
                <div className="editBtnContanier">
                  <button type="button" className="btnGeneral btnEdit">Editar</button>
                  <button type="button" className="btnGeneral btnDelete">Eliminar</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Angela Bermudez</td>
              <td className="emailrow">angelabermudez99@gmail.com</td>
              <td>Vendedor</td>
              <td className="denied">No aprobado</td>
              <td>
                <div className="editBtnContanier">
                  <button type="button" className="btnGeneral btnEdit">Editar</button>
                  <button type="button" className="btnGeneral btnDelete">Eliminar</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserList
