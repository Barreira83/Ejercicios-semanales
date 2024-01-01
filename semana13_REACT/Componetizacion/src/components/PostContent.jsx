import PostComents from "./PostComents";
import PostCounter from "./PostCounter";
import PostDate from "./PostDate";
import PostIcons from "./PostIcons";

const PostContent= ({post}) =>{
    
return(
    <div className="content">    
    <PostComents coments={post.coments} />
    <PostIcons shares={post.shares}/>
        <div className="counter-date">
            <PostCounter counter={post.counterLikes}/>
            <PostDate date={post.date}/>
        </div>
    </div>
    )
}

export default PostContent;