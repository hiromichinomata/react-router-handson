import React, { createContext, useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostsContextValue {
  posts: Post[];
  refreshPosts: () => void;
}

export const PostsContext = createContext<PostsContextValue>({
  posts: [],
  refreshPosts: () => {},
});

export const PostsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://example.com/api/posts');
      if (!response.ok) throw new Error('ネットワークエラー');
      const data: Post[] = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('投稿の取得に失敗:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const refreshPosts = () => {
    fetchPosts();
  };

  return (
    <PostsContext.Provider value={{ posts, refreshPosts }}>
      {children}
    </PostsContext.Provider>
  );
};