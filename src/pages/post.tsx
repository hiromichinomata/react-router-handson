import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';

interface Post {
  id: number;
  title: string;
  body: string;
}

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    // ダミーAPIエンドポイントを使用
    fetch('https://dummyjson.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('ネットワークエラー');
        }
        return response.json();
      })
      .then((data: Post[]) => {
        setPosts(data["posts"]);
        setLoading(false);
      })
      .catch((err) => {
        setError('データの取得に失敗しました');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>読み込み中...</p>;
  if (error) return <p>{error}</p>;


  return (
    <div>
      <h2>投稿一覧</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 100)}...</p>
            <Link to={`/posts/${post.id}`}>続きを読む</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
