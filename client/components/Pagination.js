import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";

const Pagination = ({ queryLoading, queryData, router, paginationPage }) => {
  const currentPage = Number(router.query.page || 1);

  let pagination = "";

  if (!queryLoading) {
    const dataCount = queryData[Object.keys(queryData)[0]];
    const pagesCount = Math.ceil(dataCount / 9);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    pagination = {
      pages,
      currentPage,
    };
  }
  return pagination ? (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <Link href={`${paginationPage}?page=${pagination.currentPage - 1}`}>
        <a
          className="pagination-previous"
          title="This is the first page"
          onClick={(e) => {
            pagination.currentPage <= 1 ? e.preventDefault() : null;
          }}
          disabled={pagination.currentPage <= 1}
        >
          Poprzednia
        </a>
      </Link>
      <Link href={`${paginationPage}?page=${pagination.currentPage + 1}`}>
        <a
          className="pagination-next"
          title="This is the last page"
          onClick={(e) => {
            pagination.currentPage >= pagination.pages.length
              ? e.preventDefault()
              : null;
          }}
          disabled={pagination.currentPage >= pagination.pages.length}
        >
          Następna
        </a>
      </Link>
      <ul className="pagination-list">
        {pagination.pages.map((page) => (
          <li key={page}>
            <Link href={`${paginationPage}?page=${page}`}>
              <a
                className={`pagination-link ${
                  page === pagination.currentPage ? "is-current" : ""
                }`}
                aria-label={`Page ${page}`}
                aria-current="page"
              >
                {page}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  ) : null;
};

export default withRouter(Pagination);
