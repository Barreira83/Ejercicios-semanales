import PostContent from "./PostContent";
import PostImage from "./PostImage";

const Post = ({post})=>{
    return(
    <article className="post">
        <PostImage img={post.img} name={post.name}/>
        <PostContent post={post}/>
    </article>
)}

export default Post;