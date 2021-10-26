import React from 'react'
import { useUser } from 'context/UserContext';
const Index = () => {
    const { userData } = useUser();
    const date = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    let day = date.toLocaleDateString("es-US", options);

    return (
        <div className="MainSection">
            {(userData.state == "Aprobado") && (

                <div className=" greeting">

                    {(userData.role) === "administrador" && (<>
                        <div className="titlepage">
                            <span className="title">  Bienvenido, Administrador (a)</span>
                        </div>
                        <span>{day}</span> </>
                    )}


                    {(userData.role) === "vendedor" && (<>
                        <div className="titlepage">
                            <span className="title">  Bienvenido, Vendedor (a)</span>
                        </div>
                        <span>{day}</span> </>
                    )}

                    {(userData.role) === "no_asignado" && (<>
                        <div className="titlepage">
                            <span className="title">  Bienvenido</span>
                        </div>
                        <span> Aún no tienes rol asignado. Revisa más tarde.</span>
                        <span>{day}</span> </>
                    )}


                </div>)}

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


        </div>
    )
}

export default Index;
