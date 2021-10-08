import listUsers from 'mocks/users.json'
import deleteuser from "media/person_remove_black_48dp.svg"
import edituser from "media/manage_accounts_white_24dp.svg"


const UsersTable = () => {
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
          
              {listUsers.map((user) => {
              return (
                <tr className="datarow">
                <td className="smallTD">{user.id}</td>
                <td className="descripTD">{user.name}</td>
                <td className="mediumTD emailrow ">{user.email}</td>
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
              
             
            </tbody>
          </table>
        </div>
    )
}

export default UsersTable
