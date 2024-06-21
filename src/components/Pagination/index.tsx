import Pagination from "react-bootstrap";
import IPagination from "./interface";
import { useEffect } from "react";

function TablePagination(props: IPagination) {
const renderPaginationItems = () => {
    const items = [];
    const totalPages = props.nbOfPages || 1;
    const activePage = props.activePage || 1;

    if (totalPages <= 3) {
        // If there are 3 or fewer pages, display all of them
      for (let i = 1; i <= totalPages; i++) {
            items.push(
              <Pagination.Item
                key={i}
                active={i === activePage}
                onClick={() => props.onClick(i)}
              >
                {i}
              </Pagination.Item>
            );
        }
    } else {
        // Display a dynamic range of pages based on the active page
        let startPage, endPage;

        if (activePage === 1) {
            startPage = 1;
            endPage = Math.min(3, totalPages);
        } else if (activePage === totalPages) {
            startPage = Math.max(1, totalPages - 2);
            endPage = totalPages;
        } else {
            startPage = activePage - 1;
            endPage = Math.min(activePage + 1, totalPages);
        }

      for (let i = startPage; i <= endPage; i++) {
          
            items.push(
              <Pagination.Item
                key={i}
                active={i === activePage}
                onClick={() => props.onClick(props.nbOfPages)}
              >
                {i}
              </Pagination.Item>
            );
        }
    }

    return items;
};

    return (
      <div
        className="text-center d-block m-auto"
        style={{ width: "fit-content" }}
      >
        <Pagination>
          <Pagination.First
            onClick={() => props.onClick(1)}
            disabled={props.activePage === 1}
          />
          {renderPaginationItems()}
          <Pagination.Last
            onClick={() => props.onClick(props.nbOfPages)}
            disabled={props.activePage === props.nbOfPages}
          />
        </Pagination>
      </div>
    );
}

export default TablePagination;
