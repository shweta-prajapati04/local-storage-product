import React, { useEffect, useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Table } from 'react-bootstrap';
import '../App.css'

const ProdctList = () => {
    const [show, setShow] = useState(false)
    const handleOpen = () => { setShow(true) }
    const handleClose = () => { setShow(false) }
    useEffect(() => {
        handleClose();
        if (show)
            handleOpen();
        setUpdate();

    }, []);
    let Product = JSON.parse(localStorage.getItem("Products")) || []

    let [product, setProduct] = useState("");
    let [price, setPrice] = useState(0);
    let [imgUrl, setImageUrl] = useState("");
    let [description, setDescription] = useState("");
    let [pid, setPid] = useState(-1)

    const handleUpdate = (id) => {
        handleOpen();
        setPid(id)
        setProduct(Product[id].product);
        setPrice(Product[id].price);
        setDescription(Product[id].description);
        setImageUrl(Product[id].image);


    }
    const handleDelete = (id) => {
        Product.splice(id, 1);
        localStorage.setItem("Products", JSON.stringify(Product));
        window.location.reload();

    }
    const setUpdate = () => {
        if (pid >= 0) {
            Product[pid].product = product;
            Product[pid].price = price
            Product[pid].image = imgUrl
            Product[pid].description = description
            localStorage.setItem("Products", JSON.stringify(Product));
           // window.location.reload();

        }

    }
    return (
        <>
            <div >
                <Table responsive="sm" >

                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>
                                Product
                            </th>
                            <th>
                                Price (&#x20B9;)
                            </th>
                            <th>
                                Description
                            </th><th></th>
                        </tr>
                    </thead>

                    {
                        Product.length > 0 && Product.map((item, index) => {
                            return (

                                <tr >
                                    <td>
                                        <img ClassName='img-thumbnail' src={item.image} height="50px"
                                            width="50px" alt="img" />
                                    </td>
                                    <td>

                                        {item.product}
                                    </td>
                                    <td>
                                        {item.price}
                                    </td>
                                    <td>
                                        {item.description}
                                    </td>
                                    <td>
                                        <button className="btn btn-outline-success" onClick={() => handleUpdate(index)}>
                                            Update
                                        </button>
                                        <button className="btn btn-danger" onClick={() => handleDelete(index)}>
                                            Delete
                                        </button>
                                    </td>

                                </tr>
                            )
                        })
                    }

                </Table>
            </div>
            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Product</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                   {/*} <div style={{display: pid >= 0 ? 'block' : 'none'}} className="alert alert-success" role="alert">
                    Updated successfully
                </div>*/
                   }
                <div className="col-md-12 mt-1 text-center">
                    <img ClassName='rounded-3' src={imgUrl} width="150px" alt="img" />
                </div>
                <div className="col-md-12 mt-4">
                    <input required className='form-control' name="productname" type="text" placeholder='Product Name' value={product}
                        onChange={(e) => setProduct(e.target.value)}   ></input>

                </div>
                <div className="col-md-12 mt-4">
                    <input required className='form-control' name="price" type="number" placeholder='Price' value={price}
                        onChange={(e) => setPrice(e.target.value)}  ></input>

                </div>
                <div className="col-md-12 mt-4">
                    <input className='form-control' type="url" name="imgurl" placeholder='Image URL' value={imgUrl}
                        onChange={(e) => setImageUrl(e.target.value)}  ></input>


                </div>
                <div className="col-md-12 mt-4">
                    <input required className='form-control' type="textarea" name="description" placeholder='Description' value={description}
                        onChange={(e) => setDescription(e.target.value)}  ></input>

                </div>
                <div className="col-md-12 mt-4 text-center">
                    <input className='btn btn-primary' onClick={setUpdate()} type="submit" value="update" />
                </div>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal >
        </>
    )
}

export default ProdctList