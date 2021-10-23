
import { nanoid } from 'nanoid'
import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import { updateProductInfo, deleteProduct } from 'utils/Api-connection';
import { Dialog, Tooltip } from '@material-ui/core';

import { obtainProducts, obtainProductById, obtainProductByDescrip } from 'utils/Api-connection';

const ProductTable = () => {


  const RowProduct = ({ product, setReload }) => {

    const [editable, setEditable] = useState(false);
    const [editState, setEditState] = useState(product.state);
    const [editUnitprice, setEditUnitprice] = useState(product.unitprice);
    const [editDescrip, setEditDescrip] = useState(product.description);
    const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);
    const [confirmUpdateDialog, setConfirmUpdateDialog] = useState(false);






    const updateProduct = async () => {
      console.log("id: ", product.id);
      console.log("_id: ", product._id);
      console.log("state", editState);
      console.log("desc", editDescrip.toLowerCase());
      console.log("unitpr", editUnitprice);


      setConfirmUpdateDialog(false);



      await updateProductInfo(

        product._id,
        {
          "description": editDescrip.toLowerCase(),
          "unitprice": editUnitprice,
          "state": editState
        },
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
      setReload(true);
    };



    const ToDeleteProduct = async () => {
      setConfirmDeleteDialog(false);
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
      setReload(true);
    }

    return (
      <tr className="datarow">
        {editable ? (
          <>
            <td className="numberTD"><label  >{product.id}</label></td>
            {/*<td className="numberTD"><input  className="inputChange inputValue"  type="number" defaultValue={product.id} disabled  ></input></td>*/}
            <td className="descripTD"><input className="inputChange inputMedium " type="text" maxlength="200" defaultValue={product.description} onChange={(e) => {
              setEditDescrip(e.target.value);
            }}></input></td>
            <td className="smallTD"><input className="inputChange inputValue" type="number" min="0" defaultValue={product.unitprice} onChange={(e) => setEditUnitprice(e.target.value)}></input></td>
            <td className="smallLargeTD "><select className="selectStatus" defaultValue={product.state} required onChange={(e) => setEditState(e.target.value)}>
              <option value="" disabled>Selecciona</option>
              <option className="aproved" value="Disponible">Disponible</option>
              <option className="denied" value="No disponible">No disponible</option>
            </select></td>
          </>
        ) : (
          <>
            <td className="numberTD">{product.id}</td>
            <td className="descripTD"><p className="pRowLarge">{product.description}</p></td>
            <td className="smallTD">$ {product.unitprice}</td>
            <td className="smallTD ">{product.state}</td>
          </>
        )
        }

        <td className="smallTD">
          <div className="editBtnContainer">
            {editable ?
              <>
                <Tooltip title='GUARDAR' arrow placement="left" >
                  <button type="submit" className="btnGeneral btnEdit" onClick={() => setConfirmUpdateDialog(true)}><i className="fas fa-save"></i>  </button></Tooltip>
                <Tooltip title='Cancelar' arrow placement="right">
                  <button type="reset" className="btnGeneral btnDelete" onClick={() => setEditable(!editable)}>  <i class="fas fa-ban"></i></button></Tooltip>

              </>
              : (
                <><Tooltip title='Editar' arrow placement="left">
                  <button type="button" className="btnGeneral btnEdit" onClick={() => setEditable(!editable)}> <i className="fas fa-edit"></i> </button></Tooltip>
                  <Tooltip title='Eliminar' arrow placement="right">
                    <button type="reset" className="btnGeneral btnDelete" onClick={() => setConfirmDeleteDialog(true)}>  <i className="fas fa-trash-alt"></i></button></Tooltip>
                </>
              )}



            <Dialog open={confirmUpdateDialog}>
              <div className="dialogUpdate">

                <h5>Actualización del producto:</h5>

                <div className="infoUpdateDiv">
                  <p align="center"> ID: {product.id}      --    Estado: {editState}</p>
                  <p className="pLarge" align="center">Descripción: {editDescrip}</p>
                  <p align="center"> Precio Unitario: {editUnitprice}   </p>

                </div>

                <div className="editBtnContainer2">
                  <button type="button" className="btnGeneral btnEdit" onClick={() => updateProduct()} >Si</button>
                  <button type="reset" className="btnGeneral btnDelete" onClick={() => setConfirmUpdateDialog(false)} >No</button>
                </div>

              </div>
            </Dialog>

            <Dialog open={confirmDeleteDialog}>
              <div className="dialogDelete">

                <h5>¿Está seguro de eliminar este producto?</h5>
                <p align="center">Id: {product.id}  </p>
                <p className="pLarge" align="center"> {product.description}  </p>

                <div className="editBtnContainer2">
                  <button type="button" className="btnGeneral btnEdit" onClick={() => ToDeleteProduct()} >Si</button>
                  <button type="reset" className="btnGeneral btnDelete" onClick={() => setConfirmDeleteDialog(false)} >No</button>
                </div>
              </div>
            </Dialog>
          </div>
        </td>
      </tr>

    )

  }


  /**Table fetch data  and search*/
  const [reload, setReload] = useState(false);

  useEffect(async () => {
    console.log(
      'Hola, soy un use effect que se ejecuta solo una vez cuando la pagina se renderiza, para cargar la lista de productos inicial'
    );
    await obtainProducts(
      (response) => {
        console.log('la respuesta que se recibio fue', response);
        console.log(response.data);
        setListProducts(response.data);
      },
      (error) => {
        console.error('Salio un error:', error);
      }
    );
    setReload(false);
  }, [reload]);

  const formSearchProduct = useRef(null);
  const [listProducts, setListProducts] = useState([]);

  const submitSearchForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(formSearchProduct.current);
    console.log(fd.id);
    const searchOpt = {};
    fd.forEach((value, key) => {
      searchOpt[key] = value;
    });
    const searchby = searchOpt.searchSelect;
    console.log("s: ", searchby);
    const info = searchOpt.toSearchInput;

    if (searchby == "searchbyid") {
      if (!Number(info)) {
        toast.error("digite un ID numérico", {
          position: "bottom-center"
        });
      } else {
        console.log("serachbyid");
        await obtainProductById(info,
          (response) => {
            console.log('la respuesta que se recibio fue', response);
            console.log(response.data);
            setListProducts(response.data);
          },
          (error) => {
            console.error('Salio un error:', error);
          }
        );
      }
    }
    else if (searchby == "searchbyDescrip") {
      console.log("serachbydescrip");
      await obtainProductByDescrip(info,
        (response) => {
          console.log('la respuesta que se recibio fue', response);
          console.log(response.data);
          setListProducts(response.data);
        },
        (error) => {
          console.error('Salio un error:', error);
        }
      );
    }
  }

  return (
    <>
      <div className="searchContainer  marg-l">
        <form ref={formSearchProduct} onSubmit={submitSearchForm} >
          <span>Buscar producto  por </span>
          <select name="searchSelect" className="selectRole" required >
            <option value="" disabled> Buscar por</option>
            <option value="searchbyid">ID Producto</option>
            <option value="searchbyDescrip">Descripción</option>
          </select>
          <input type="text" className="toSearchInput" name="toSearchInput" placeholder="Digita la info" required />

          <button type="submit" className="btnGeneral btnSearchUser marg-l"  >
            <i className="fas fa-search-plus"></i>Buscar</button>
        </form>
        <>
          <button className="btnGeneral btnBack" onClick={() => setReload(true)}><i className="fas fa-undo-alt"></i>Volver a tabla</button> </>
      </div>
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

            {listProducts.map((productObj) => {
              return (
                <RowProduct key={nanoid()} product={productObj} setReload={setReload} />
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

    </>
  )




}


export default ProductTable;

