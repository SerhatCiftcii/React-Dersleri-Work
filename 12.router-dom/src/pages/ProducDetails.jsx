import React, { use } from 'react'
import { products } from '../data/products'
import Product from '../component/Product';
import { useParams } from 'react-router-dom'
function ProducDetails() {
    const { id } = useParams();

    return (
        <div>
            <div>ÜrünDetay</div>
            <hr />
            <div>
                {
                    products && products.map((product) => {
                        if (product.id == id) {
                            return <Product product={product} />
                        }
                    })
                }
            </div>
        </div>
    )
}

export default ProducDetails

