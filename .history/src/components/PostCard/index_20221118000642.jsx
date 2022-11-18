

const PostCard = ({title, cover, body, id}) => {
  
  return (
    <div className="post" key={.id} >
      <img src={.cover} alt={.title} />
      <div className="-content">
        <h1>{.title}</h1>
        <p>{.body}</p>
      </div>
    </div>
  )
}

export default PostCard