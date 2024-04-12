import { Link } from "react-router-dom";
import { Movie } from "../../reducers/movies";

import styles from "./MovieCard.module.scss";

interface MovieCardProps {
  id: number;
  title: string;
  genre: string;
  popularity: number;
  overview: string;
}

function MovieCard({ id, title, genre, popularity, overview }: MovieCardProps) {
  return (
    <div className={styles.card}>
      <img
        className={styles.img_template}
        src="/Movie-Poster.jpg"
        alt="movie template"
      />
      <div className={styles.description}>
        <Link to={`/movies/:${id}`}>Title: {title}</Link>
        <h3>Genre: {genre}</h3>
        <h3 className={styles.popularity}>Popularity: {popularity}</h3>
        <p className={styles.overview}>Overview: {overview}</p>
      </div>
    </div>
  );
}

export default MovieCard;
