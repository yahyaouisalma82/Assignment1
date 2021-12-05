 
const postList = ({ posts  }) => {
  
  const userposts=posts.filter(post=>(post.userId===1 && post.id%10 in [6,7,8,9,0]));
  return (
    <div className="post-list">
      <h3>Hope you like my posts !</h3>
      {userposts.map(post => (
        <div className="preview" key={post.id} >

          <div >
            <h2>{post.title}</h2>
            <p>body: {post.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default postList;