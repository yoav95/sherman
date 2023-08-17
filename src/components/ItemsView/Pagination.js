import styles from "./Pagination.module.css";
const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const reversedPageNumbers = pageNumbers.slice().reverse();
  const handlePaginate = (ev) => {
    ev.preventDefault();
    paginate(Number(ev.target.innerText));
  };
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {reversedPageNumbers.map((number) => (
          <li key={number}>
            <a
              onClick={handlePaginate}
              className={
                currentPage === number
                  ? `${styles.number} ${styles.active}`
                  : styles.number
              }
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination;
