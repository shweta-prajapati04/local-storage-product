import React, { useState } from 'react'
import ProdctList from './ProdctList';

const Forms = () => {
    let [product, setProduct] = useState("");
    let [price, setPrice] = useState(0);
    let [imgUrl, setImageUrl] = useState("");
    let [description, setDescription] = useState("");
    let [validate, setValidate] = useState("");
    let [productlist,setProductList]=useState([])
    let ProductStore = JSON.parse(localStorage.getItem("Products")) || []

    // const handleChange = () => {
    //     const regEx =   /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/g
    //     if(!regEx.test(product)&& product!=="")
    //     alert("invalid")
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        let productlist = {
            product: product,
            price: price,
            image: imgUrl,
            description: description
        }
        ProductStore.push(productlist)
        localStorage.setItem("Products", JSON.stringify(ProductStore));
        window.location.reload();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}  >
                <h4 className='shadow p-3 mb-5 bg-primary rounded text-white' >Product </h4>
                <div className="col-md-6 mt-4">
                    <input required className='form-control' name="productname" type="text" placeholder='Product Name' value={product}
                        onChange={(e) => setProduct(e.target.value)}   ></input>

                </div>
                <div className="col-md-6 mt-4">
                    <input required className='form-control' name="price" type="number" placeholder='Price' value={price}
                        onChange={(e) => setPrice(e.target.value)}  ></input>

                </div>
                <div className="col-md-6 mt-4">
                    <input className='form-control' type="url" name="imgurl" placeholder='Image URL'
                     value={imgUrl}
                        onChange={(e) => setImageUrl(e.target.value)}  ></input>

                </div>
                <div className="col-md-6 mt-4">
                    <input required className='form-control' type="textarea" name="description" placeholder='Description' value={description}
                        onChange={(e) => setDescription(e.target.value)}  ></input>

                </div>
                <div className="col-md-6 mt-4">
                    <input className='btn btn-primary' type="submit" value="Add" />
                </div>

            </form>

            <ProdctList />

        </div>
    )
}

export default Forms