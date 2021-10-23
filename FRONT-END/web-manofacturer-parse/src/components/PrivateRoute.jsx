import React, { useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";


const PrivateRoute = ({ children }) => {

    const { isAuthenticated, isLoading } = useAuth0();

    const override = css`display: block;  margin: 0 auto;  border-color: red;`;

    if (isLoading) return <div className='spinerClass'><ClipLoader loading={isLoading} css={override} size={150}></ClipLoader>...</div>

    return isAuthenticated ? <> {children} </> : <div className='spinerClass'>No estas autenticado</div>;
};

export default PrivateRoute;
