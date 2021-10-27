import { useUser } from 'context/UserContext';
import React from 'react';

const PrivateComponent = ({ roleList, children }) => {
  const { userData } = useUser();
  console.log("private user data", userData);
  
  if (roleList.includes(userData.role)) {
    return children;
  }

  return <></>;
};

export default PrivateComponent;