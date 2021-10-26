import React from 'react';

const PrivateRoute = ({ roleList, children }) => {
  const { userData } = useUser();
  const date = new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  let day = date.toLocaleDateString("es-US", options);
  console.log("private user data",userData);
    
  if (roleList.includes(userData.role) ) {
    return children;
  }

  return <div className= "MainSection">
  {userData.state == "Pendiente" && (<>

<div className="notifMessage">
    <span className="stateNotifi">Su usuario esta pendiente de activación.
        <br />Revise más tarde.
    </span>

</div>   <span className="dateInfo">{day}</span>
</>

)}

{userData.state == "No aprobado" && (

<>

    <div className="notifMessage">
        <span className="stateNotifi">Su usuario NO está aprobado.
            <br />Revise más tarde.
        </span>

    </div>   <span className="dateInfo">{day}</span>
</>

)}
    </div>;
};

export default PrivateRoute;