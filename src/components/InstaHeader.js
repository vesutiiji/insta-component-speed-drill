const InstaHeader = (props) => {
  return (
    <div>
      <div>{props.MainUser.username}</div>
      <div>{props.MainUser.location}</div>
      <img src={props.MainUser.image} />
    </div>
  );
};

export default InstaHeader;
