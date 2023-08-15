import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

function Video({video_id, thumbnail}) {
    
    const getVideoIdFromUrl = (url) => {
        const realUrl = url.split('v=')[1]
        return realUrl
    }
    
    return(
        <div className='videos-wrapper'>
            <div className='items'>
                <div className='video-card'>
                    <Link to= {video_id}>
                    <img 
                        src={`https://img.youtube.com/vi/${getVideoIdFromUrl(thumbnail)}/0.jpg`}
                        width='100%'
                    />
                    <p className='title'></p>
                    <p className='shop'></p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

function VideoList() {
    
    const videos = useLoaderData()

    return(
        <div className='videolist-container'>
            {videos.map((video) => (
                <Video 
                    key={video.video_id}
                    video_id={video.video_id}
                    thumbnail={video.thumbnail}    
                />
            ))}
        </div> 
    )
}

export default VideoList
