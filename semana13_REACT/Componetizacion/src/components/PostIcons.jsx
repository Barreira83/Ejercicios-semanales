const PostIcons = ({ shares }) => {
  const { like, favorite } = shares;

  let likeIcon = "./like_false.png";
  if (like) {
    likeIcon = "./like_true.png";
  }

  let favIcon = "./fav_false.png";
  if (favorite) {
    favIcon = "./fav_true.png";
  }

  return (
    <div className="icons">
      <img src={likeIcon} alt="Like" />
      <img src={favIcon} alt="Favorito" />
    </div>
  );
};

export default PostIcons;
