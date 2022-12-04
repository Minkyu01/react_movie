import PropTypes from "prop-types";
import styles from "../css/Movie.module.css";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className={styles.movie_box}>
      <img src={coverImg} alt={title} />
      <div className={styles.movie_box_description}>
        <h2>
          <Link className={styles.title} to={`/movie${id}`}>
            {title}
          </Link>
        </h2>
        <p>{summary.length > 250 ? `${summary.slice(1, 250)}...` : summary}</p>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  geners: PropTypes.arrayOf(PropTypes.string),
};

export default Movie;
