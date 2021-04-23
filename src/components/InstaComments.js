import Comment from "./Comment";
import CommentReply from "./CommentReply";

const InstaComments = (props) => {
  return (
    <div>
      <Comment UserComments={props.UserComments[0]} />
      <CommentReply CommentReply={props.CommentReply[1]} />
      <Comment UserComments={props.UserComments[1]} />
      <CommentReply CommentReply={props.CommentReply[0]} />
      <CommentReply CommentReply={props.CommentReply[2]} />
      <Comment UserComments={props.UserComments[2]} />
    </div>
  );
};

export default InstaComments;
