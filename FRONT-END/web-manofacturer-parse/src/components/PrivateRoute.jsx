import { useUser } from 'context/UserContext';
import React from 'react';

const PrivateRoute = ({ roleList, children }) => {
  const { userData } = useUser();
  console.log("private user data",userData);
    
  if (roleList.includes(userData.role)) {
    return children;
  }
  

  return <>
    <div className="MainSection"></div>
    <h2 align="center">Usted no está autorizado para entrar en este sitio</h2>
    </>;
};

export default PrivateRoute;