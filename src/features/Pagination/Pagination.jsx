import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useState } from "react";

import {
  onClickCurrentPage,
  onNavigateNext,
  onNavigatePrev,
} from "../../features/List/listSlice";
import PaginationButton from "../../ui/PaginationButton/PaginationButton";

function Pagination({ pages, currentPage, totalPages }) {
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const dispatch = useDispatch();

  function navigatePrev() {
    if (currentPage !== 1) {
      dispatch(onNavigatePrev());
      if ((currentPage - 1) % pageNumberLimit == 0) {
        if (currentPage === totalPages) return;
        setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }
    }
  }
  function navigateNext() {
    if (currentPage !== totalPages) {
      dispatch(onNavigateNext());
    }
    if (currentPage + 1 > maxPageNumberLimit) {
      if (currentPage === totalPages) return;
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  }
  function handleCurrentPage(p) {
    dispatch(onClickCurrentPage(p));
  }

  return (
    <>
      <div className="mb-4 text-center font-semibold text-gray-500">
        <span>
          Page {currentPage} of {totalPages}
        </span>
      </div>
      <div className="flex justify-center items-center mb-12 gap-1">
        <PaginationButton onClick={navigatePrev} direction="mr">
          <BsChevronLeft size="1.5em" className="inline" />
        </PaginationButton>

        {pages.map((p) => {
          if (p < maxPageNumberLimit + 1 && p > minPageNumberLimit) {
            return (
              <span
                key={p}
                onClick={() => handleCurrentPage.call(null, p)}
                className={`${
                  p === currentPage ? "bg-indigo-500 text-white" : ""
                } relative inline-flex items-center px-4 py-[8.5px] text-sm font-semibold text-gray-900 ring-1  ring-gray-300 hover:bg-indigo-500 hover:text-white focus:z-20 focus:outline-offset-0 cursor-pointer transition-all`}
              >
                {p}
              </span>
            );
          } else {
            return null;
          }
        })}
        <PaginationButton onClick={navigateNext} direction="ml">
          <BsChevronRight size="1.5em" className="inline" />
        </PaginationButton>
      </div>
    </>
  );
}

export default Pagination;
