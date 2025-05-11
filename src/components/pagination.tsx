import React from 'react';
import { Link, useSearchParams } from 'react-router';

const Pagination: React.FC = () => {
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <Link to={`/?page=${currentPage - 1}`} className="prev">
          前へ
        </Link>
      )}
      <span className="current">Page {currentPage}</span>
      <Link to={`/?page=${currentPage + 1}`} className="next">
        次へ
      </Link>
    </div>
  );
};

export default Pagination;
