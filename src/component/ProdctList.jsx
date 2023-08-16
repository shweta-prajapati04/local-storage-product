import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';

const ProdctList = () => {
    let Product = JSON.parse(localStorage.getItem("Products")) || []
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
                            </th>
                        </tr>
                    </thead>
                    
                        {
                            Product.length > 0 && Product.map((item) => {
                                return (

                                    <tr >
                                        <td>
                                            <img  className='img-thumbnail' src={item.image} height="50px" width="50px" alt="img" />
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
                                    </tr>
                                )
                            })
                        }
                    
                </Table>
            </div >

        </>
    )
}

export default ProdctList