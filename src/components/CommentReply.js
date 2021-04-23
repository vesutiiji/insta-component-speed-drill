const CommentReply = (props) => {
  return (
    <div>
      <div>
        {props.CommentReply.username}: {props.CommentReply.comment}
      </div>
      <div>Likes: {props.CommentReply.likes}</div>
    </div>
  );
};

export default CommentReply;
