import { Action, Reducer } from "redux";

export interface Movie {
  id: number;
  genre: string;
  title: string;
  popularity: number;
  overview: string;
}

interface MovieState {
  top: Movie[];
}

const initialState: MovieState = {
  top: [
    {
      id: 1,
      genre: "Drama",
      title: "Inception",
      popularity: 98,
      overview: "Dreams...",
    },
    {
      id: 2,
      genre: "Drama",
      title: "The Godfather",
      popularity: 99,
      overview: "Godfather...",
    },
    {
      id: 3,
      genre: "Drama",
      title: "The Dark Knight",
      popularity: 96.5,
      overview: "Batman...",
    },
    {
      id: 4,
      genre: "Drama",
      title: "The Godfather Part II",
      popularity: 96,
      overview: "Part II...",
    },
  ],
};

const moviesReducer: Reducer<MovieState, Action> = (state, action) => {
  return initialState;
};

export default moviesReducer;
