const PostComents = ({ coments }) => {
  return (
    <div className="coments">      
      {coments.map((item) => <p key={item.id}>{item.text}</p>)}
    </div>
  );
};

export default PostComents;
