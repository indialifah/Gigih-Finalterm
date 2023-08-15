const Comment = ({username, comment, timestamp}) => {
    return(
        <div className='comment-wrapper'>
            <p className='username'>{username}</p>
            <p className='comment'>{comment}</p>
            <p className='timestamp'>{new Date(timestamp).toLocaleString()}</p>
        </div>
    )
}

export default Comment