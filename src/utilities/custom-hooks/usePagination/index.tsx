import { useState } from "react";

const usePagination = () => {
  const [pagination, setPagination] = useState<{
    activePage?: number;
    // prevPage?: number;
    // nextPage?: number;
    // firstPage?: number;
    lastPage?: number;
    onClick?: (pageNumber: number) => void;
  }>({});

  const setPaginationState = (
    activePage: number = 1,
    // prevPage: number,
    // nextPage: number,
    // firstPage: number,
    lastPage: number,
    onClick: (pageNumber: number) => void
  ) => {
    setPagination({
      activePage,
      // prevPage,
      // nextPage,
      // firstPage,
      lastPage,
      onClick,
    });
  };

  return { ...pagination, setPagination: setPaginationState };
};

export default usePagination;
