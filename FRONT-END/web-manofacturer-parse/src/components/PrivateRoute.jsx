import { useUser } from 'context/UserContext';
import React from 'react';

const PrivateRoute = ({ roleList, children }) => {
  const { userData } = useUser();
  const date = new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  let day = date.toLocaleDateString("es-US", options);
  console.log("private user data", userData);

  if (roleList.includes(userData.role) && userData.state == "Aprobado") {
    return children;
  }
  return <>
    <div className="notifMessage">
      <span className="stateNotifi">Su usuario NO ESTÁ AUTORIZADO <br />o está PENDIENTE
        para ver esta sección.
        <br />Revise más tarde.
      </span>
    </div></>

};

export default PrivateRoute;