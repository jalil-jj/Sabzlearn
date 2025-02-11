import React, { useEffect, useState } from "react";

import "./Pagination.css";
import { Link, useParams } from "react-router-dom";

export default function Pagination({ items, itemCourse, pathname, setShowCourses }) {

  const [countPage, setCountPage] = useState(null)
  const { page } = useParams()

  useEffect(() => {
    let endIndex = itemCourse * page
    let startIndex = endIndex - itemCourse
    let paginatedItems = items.slice(startIndex, endIndex)
    setShowCourses(paginatedItems)

    let pageNumber = Math.ceil(items.length / itemCourse)
    setCountPage(pageNumber)
  }, [page, items])

  return (
    <div class="courses-pagination">
      <ul class="courses__pagination-list">

        {
          Array(countPage).fill(0).map((item, index) => (
            <li class="courses__pagination-item">
              {
                index + 1 === Number(page) ? (
                  <Link to={`${pathname}/${index + 1}`} class="courses__pagination-link courses__pagination-link--active">
                    {index + 1}
                  </Link>
                ) : (
                  <Link to={`${pathname}/${index + 1}`} class="courses__pagination-link">
                    {index + 1}
                  </Link>
                )
              }

            </li>
          ))
        }
      </ul>
    </div>
  );
}
