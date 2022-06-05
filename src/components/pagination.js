import Link from 'next/link';
import { BiFirstPage, BiLastPage, BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import styles from './pagination.module.css';

export const Pagination = ({ totalCount, maxPageNumber, currentPageNumber }) => {
  maxPageNumber = Number(maxPageNumber);
  currentPageNumber = Number(currentPageNumber);
  const prevPage = currentPageNumber - 1;
  const nextPage = currentPageNumber + 1;
  const PER_PAGE = 5;

  const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);
  return (
    <div className={styles.paginationContainer}>
      <div className={styles.pagination}>
        <ul className={styles.paginationList}>
          {currentPageNumber !== 1 && (
            <>
              <li className={styles.paginationArrow}>
                <Link href={`/blog/page/1`}>
                  <a>
                    <BiFirstPage className={styles.pageNumber} size={30} />
                  </a>
                </Link>
              </li>
              <li className={styles.paginationArrow}>
                <Link href={`/blog/page/${prevPage}`}>
                  <a>
                    <BiChevronLeft className={styles.pageNumber} size={30} />
                  </a>
                </Link>
              </li>
            </>
          )}
          {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => {
            if (currentPageNumber === number) {
              return (
                <li key={index} className={styles.currentPaginationItem}>
                  <Link href={`/blog/page/${number}`}>
                    <a className={styles.pageNumber}>{number}</a>
                  </Link>
                </li>
              );
            } else {
              return (
                <li key={index} className={styles.paginationItem}>
                  <Link href={`/blog/page/${number}`}>
                    <a className={styles.pageNumber}>{number}</a>
                  </Link>
                </li>
              );
            }
          })}
          {currentPageNumber !== maxPageNumber && (
            <>
              <li className={styles.paginationArrow}>
                <Link href={`/blog/page/${nextPage}`}>
                  <a>
                    <BiChevronRight className={styles.pageNumber} size={30} />
                  </a>
                </Link>
              </li>
              <li className={styles.paginationArrow}>
                <Link href={`/blog/page/${maxPageNumber}`}>
                  <a>
                    <BiLastPage className={styles.pageNumber} size={30} />
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
