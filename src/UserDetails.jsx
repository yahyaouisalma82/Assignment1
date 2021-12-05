import PostList from "./PostList";
import useFetch from "./useFetch";

const UserDetails = ( ) => { 
    const {data:posts}=useFetch('http://localhost:8000/posts');
   // const myposts=posts.filter('userID'===id);
  //  console.log(myposts);
    return (
        <div className="preview"> 
            {posts && <PostList posts={posts}/>}
        </div>
      );
}
 
export default UserDetails;