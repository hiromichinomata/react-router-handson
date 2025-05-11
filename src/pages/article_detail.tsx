import React from 'react';
import { useParams, Link } from 'react-router';

interface Article {
  id: number;
  title: string;
  content: string;
}

const sampleArticles: Article[] = [
  { id: 1, title: '記事タイトル1', content: '記事詳細内容1...' },
  { id: 2, title: '記事タイトル2', content: '記事詳細内容2...' },
  { id: 3, title: '記事タイトル3', content: '記事詳細内容3...' },
];

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const articleId = parseInt(id || '', 10);
  const article = sampleArticles.find(a => a.id === articleId);

  // 記事が見つからない場合のエラーハンドリング
  if (!article) {
    return (
      <div>
        <h2>記事が見つかりません</h2>
        <p>指定された記事は存在しないか、URLが間違っています。</p>
        <Link to="/articles">記事一覧へ戻る</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
      <Link to="/articles">記事一覧へ戻る</Link>
    </div>
  );
};

export default ArticleDetail;
