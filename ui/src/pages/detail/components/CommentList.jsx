import { useParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
import Comment from './Comment'
import CommentForm from './CommentForm'

function CommentList() {

    const {video_id} = useParams()
    const data = useLoaderData()
    const comments = data.comments

    return (
        <div className='comment-wrapper'>
            <div className='comment-list'>
                {comments.length === 0 ? (
                    <p> Belum ada komentar </p>
                ) : (
                    comments.map((comment, index) => (
                        <Comment
                            key={index}
                            username={comment.username}
                            comment={comment.comment}
                            timestamp={comment.timestamp}
                        />
                    ))
                )}
            </div>
            <CommentForm video_id={video_id}/>
        </div>
    )
}

export default CommentList