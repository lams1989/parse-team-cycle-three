
import { updateUser, deleteUser } from 'utils/Api-connection';
import React, { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import { Dialog, Tooltip } from '@material-ui/core';
import { nanoid } from 'nanoid';
import { optainUsers } from "utils/Api-connection";

const UsersTable = ({setEditOrderMode }) => {

  const [searching, setSearching] = useState('');
  const [usuariosFiltrados, setUsuariosFiltrados] = useState([]);
  const [reload, setReload] = useState(true);
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
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
  useEffect(() => {
    setUsuariosFiltrados(
      usersList.filter((elemento) => {
        return JSON.stringify(elemento).toLowerCase().includes(searching.toLowerCase());
      })
    );
  }, [searching, usersList]);
  const RowUser = ({ user }) => {
    const [editable, setEditable] = useState(false);
    const [editState, setEditState] = useState(user.state);
    const [editRole, setEditRole] = useState(user.role);
    const [confirmUpdateDialog, setConfirmUpdateDialog] = useState(false);
    const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);

    const submitEditUser = async () => {
      console.log('role', editRole);
      console.log('State', editState);
      setConfirmUpdateDialog(false);
      await updateUser(
        user._id,
        {
          "role": editRole,
          "state": editState
        },
        (response) => {
          console.log(response.data);
          toast.success('Usuario actualizado con éxito');
        },
        (error) => {
          console.error(error);
          toast.error('Error actualizando usuario');
        }
      );
      setEditable(false);
      setReload(true);
    };
    const ToDeleteUser = async () => {
      setConfirmDeleteDialog(false);
      await deleteUser(
        user._id,
        (response) => {
          console.log(response.data);
          toast.success('usuario eliminado con éxito');
        },
        (error) => {
          console.error(error);
          toast.error('Error eliminando el usuario');
        }
      );
      setReload(true);
    }
    return (
      <tr className="datarow">
        {editable ? (
          <>
            <td className="numberTD"><label  >{user.id}</label></td>
            <td className="smallLargeTD"><label>{user.name}</label></td>
            <td className="mediumTD"><label>{user.email}</label></td>

            <td className="smallLargeTD "><select className="selectStatus" defaultValue={user.role} required onChange={(e) => setEditRole(e.target.value)}>
              <option value="" disabled>Selecciona</option>
              <option className="aproved" value="administrador">Administrador</option>
              <option className="aproved" value="vendedor">Vendedor</option>
            </select></td>
            <td className="smallLargeTD "><select className="selectStatus" defaultValue={user.state} required onChange={(e) => setEditState(e.target.value)}>
              <option value="" disabled>Selecciona</option>
              <option className="aproved" value="aprobado">Aprobado</option>
              <option className="denied" value="no aprobado">No aprobado</option>
              <option className="denied" value="pendiente">Pendiente</option>
            </select></td>
          </>
        ) : (
          <>
            <td className="numberTD">{user.id}</td>
            <td className="mediumTD">{user.name}</td>
            <td className="smallTD">{user.email}</td>
            <td className="smallLargeTD ">{user.role}</td>
            <td className="smallLargeTD ">{user.state}</td>
          </>
        )
        }
        <td className="smallTD">
          <div className="editBtnContainer">
            {editable ?
              <>
                <Tooltip title='GUARDAR' arrow placement="left" >
                  <button type="submit" className="btnGeneral btnEdit" onClick={() => setConfirmUpdateDialog(true)}><i className="fas fa-user-check"></i> </button></Tooltip>
                <Tooltip title='Cancelar' arrow placement="right">
                  <button type="reset" className="btnGeneral btnDelete" onClick={() => setEditable(!editable)}>  <i class="fas fa-ban"></i></button></Tooltip>

              </>
              : (
                <><Tooltip title='Editar' arrow placement="left">
                  <button type="button" className="btnGeneral btnEdit" onClick={() => setEditable(!editable)}> <i class="fas fa-user-cog"></i></button></Tooltip>
                  <Tooltip title='Eliminar' arrow placement="botton">
                    <button type="reset" className="btnGeneral btnDelete" onClick={() => setConfirmDeleteDialog(true)}>  <i class="fas fa-user-minus"></i></button></Tooltip>
                </>
              )}
            <Dialog open={confirmUpdateDialog}>
              <div className="dialogUpdate">
                <h5>Actualización del usuario:</h5>
                <div className="infoUpdateDiv">
                  <p align="center"> Nombre: {user.name}      --    Role: {editRole}</p>
                  <p className="pLarge" align="center">State: {editState}</p>
                </div>
                <div className="editBtnContainer2">
                  <button type="button" className="btnGeneral btnEdit" onClick={() => submitEditUser()} >Si</button>
                  <button type="reset" className="btnGeneral btnDelete" onClick={() => setConfirmUpdateDialog(false)} >No</button>
                </div>
              </div>
            </Dialog>
            <Dialog open={confirmDeleteDialog}>
              <div className="dialogDelete">

                <h5>¿Está seguro de eliminar este producto?</h5>
                <p align="center">Rol: {user.role}  </p>
                <p className="pLarge" align="center"> {user.name}  </p>

                <div className="editBtnContainer2">
                  <button type="button" className="btnGeneral btnEdit" onClick={() => ToDeleteUser()} >Si</button>
                  <button type="reset" className="btnGeneral btnDelete" onClick={() => setConfirmDeleteDialog(false)} >No</button>
                </div>
              </div>
            </Dialog>
          </div>
        </td>
      </tr>
    )
  }
  return (
    <>
      <ToastContainer rtl
        position="top-center"
        autoClose={2000}
        transition={Zoom}
        limit={1}
      />
      <div className="searchContainerUser">
        <label>Buscar Usuario por </label>
        <input type="text" className="toSearchInput"
          placeholder="Buscar" value={searching}
          onChange={(e) => setSearching(e.target.value)} />
      </div>
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
            {usuariosFiltrados.map((productObj) => {
              return (
                <RowUser key={nanoid()} user={productObj} setReload={setReload} />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  )
};
export default UsersTable
