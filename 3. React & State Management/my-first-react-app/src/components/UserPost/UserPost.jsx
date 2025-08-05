import s from './UserPost.module.css';
const UserPost = () => {
  const posts = [
    { id: 1, title: 'Перший пост', text: ' Це текст першого поста' },
    {id: 2, title: 'Другий пост', text: ' Це текст першого поста'}, 
  ]
  
  if (!posts || posts.length === 0) {
    return <p className={s.titlePost}>Постів ще немає</p>
  }
  return (
    <ul className={s.postList}>
      {posts.map(post => (
        <li className={s.postItem} key={post.id}>{post.title}: {post.text}</li>
      ))}

    </ul>
  )
}
export default UserPost;