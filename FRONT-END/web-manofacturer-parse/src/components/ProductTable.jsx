
import { nanoid } from 'nanoid'
import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast,Zoom } from 'react-toastify';
import { updateProductInfo ,deleteProduct} from 'utils/Api-connection';
const ProductTable = ({listpr}) => {
  
  
  
  const RowProduct=({product})=>{

    const [editable, setEditable] = useState(false);
    const [editState, setEditState] = useState(product.state);
    const [editUnitprice, setEditUnitprice] = useState(product.unitprice);
    const [editDescrip, setEditDescrip ]= useState(product.description);

    const updateProduct = (e) => {
      console.log("id: ",product.id);
      console.log("_id: ",product._id);
      console.log("state",editState);
      console.log("desc",editDescrip);
      console.log("unitpr",editUnitprice);
    
      const dataToUpdate= {
      "description":editDescrip,
       "unitprice":editUnitprice,
       "state":editState
      }
    
      updateProductInfo(
        product._id, 
        {"description":editDescrip,
        "unitprice":editUnitprice,
        "state":editState},
        (response) => {
          console.log(response.data);
          toast.success('Producto modificado con éxito');
        },
        (error) => {
          console.error(error);
          toast.error('Error modificando un producto');
        }
       
      );
      setEditable(false);
    };

    
   {/* const ToDeleteProduct = async (e) => {

      console.log("delete product, ",product._id);
    
  
   await   deleteProduct(
      product._id,
      (response) => {
        console.log(response.data);
        toast.success('Producto eliminado con éxito');
      
      },
      (error) => {
        console.error(error);
        toast.error('Error eliminando el producto');
      }
    );

 
};
*/}
const ToDeleteProduct = async () => {

  await deleteProduct(
    product._id,
    (response) => {
      console.log(response.data);
      toast.success('producto eliminado con éxito');
      
    },
    (error) => {
      console.error(error);
      toast.error('Error eliminando el producto');
    }
  );
  
}


    return (
      <tr  className="datarow">
        {editable ? (
          <>
       <td className="numberTD"><input  className="inputChange inputValue"  type="number" defaultValue={product.id} disabled ></input></td>
      <td className="descripTD"><input className="inputChange inputMedium"  type="text" defaultValue={product.description} onChange={(e) => {
          setEditDescrip(e.target.value);
        }}></input></td>
      <td className="smallTD"><input className="inputChange inputValue" type="number" min="0"defaultValue={product.unitprice} onChange={(e)=>setEditUnitprice(e.target.value)}></input></td>
      <td className="smallTD "><select  className="selectStatus"  defaultValue= {product.state} required onChange={(e)=>setEditState(e.target.value)}>
              <option value="" disabled>Selecciona</option>
              <option className="aproved" value="Disponible">Disponible</option>
              <option className="denied" value="No disponible">No disponible</option>
            </select></td>
        </>
        ):(
          <>
          <td className="numberTD">{product.id}</td>
      <td className="descripTD">{product.description}</td>
      <td className="smallTD">$ {product.unitprice}</td>
      <td className="smallTD ">{product.state}</td> 
      </>
        )
        }
      
      <td className="smallTD">
                  <div className="editBtnContainer">
                  {editable? 
                  <>
                  <button type="submit" className="btnGeneral btnEdit"   onClick={() => updateProduct()}><i className="fas fa-save"></i>  </button> 
                  <button type="reset" className="btnGeneral btnDelete"  onClick={() => setEditable(!editable)}>  <i className="fas fa-trash-alt"></i></button>
                  </>
                  :(
                    <>
                    <button type="button" className="btnGeneral btnEdit"   onClick={() => setEditable(!editable)}> <i className="fas fa-edit"></i> </button>
                    <button type="reset" className="btnGeneral btnDelete" onClick={() => ToDeleteProduct()}>  <i className="fas fa-trash-alt"></i></button>
                  </>)}
                  </div>
                </td>
    </tr>
    
    )
}
    return (
      
        <div className="listSectionContainer divProducts">
          
        <table className="ListTable">
          <thead className="thead ">
            <tr>
              <th className="col_title ">ID Producto</th>
              <th className="col_title">Descripción</th>
              <th className="col_title ">Precio Unitario</th>
              <th className="col_title">Estado</th>
              <th className="col_title">Editar</th>
              
            </tr>
          </thead>
          <tbody>

          {listpr.map((productObj) => {
              return (
                <RowProduct  key={nanoid()} product= {productObj}/>
              );
            })}
      

          </tbody>
        </table>
      
        <ToastContainer rtl
       position="top-center"
       autoClose={2000}
       transition={Zoom}
       limit={1}
       />

      </div>

     
    )

    

 }


export default ProductTable;

