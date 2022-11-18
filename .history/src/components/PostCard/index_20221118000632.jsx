

const PostCard = ({title, cover, body, id}) => {
  
  return (
    <div className="post" key={post.id} >
      <img src={post.cover} alt={post.title} />
      <div className="post-content">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  )
}

export default PostCard