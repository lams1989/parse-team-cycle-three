import deleteuser from "media/person_remove_black_48dp.svg"
import edituser from "media/manage_accounts_white_24dp.svg"


const UsersTable = ({listpr}) => {
    return (
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
                <td className="numberTD">{user.id}</td>
                <td className="descripTD">{user.name}</td>
                <td className="mediumTD  ">{user.email}</td>
                <td className="smallLargeTD">{user.role}</td>
                
                <td className="smallLargeTD">{user.state}</td>
                <td className="mediumTD">
                  <div className="editBtnContainer">
                    <button type="button" className="btnGeneral btnEdit">  <img src={edituser} className="btnIcon" alt="img"></img>Editar</button>
                    <button type="button" className="btnGeneral btnDelete">  <img src={deleteuser} className="btnIcon" alt="img"></img>Eliminar</button>
                  </div>
                </td>
              </tr>
              
              );
            })}
            {/*Example of datarow for editing information --will be implement later in react*/}
          <tr className="datarow">  
                  <td className="smallTD">ID</td>
                  <td className="descripTD">Nombre</td>
                  <td className="mediumTD"><input type="text" className="inputChange emailrow" placeholder="Correo" /></td>
                  <td className="smallLargeTD"> <select className="selectRole">
                    <option className= "sellerRole"value="noRoleYet" disabled>Selecciona un rol</option>
                    <option className= "sellerRole"value="sellerRole">Vendedor</option>
                    <option className= "adminRole" value="adminRole">Administrador</option>
                  </select></td>
                  <td className= "aproved"> <select  className="selectStatus" >
                    <option className="aproved" value="aproved">Aprobado</option>
                    <option className="denied" value="denied">No Aprobado</option>
                    <option className="pending" value="pending">Pendiente</option>
                  </select></td>
                  <td className="mediumTD">
                  <div className="editBtnContainer">
                    <button type="button" className="btnGeneral btnEdit">  <img src={edituser} className="btnIcon" alt="img"></img>Editar</button>
                    <button type="button" className="btnGeneral btnDelete">  <img src={deleteuser} className="btnIcon" alt="img"></img>Eliminar</button>
                  </div>
                </td>
            </tr>
              
             
            </tbody>
          </table>
        </div>
    )
}

export default UsersTable
