import React, { useContext } from 'react';
import { AuthContext } from '../contexts/auth_context';

const Dashboard: React.FC = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <h2>ダッシュボード</h2>
      <p>ここは認証されたユーザー専用のページです。</p>
      <button onClick={logout}>ログアウト</button>
    </div>
  );
};

export default Dashboard;
