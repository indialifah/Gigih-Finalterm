const Product = ({title, price}) => {
    return(
        <div className='product-wrapper'>
            <img 
                src="" 
                alt="" 
                className=""
            />
            <p className='product-title'>{title}</p>
            <p className='product-price'>{price}</p>
        </div>
    )
}

export default Product