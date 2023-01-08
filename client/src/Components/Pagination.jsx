import { Link } from "@mui/material";
import React from "react";
import "./pagination.css";
import { useState, useEffect } from "react";

const Pagination = ({ showPerPage, onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  }, [counter]);
  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (Math.ceil(total / showPerPage) === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };
  return (
    <div className=" container d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <Link
              className="page-link"
              to="!#"
              aria-label="Previous"
              onClick={() => {
                onButtonClick("prev");
              }}
            >
              <span aria-hidden="true">&laquo;</span>
            </Link>
          </li>

          {new Array(Math.ceil(total / showPerPage))
            .fill("")
            .map((item, index) => (
              <li
                key={index}
                className={`page-item ${
                  index + 1 === counter ? "active" : "null"
                }`}
                onClick={() => {
                  setCounter(index + 1);
                }}
              >
                <Link className="page-link" to="!#">
                  {index + 1}
                </Link>
              </li>
            ))}

          <li className="page-item">
            <Link
              className="page-link"
              to="!#"
              aria-label="Next"
              onClick={() => {
                onButtonClick("next");
              }}
            >
              <span aria-hidden="true">&raquo;</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
