import React, { useRef } from 'react';
import "styles/pages-styles.css";
import useradd from "media/person_add_alt_white_48dp.svg";
import { createUser } from "utils/Api-connection";
import { ToastContainer, toast, Zoom } from 'react-toastify';

const AddUser = () => {

  const formAddUser = useRef(null);
  const submitCreateUser =  (e) => {
    e.preventDefault();
    const formData = new FormData(formAddUser.current);
    const newUser = {};
    formData.forEach((value, key) => {
      newUser[key] = value;
    });
    const r={
      name: newUser.name,
      email: newUser.email.toLowerCase(),
      role: newUser.role,
      state: newUser.state,
      nickname: newUser.name, 
      picture: "",
      created_at: ""
    }
    console.log(r);
  
     createUser(
      {
        "name": newUser.name,
        "email": newUser.email.toLowerCase(),
        "role": newUser.role,
        "state": newUser.state,
        "nickname": newUser.name,
        "picture": "",
        "created_at": ""
      },
      (response) => {
        console.log(response.data);
        toast.success('user was created SUCCESSFULLY');
        document.getElementById("formAddUser").reset();
      },
      (error) => {
        console.error(error);
        toast.error('Create user ERROR');
      }
    );
  };
  return (
    <div className="MainSection">
      <h3 align="center" className=" addNewSubt marg-l"> Nuevo Usuario</h3>
      <div className="newOrderContainer">
        <form id="formAddUser" ref={formAddUser} onSubmit={submitCreateUser}>
          <ul className="ulProduct">
            <li>
              <label> Nombre</label>
              <input name="name" className="inputChange mediumTD" type="text" required placeholder="Nombre"></input>
            </li>
            <li>
              <label> Correo Electrónico</label>
              <input name="email" className="inputChange smallLargeTD" autoComplete="email" required placeholder="Correo electrónico"></input>
            </li>
            <li className="addDataRoleContainer">
              <label> Rol </label>
              <select name="role" className="selectRole">
                <option className="sellerRole" value="vendedor">Vendedor</option>
                <option className="adminRole" value="administrador">Administrador</option>
                <option className="sellerRole" value="no_asignado" >No_asignado</option>
              
              </select>
            </li>
            <li>
              <label> Estado </label>
              <select name="state" className="selectStatus">
                <option className="aproved" value="Aprobado">Aprobado</option>
                <option className="denied" value="No aprobado">No Aprobado</option>
                <option className="pending" value="Pendiente">Pendiente</option>
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
    </div>
  )
};
export default AddUser
