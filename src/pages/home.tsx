import React from 'react';
import { useSearchParams } from 'react-router';
import Pagination from '../components/pagination';
import '../css/home.css';

const Home: React.FC = () => {
  // クエリパラメータからページ番号を取得（ルートパラメータの代わりに利用）
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get('page') || '1';

  return (
    <div className="home">
      <h2>ホームページへようこそ！</h2>
      <p>現在のページ: {currentPage}</p>
      
      <section className="latest-articles">
        <h3>最新記事</h3>
        <ul>
          <li>記事タイトル1</li>
          <li>記事タイトル2</li>
          <li>記事タイトル3</li>
        </ul>
      </section>
      
      <section className="popular-articles">
        <h3>人気記事</h3>
        <ul>
          <li>人気記事1</li>
          <li>人気記事2</li>
          <li>人気記事3</li>
        </ul>
      </section>
      
      {/* ページングコンポーネントの配置 */}
      <Pagination />
    </div>
  );
};

export default Home;
