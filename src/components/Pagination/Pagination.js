import React, { useMemo, useState } from "react";

const Pagination = ({ items, perPage, onClick }) => {
  const [page, setPage] = useState(1);
  const pageNumbers = useMemo(() => {
    return Array.from(
      { length: Math.ceil(items.length / perPage) },
      (_, i) => i + 1
    );
  }, [items, perPage]);

  return (
    <div id="myDIV" className="shop__nextButton">
      {page > 1 && (
        <button
          onClick={() => setPage(page - 1)}
          className="shop__nextButton-btn"
        >
          prev
        </button>
      )}

      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`shop__nextButton-btn ${number === page && "active"}`}
          onClick={() => setPage(number)}
        >
          {number}
        </button>
      ))}

      {page < pageNumbers.length && (
        <button
          onClick={() => setPage(page + 1)}
          className="shop__nextButton-btn"
        >
          next
        </button>
      )}
    </div>
  );
};

export default Pagination;
