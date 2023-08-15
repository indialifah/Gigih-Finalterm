import Detail from '../pages/detail/Detail'

function DetailsRouter() {
    return(
        <div>
            <Detail/>
        </div>
    )
}

export default DetailsRouter

export async function loader({ params }) {
    
    const [videoResponse, commentResponse, productResponse] = await Promise.all([
        fetch('http://localhost:3000/video/' + params.video_id),
        fetch('http://localhost:3000/comment/' + params.video_id),
        fetch('http://localhost:3000/product/' + params.video_id)
    ])

    const [videoData, commentData, productData] = await Promise.all([
        videoResponse.json(),
        commentResponse.json(),
        productResponse.json(),
    ])

    return { video: videoData, comments: commentData, product: productData}
}