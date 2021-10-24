import React from 'react'

const IndexSeller = () => {
    const date= new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',hour: '2-digit', minute: '2-digit' };
    let day = date.toLocaleDateString("es-US", options);

    return (
        <div className= "greeting">
            <div className="titlepage">
        <span className="title">  Bienvenido, Vendedor(a)</span>
        
      </div>
     
      <span>{day}</span>
        </div>
    )
}

export default IndexSeller
