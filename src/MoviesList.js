
export default function MoviesList({movies}) {
    if (!movies || movies.length === 0) {
        return null;
    }

    return <div>
        <h2>Titles</h2>
        <ul>
            {movies.map(movie => <li key={movie.title}>{movie.title} ({movie.year})</li>)}
        </ul>
    </div>
}