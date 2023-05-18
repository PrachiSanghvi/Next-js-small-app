import { comments } from "../../../data/comments";

export default function handler(req, res) {
  debugger;
  const { commentId } = req.query;
  if (req.method === 'GET') {
    const comment = comments.find(com => com.id === parseInt(commentId))
    res.status(200).json(comment)
  } else if(req.method === 'DELETE') {
    debugger;
    const deletedComment = comments.find(com => com.id === parseInt(commentId))
    console.log("deletedComment",deletedComment);
    const deletedCommentIndex = comments.findIndex(com => com.id === parseInt(commentId)) 
    comments.splice(deletedCommentIndex,1);
    res.status(200).json(deletedComment)
  }
}