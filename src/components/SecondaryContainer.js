import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {

    const movies = useSelector((store)=>store.movies);

    return(
        <div className="bg-black">
            <div className="mt-0 md:-mt-52  relative z-20">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Popular"} movies={movies.popularMovies}/>
            <MovieList title={"Top Rated"} movies={movies.topRated}/>
            <MovieList title={"Comedy"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Action"} movies={movies.popularMovies}/>
            </div>
        </div>
    );
};

export default SecondaryContainer;