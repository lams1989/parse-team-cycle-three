import deleteuser from "media/person_remove_black_48dp.svg"
import { updateUser } from 'utils/Api-connection';
import React, { useState } from 'react';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import { Dialog, Tooltip } from '@material-ui/core';
import { nanoid } from 'nanoid';

const UsersTable = ({ listpr , setReload}) => {
  const RowUser = ({ user }) => {
    const [editable, setEditable] = useState(false);
    const [editState, setEditState] = useState(user.state);
    const [editRole, setEditRole] = useState(user.role);
    const [confirmUpdateDialog, setConfirmUpdateDialog] = useState(false);

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

    return (
      <tr className="datarow">
        {editable ? (
          <>
            <td className="numberTD"><label  >{user.id}</label></td>
            <td className="descripTD"><label>{user.name}</label></td>
            <td className="emailTD"><label>{user.email}</label></td>

            <td className="smallLargeTD "><select className="selectStatus" defaultValue={user.role} required onChange={(e) => setEditRole(e.target.value)}>
              <option value="" disabled>Selecciona</option>
              <option className="aproved" value="administrador">Administrador</option>
              <option className="aproved" value="vendedor">Vendedor</option>
            </select></td>
            <td className="smallLargeTD "><select className="selectStatus" defaultValue={user.state} required onChange={(e) => setEditState(e.target.value)}>
              <option value="" disabled>Selecciona</option>
              <option className="aproved" value="aprobado">Aprobado</option>
              <option className="denied" value="no aprobado">No aprovado</option>
              <option className="denied" value="pendiente">Pendiente</option>
            </select></td>
          </>
        ) : (
          <>
            <td className="numberTD">{user.id}</td>
            <td className="descripTD"><p className="pRowLarge">{user.name}</p></td>
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
                  <button type="submit" className="btnGeneral btnEdit" onClick={() => setConfirmUpdateDialog(true)}><i className="fas fa-save"></i>  </button></Tooltip>
                <Tooltip title='Cancelar' arrow placement="right">
                  <button type="reset" className="btnGeneral btnDelete" onClick={() => setEditable(!editable)}>  <i class="fas fa-ban"></i></button></Tooltip>

              </>
              : (
                <><Tooltip title='Editar' arrow placement="left">
                  <button type="button" className="btnGeneral btnEdit" onClick={() => setEditable(!editable)}> <i className="fas fa-edit"></i> </button></Tooltip>
                </>
              )}
            <Dialog open={confirmUpdateDialog}>
              <div className="dialogUpdate">
                <h5>Actualización del usero:</h5>
                <div className="infoUpdateDiv">
                  <p align="center"> ID: {user.id}      --    Role: {editRole}</p>
                  <p className="pLarge" align="center">State: {editState}</p>
                </div>
                <div className="editBtnContainer2">
                  <button type="button" className="btnGeneral btnEdit" onClick={() => submitEditUser()} >Si</button>
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
            {listpr.map((productObj) => {
              return (
                <RowUser key={nanoid()} user={productObj} setReload={setReload} />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default UsersTable
