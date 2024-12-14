import { useEffect, useState } from "react";
import { getPosts } from "../services/apiPosts";

function MessageCard() {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!posts || posts.length === 0) {
    return <div>No posts available.</div>;
  }
  return (
    <div>
      <ul>
        {posts.posts.map((post) => (
          <li key={post._id}>
            <strong>{post.title}</strong>: {post.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MessageCard;
