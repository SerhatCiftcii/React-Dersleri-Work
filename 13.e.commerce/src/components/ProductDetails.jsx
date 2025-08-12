import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';
import { CiCirclePlus } from "react-icons/ci"
import { CiCircleMinus } from "react-icons/ci"
import { addToBasket } from '../redux/slices/basketSlice';


function ProductDetails() {

    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product)
    const dispatch = useDispatch();
    const [count, setCount] = useState(0);

    const addBasket = () => {
        const payload = {
            id,
            price,
            image,
            title,
            description,
            count
        }
        dispatch(addToBasket(payload))
    }
    const increament = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count + -1)
    }



    const { price, image, title, description } = selectedProduct;

    useEffect(() => {
        getProductById();
    }, [])
    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product));
            }
        })
    }
    return (
        <div className='flex-row'>
            <div style={{ marginRight: '20px' }}>
                <img style={{ marginTop: '30px' }} src={image} width={300} height={500} alt="" />
            </div>
            <div>
                <h2>{title} </h2>
                <h3>{description}</h3>
                <h1>{price}</h1>
                <div style={{ display: 'flex', }}>
                    <CiCirclePlus style={{ fontSize: '40px' }} onClick={increament} /> <span style={{ fontSize: '35px' }}> {count}</span> <CiCircleMinus onClick={decrement} style={{ fontSize: '40px' }} />
                </div>
                <div>
                    <button onClick={addBasket}
                        style={{ marginTop: '20px', backgroundColor: 'orange' }}>
                        Sepete Ekle
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ProductDetails