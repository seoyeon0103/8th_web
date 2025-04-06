import axios from "axios";
import { useEffect,useState } from "react";
import { Movie, MovieResponse} from "../types/movie";
import MovieCard from "../components/MovieCard";

export default function MoviePage(){
    const [movies, setMovies] = useState<Movie[]>([]);
    
    const [isPending, setIsPending] = useState(false);
    const [isError, setIsError] = useState(false);
    
    useEffect((): void => {
        const fetchMovies = async () : Promise<void>=>{
            const{ data } = await axios.get<MovieResponse>(
                `https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1`,
                {
                    headers : {
                        Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
                    },
                }
            );

            setMovies(data.results);
        };
        fetchMovies();
    }, []);

    return(
        //반응형
        <div className='p-10 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
        lg:grid-cols-5 xl:grid-cols-6'>
            {movies?.map( movie => (
                <MovieCard key={movie.id} moive={movie}/>
            ))}
        </div>
    );
}  