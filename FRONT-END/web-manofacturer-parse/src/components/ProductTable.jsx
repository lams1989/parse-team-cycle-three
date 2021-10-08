import React from 'react'
import products from 'mocks/products.json'

const ProductTable = () => {
    return (
        <div className="listSectionContainer divProducts">
        <table className="ListTable">
          <thead className="thead ">
            <tr>
              <th className="col_title ">ID Producto</th>
              <th className="col_title">Descripción</th>
              <th className="col_title ">Precio Unitario</th>
              <th className="col_title">Estado</th>
            </tr>
          </thead>
          {/*All this data rows are examples. Later it will be implemented a function map that fills the rows*/}
          <tbody>

          {products.map((product) => {
              return (
                <tr className="datarow">
                <td className="numberTD">{product.id}</td>
                <td className="descripTD">{product.description}</td>
                <td className="smallTD">$ {product.unitprice}</td>
                <td className="smallTD ">{product.state}</td>
              </tr>
              
              );
            })}
            

          </tbody>
        </table>
      </div>
    )
}

export default ProductTable
