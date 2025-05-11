import React from 'react';
import { Link } from 'react-router';

const NotFound: React.FC = () => {
  return (
    <div>
      <h2>404 - ページが見つかりません</h2>
      <p>お探しのページは存在しないようです。</p>
      <Link to="/">ホームへ戻る</Link>
    </div>
  );
};

export default NotFound;
