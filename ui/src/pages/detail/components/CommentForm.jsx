import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdMessage } from 'react-icons/md'

const CommentForm = ({video_id}) => {
    
    const navigate =  useNavigate()

    const [newComment, setNewComment] = useState({
        username: '',
        comment: ''
    })

    const handleInputChange = (event) => {
        const {name, value} = event.target
        setNewComment((prevComment) => ({
            ...prevComment,
            [name]: value
        }))
    }

    const handleAddComment = async() => {
        try {
            const response = await fetch('http://localhost:3000/comment/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: newComment.username,
                    comment: newComment.comment,
                    video_id: video_id
                })
            })

            if (response.ok) {
                setNewComment({
                    username: '',
                    comment: ''
                })
                navigate(`/${video_id}`)
            } else {
                console.error('Gagal menambahkan komentar')
            }
        } catch (error) {
            console.log('Error', error);
        }
    }

    return (
        <div className='commentform-wrapper'>
            <h3><MdMessage/>Tulis Komentar</h3>
            <div>
                <input 
                    type='text' 
                    id='username'
                    name='username'
                    value={newComment.username}
                    onChange={handleInputChange}
                    placeholder='username'
                />
            </div>
            <div>
                <textarea 
                    id="comment"
                    name='comment'
                    onChange={handleInputChange}
                    placeholder='comment' 
                />
            </div>
            <button onClick={{handleAddComment}}>
                Kirim Komentar
            </button>
        </div>

    )
}

export default CommentForm