import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  

    // Handle the case where movies might be null or not an array
    const hasMovies = Array.isArray(movies) && movies.length > 0;

    return (
        <div className="p-4">
              <h1 className=" text-2xl ml-4 md:text-3xl font-bold text-white pr-4">{title}</h1>

            <div className="flex overflow-x-scroll p-6">
              
                <div className="flex">
                    {hasMovies ? (
                        movies.map((movie) => (
                            <MovieCard
                                key={movie.id} // Use a unique identifier from the movie object
                                posterPath={movie.poster_path}
                            />
                        ))
                    ) : (
                        <p>No movies available.</p> // Fallback when there are no movies
                    )}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
