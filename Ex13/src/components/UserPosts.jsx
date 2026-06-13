import { useEffect, useState } from 'react'

export default function UserPosts({ userId }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      const data = await response.json();

      setPosts(data);
    }

    fetchData();
  }, [userId])

  return (
    <div className="demo-box">
      <p className="label">User ID: {userId}</p>
        
      {posts.map((post) => (
          <div key={post.id} className="mini-card">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  )
}
