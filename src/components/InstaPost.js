import InstaImage from "./InstaImage";
import InstaComments from "./InstaComments";

const InstaPost = (props) => {
  return (
    <div>
      <InstaImage MainUser={props.MainUser} />
      <InstaComments
        UserComments={props.UserComments}
        CommentReply={props.CommentReply}
      />
    </div>
  );
};

export default InstaPost;
