import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const ButtonLogin = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <div className="divBtnGoLogin">
            <div className='information'>
                <h1>PARSE MANOFACTURER</h1>
            </div>
            <div className='buttonGoLogin'>
                <button className='btnGeneral btnGoLogin' onClick={() => loginWithRedirect()}>login</button>
            </div>
        </div>
    )
};
export default ButtonLogin;
