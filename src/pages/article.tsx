import React from 'react';
import { Link } from 'react-router';

interface Article {
  id: number;
  title: string;
  summary: string;
}

const sampleArticles: Article[] = [
  { id: 1, title: '記事タイトル1', summary: '記事の概要1...' },
  { id: 2, title: '記事タイトル2', summary: '記事の概要2...' },
  { id: 3, title: '記事タイトル3', summary: '記事の概要3...' },
];

const Articles: React.FC = () => {
  return (
    <div>
      <h2>記事一覧</h2>
      <ul>
        {sampleArticles.map(article => (
          <li key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.summary}</p>
            <Link to={`/articles/${article.id}`}>続きを読む</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
