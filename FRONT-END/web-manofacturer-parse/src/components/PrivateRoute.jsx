import React, { useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import errorImage from "media/error.png"
import { Link } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, isAuthenticated, isLoading } = useAuth0();
    const override = css`display: block;  margin: 0 auto;  border-color: red;`;

    console.log(user, isAuthenticated, isLoading);

    if (isLoading) return <div className='spinerClass'><ClipLoader loading={isLoading} css={override} size={150}></ClipLoader>...</div>

    return isAuthenticated ? <> ({children}) </> : (<div>
        <div className='textNotUtentication'>NO ESTAS AUTENTICADO</div>
        <br />
        <div className='divBtnGoLogin'>
            <Link to='/'>
                <button className='btnGeneral '>LOGIN</button>
            </ Link>
        </div>
        <div className='divImgGoLogin'>
            <img className="loginImageError" src={errorImage} id="btnLogout" alt="img"></img>
        </div>

    </div>);
};

export default PrivateRoute;