const Comment = (props) => {
  return (
    <div>
      <div>
        {props.UserComments.username}: {props.UserComments.comment}
        <div>Likes: {props.UserComments.likes}</div>
      </div>
    </div>
  );
};

export default Comment;
