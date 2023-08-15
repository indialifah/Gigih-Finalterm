import React from 'react'
import Product from './Product'

const ProductList=()=> {

    const data = useLoaderData()
    const products = data.product

    return(
        <div className='product-list'>
            {product.length === 0 ? (
                <p> Tidak ada produk </p>
            ) : (
                products.map((product, index) => (
                    <Product 
                        key={index} 
                        title={product.title}
                        price={product.price}
                    />
                ))
            )}
        </div>
    )
}

export default ProductList