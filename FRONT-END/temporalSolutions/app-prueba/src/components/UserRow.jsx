import React from 'react'
import 'styles/user-list-styles.css';

const UserRow = (userdata) => {
    return (
        <>
        <ul className="ulRow">
           <li>
              <span>{userdata.name}</span> 
             </li> 
             <li>
              <span >{userdata.email}</span> 
             </li> 
             <li className="role">
              <span>{userdata.role}</span> 
             </li> 
             <li className="state">
                <span>{userdata.state}</span>
             </li>

        </ul>
        </>
    )
}

export default UserRow;
