import React from 'react'
import 'styles/header-style.css';

const Header = () => {
    return (
      <div className="headerOpt">

         <span className="greeting">
          Bienvenida , </span> 
        <div className="userdisplay">
          <span className="username">
          Emilia Watson
        </span>
        <span className="role">
          Administrador 
        </span>
            </div>      

          <div className="dateSection">
      <span className="date">
        Septiembre 29, 2021
      </span>
      <span className="hour">
      Hora: 5:30pm
      </span>
        </div>
      

          
       
        
        
        </div>
      ) ;
    }

export default Header;
