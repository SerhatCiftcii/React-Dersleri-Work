import React from 'react'

function Product(props) {
    return (
        <div style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px", borderRadius: "8px" }}>
            <h3>Ürün Bilgileri</h3>
            <div><strong>İsim:</strong> {props.productName}</div>
            <div><strong>Fiyat:</strong> {props.price} TL</div>
        </div>
    )
}

export default Product
