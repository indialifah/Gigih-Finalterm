import React from 'react'
import CommentList from './components/CommentList'
import ProductList from './components/ProductList'
import VideoPlay from './components/Video'

const Detail=()=> {
    return(
        <div>
            <VideoPlay/>
            <ProductList/>
            <CommentList/>
        </div>
    )
}

export default Detail