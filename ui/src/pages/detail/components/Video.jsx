import ReactPlayer from 'react-player'
import { useLoaderData } from 'react-router-dom'

function VideoPlay() {

    const data = useLoaderData()
    const video = data.video[0]
    const url = video.thumbnail

    return (
        <div className='video-wrapper'>
            {video ? (
                <>
                    <ReactPlayer
                        url = {url}
                        playing = {true}
                        width = {800}
                        height = {450}
                    />
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default VideoPlay