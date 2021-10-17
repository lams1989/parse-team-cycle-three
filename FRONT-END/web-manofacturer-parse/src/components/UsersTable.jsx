import deleteuser from "media/person_remove_black_48dp.svg"
import { updateUsers } from 'utils/Api-connection';
import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast, Zoom } from 'react-toastify';

const UsersTable = ({ listpr }) => {

  const formEditUser = useRef({ listpr });
  const [editId, setEditId] = useState();
  const [editRole, setEditRole] = useState(listpr.role);
  const [editState, setEditState] = useState(listpr.state);


  const submitEditUser = (e) => {
    console.log('id', editId);
    console.log('role', editRole);
    console.log('State', editState);


    e.preventDefault();
    const dataEditUser = new FormData(formEditUser.current)

    const newData = {};
    dataEditUser.forEach((value, key) => {
      newData[key] = value;
    });

    updateUsers(
      newData.id,
      {
        role: editRole,
        state: editState
      },
      (response) => {
        console.log(response.data);
        toast.success('Usuario agregado con éxito');
      },
      (error) => {
        console.error(error);
        toast.error('Error actualizando usuario');
      }
    );

  };


  return (

    <form ref={formEditUser} onSubmit={submitEditUser} >
      <ToastContainer rtl
        position="top-center"
        autoClose={2000}
        transition={Zoom}
        limit={1}
      />
      <div className="listSectionContainer divUsuariosList">
        <table className="ListTable">
          <thead className="thead">
            <tr>
              <th className="col_title">ID</th>
              <th className="col_title">Nombre</th>
              <th className="col_title">Correo</th>
              <th className="col_title">Rol</th>
              <th className="col_title">Estado</th>
              <th className="col-title col-last">Modificar</th>
            </tr>
          </thead>
          <tbody>
            {listpr.map((user) => {
              return (
                <tr className="datarow">
                  <td className="smallTD">
                    <input name="id" className="inputChange inputValue" type="text" placeholder={user.id} value={user.id} onChange={(e) => {
                      setEditId(e.target.value);
                    }}></input>
                  </td>
                  <td className="descripTD">{user.name}</td>
                  <td className="mediumTD  ">{user.email}</td>
                  <td className="mediumTD">
                    <select name="role" className="selectRole" onChange={(e) => setEditRole(e.target.value)}>
                      <option hidden="hidden">{user.role}</option>
                      <option className="sellerRole" value="vendedor">Vendedor</option>
                      <option className="adminRole" value="administrador">Administrador</option>
                    </select>
                  </td>
                  <td className="mediumTD">
                    <select name="state" className="selectStatus" onChange={(e) => setEditState(e.target.value)}>
                      <option hidden="hidden">{user.state}</option>
                      <option className="aproved" value="aprovado">Aprobado</option>
                      <option className="denied" value="no aprovado">No Aprobado</option>
                      <option className="pending" value="pendiente">Pendiente</option>
                    </select>
                  </td>
                  <td className="mediumTD">
                    <div className="editBtnContainer">
                      <button type="submit" className="btnGeneral btnEdit">Editar</button>
                      <button type="button" className="btnGeneral btnDelete">  <img src={deleteuser} className="btnIcon" alt="img"></img>Eliminar</button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </form>
  )
}

export default UsersTable
