import { useState } from "react";
// import styles from '../../styles/Comments.module.css'
import styles from '../../styles/Comments.module.scss'

function CommentsPage() {
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState('')
  const loadComments = async () => {
    const response = await fetch('/api/comments');
    const data = await response.json()
    setComments(data)
  }

  const submitComment = async () => {
    const response = await fetch('/api/comments',
      {
        method: 'POST',
        body: JSON.stringify({ comment }),
        headers: {
          'Content-type': 'application/json',
        },
      })
    const data = await response.json();
    console.log("data", data);
  }

  const deleteComment = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`,
      {
        method: 'DELETE',
      })
    const data = await response.json()
    console.log(data);
    loadComments()
  }
  return (
    <>
      <input type="text" onChange={(e) => setComment(e.target.value)} />
      {/* Bootstrap css */}
      <button className="btn btn-primary" onClick={submitComment}>Submit Comment</button>
      <button className="btn btn-success" onClick={loadComments}>Load Comments</button>
      {
        comments.map(comment => {
          return (
            // Componemt level style - Scss- Sass
            <div key={comment.id} className={styles.highlightScss}>
              <h2 key={comment.id}>{comment.id} - {comment.text}</h2>
              <button onClick={() => deleteComment(comment.id)}>Delete Comment</button>
            </div>
          )
        })
      }
    </>
  )
}

export default CommentsPage