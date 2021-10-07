import React from 'react'
/**import 'styles/productManager.css';**/
const Products = () => {
    return (
        <div>
            <table>
                <th>Lista de Productos</th>
                <tbody>
                    <tr>
                        <td>Producto 1</td>
                        
                    </tr>
                    <tr>
                        <td>Producto 2</td>
                        
                    </tr>
                    <tr>
                        <td>Producto 3</td>
                        
                    </tr>
                    <tr>
                        <td>Producto 4</td>
                        
                    </tr>
                </tbody>
            </table>
                

        </div>
    )
}

export default Products;
/*
const Products = () => {
    return (
        <div src="productsManagerSection">
              <form src="products-form"action="">
            <div name="data" className="productManager">
                <h1>PRODUCT MANAGER</h1>

                <label for="idNumber">ID</label>
                <input type="text" id="idNumber" className="inputId"/>

                <label for="description">Description</label>
                <input type="text" id="description" className="inputDescription"/>
                
                <label for="unitaryPrice">Unitary Price</label>
                <span className="currency">$</span>
                <input id="unitaryPrice" name="amount" type="text" maxlength="15" className="inputUnitaryPrice"/>


                <label for="state">State</label>
                <select name="state" id="state" className="selectState">
                    <option value="available">Available</option>
                    <option value="notAvailable">Not available</option>
                </select>
            </div>
            <div name="crudButtons" className="buttonsManager">
                <button>Search</button>
                <button>Create</button>
                <button>Update</button>
                <button>Delete</button>
            </div>
            <div name="listData" className="listManager">
                <table style="width:100%">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                            <th>Unit Price</th>
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>
                    <th>

                            <td>Produc ID</td>
                            <td>Descripcion</td>
                            <td >Unit Price</td>
                            <td >State</td>
                        {/**
                         * <tr th:each="productManager : ${listData}">
                            <td th:text="${object.id}">Produc ID</td>
                            <td th:text="${object.descripcion}">Descripcion</td>
                            <td th:text="${object.unitPrice}">Unit Price</td>
                            <td th:text="${object.state}">State</td>
                        </tr>
                         
                         
                       </th>
                    </tbody>
                </table>
            </div>
        </form>
        </div>
    )
}

export default Products; */ 
