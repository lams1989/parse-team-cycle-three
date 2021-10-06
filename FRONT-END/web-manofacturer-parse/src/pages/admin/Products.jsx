import React from 'react'
const Products = () => {
    return (
        
        <div className="MainSection">
    <div classNameName="titlepage">
      <span className="title"> Lista de Productos</span>
    </div>

    <h2 className=" addNewSubt marg-l">Agregar Producto</h2>
    <div className= "newOrderContainer">
    <ul className="dataNew">
                       
                       <li>
                       <label>ID Producto</label>
                   <input className= "inputChange inputNumber " placeholder="ID" ></input>
                       </li>
                       <li>
                       <label>Precio Unitario</label>
                         <input  className= "inputChange inputMedium" placeholder="$" ></input>
                       </li>
                      
                       <li>
                       <label>Estado</label>
                       <select  className="selectStatus" >
                    <option className="aproved" value="available">Disponible</option>
                    <option className="denied" value="notavailable">No disponible</option>
                  </select>
                       </li>
                     
                       <li>
                   <label>Descripción</label>
                   <input className= "inputChange inputLarge" placeholder="Descripción producto"></input>
                       </li>
                       
                   </ul>
                   <div className="btnDiv3">
                     <button type="submit" className="btnGeneral btnAdd">Registrar Producto</button>
                    <button type="reset" className="btnGeneral btnCancel">Cancelar</button>
                    </div>               
                    </div>

                    <div className="searchContainer  marg-l">

                    <form>
                <span>Selecciona </span>
<select className="selectRole ">
<option>ID Producto</option>
<option>Descripción</option>
</select>

<input type="text" className="toSearchInput" placeholder="Digite el ID de la Venta" />
<span>para </span>


    
 <button type="submit" className="btnGeneral btnSearchUser marg-l" id="submitProductSearchBtn">
 Buscar</button>
<button type="submit" className="btnGeneral btnSearchUser marg-l" id="updateProductSearchBtn">
Actualizar</button>
<button type="submit" className="btnGeneral btnSearchUser marg-l" id="deleteProductSearchBtn">
Eliminar</button>

</form>
 </div>
 <div className="listSectionProductsToBuy divProducts">
            
            <table className="ListTableProductsToBuy">
      
              <thead className="thead theadFix">
                <tr>
                
                  <th className="col_title ">ID Producto</th>
                  <th className="col_title">Descripción</th>
                  <th className="col_title">Precio Unitario</th>
                  <th className="col_title">Estado</th>
                </tr>
              </thead>
      
             {/*All this data rows are examples. Later it will be implemented a function map that fills the rows*/}
              <tbody className="tbodyNToBuy">
                <tr className="datarow">
                  <td className="smallTD">173</td>
                  <td className="descripTD">Producto # 173 Tamaño Extragrande</td>
                  <td className="smallTD">$ 71.000</td>
                  <td className="smallTD aproved" >Disponible</td>
                </tr>
              
                <tr className="datarow">
                  <td className="smallTD">171</td>
                  <td className=" descrLarge">Producto # 171 Tamaño Extragrande</td>
                  <td className="smallTD">$ 70.000</td>
                  <td className="smallTD denied" >No Disponible</td>
                </tr>

                <tr className="datarow">
                  <td className="smallTD">170</td>
                  <td className=" descrLarge">Producto # 170 Tamaño Extragrande, grande, pequeño</td>
                  <td className="smallTD">$ 90.000</td>
                  <td className="smallTD aproved" > Disponible</td>
                </tr>
             
      
              </tbody>
              </table>
             
          </div>



    </div>
    )
}

export default Products;

