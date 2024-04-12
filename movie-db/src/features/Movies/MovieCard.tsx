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
      <Link to={`/movies/:${id}`}>
        <h1 className="movies-card__title">Title: {title}</h1>
      </Link>
      <h3>Genre: {genre}</h3>
      <h3 className="movies-card__popularity">Popularity: {popularity}</h3>
      <p className="movies-card__overview">Overview: {overview}</p>
    </div>
  );
}

export default MovieCard;
