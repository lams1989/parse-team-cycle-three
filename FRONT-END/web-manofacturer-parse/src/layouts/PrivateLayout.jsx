import React, { useState, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import errorImage from "media/error.png"
import { Link } from 'react-router-dom';
import { obtainUserData, obtainUserByEmail,createUser } from 'utils/Api-connection';
import jwt_decode from "jwt-decode";
import { useUser } from 'context/UserContext';

const PrivateLayout = ({ children }) => {
    const {setUserData}= useUser();
    const { user, isAuthenticated, isLoading, getAccessTokenSilently,loginWithRedirect,logout } = useAuth0();
    const [loadingUserInfo, setLoadingUserInfo]= useState(false);
    const override = css`display: block;  margin: 0 auto;  border-color: red;`;
    console.log(user, isAuthenticated, isLoading);
  
    useEffect( async()  => {
        const fetchAuth0Token = async () => {

            
            const accessToken = await getAccessTokenSilently({
                audience: 'api-autentication-parse-manofacturer',
            });
            //   console.log(accessToken);
            setLoadingUserInfo(true);
            localStorage.setItem("token", accessToken);
            console.log(accessToken);


            const token = accessToken;
            //console.log(token);
            const userdata = jwt_decode(token)['http://localhost/userData'];
            console.log(userdata);
            await obtainUserByEmail(userdata.email,
                (response) => {
                    console.log(response.data);
                   
                    if (response.data != null) {
                        console.log("Ya existe");
                       setUserData(response.data);
                       setLoadingUserInfo(false);
                    } else {
                     createUser(
                            {
                                name: userdata.name,
                                email: userdata.email,
                                role: "No_asignado",
                                state: "Pendiente", 
                                nickname: userdata.nickname, 
                                picture: userdata.picture,
                                created_at: userdata.created_at
                            },
                            (response) => {
                                console.log("created: ", response.data);
                                setUserData(response.data);
                                setLoadingUserInfo(false);
                            },
                            (error) => {
                                console.error(error);
                                setLoadingUserInfo(false);
                            }
                        );
                    }
                    
                },
                (error) => {
                    logout({ returnTo: 'http://localhost:3000/admin' });
                    console.error('Salio un error:', error);
                    setLoadingUserInfo(false);
                }
            );
        };


        if (isAuthenticated) {
            fetchAuth0Token();

        }
    }, [isAuthenticated, getAccessTokenSilently]);

    if (isLoading  ||   loadingUserInfo ) return <div className='spinerClass'><ClipLoader loading={isLoading} css={override} size={150}></ClipLoader>...</div>
   
    if (!isAuthenticated) {
        return loginWithRedirect();
      }
    
      return (<>
          <div >
                    {children}
            </div>
      </>
      );
//    return isAuthenticated ? <> ({children}) </> : (<div>
//         <div className='textNotUtentication'>NO ESTAS AUTENTICADO</div>
//         <br />
//         <div className='divBtnGoLogin'>
//             <Link to='/'>
//                 <button className='btnGeneral '>LOGIN</button>
//             </ Link>
//         </div>
//         <div className='divImgGoLogin'>
//             <img className="loginImageError" src={errorImage} id="btnLogout" alt="img"></img>
//         </div>

//     </div>);
};

export default PrivateLayout;
