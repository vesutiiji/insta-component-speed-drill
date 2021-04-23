import InstaLikes from "./InstaLikes";
import InstaHeader from "./InstaHeader";

const InstaImage = (props) => {
  return (
    <div>
      <InstaHeader MainUser={props.MainUser} />
      <InstaLikes />
    </div>
  );
};

export default InstaImage;
