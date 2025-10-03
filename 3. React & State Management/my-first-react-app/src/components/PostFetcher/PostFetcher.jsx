import { useEffect, useState } from "react";
import s from "./PostFetch.module.css";

function PostFetcher() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ctrl = new AbortController();

    const fetchPosts = async () => {
      setLoading(true);

      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts",
          { signal: ctrl.signal }
        )
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setPosts(Array.isArray(data) ? data : []);
        setPosts(data);
      } catch (error) {
        if (error.name !== "AbortError")
          console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
    return () => ctrl.abort();
  }, []);

 
  return (
    <>
    
    {loading && <p>Loading...</p>}
{!loading && posts.length === 0 && <p>Немає постів</p>}
{!loading && posts.length > 0 && (
  <ul className={s.posts}>
    {posts.map(p => (
      <li className={s.listItem} key={p.id}>
        <h3 className={s.title}>{p.title}</h3>
        <p className={s.author}><b>Author:</b> {p.userId}</p>
        <p className={s.body}>{p.body}</p>
      </li>
    ))}
  </ul>
)}
    </>
  
  );
}

export default PostFetcher;