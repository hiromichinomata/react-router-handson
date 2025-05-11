import React from 'react';
import { useParams } from 'react-router';

type PostParams = {
  id: string;
};

function PostDetail() {
  const { id } = useParams<PostParams>();

  return (
    <div>
      <h2>記事詳細</h2>
      <p>記事ID: {id}</p>
    </div>
  );
}

export default PostDetail;
