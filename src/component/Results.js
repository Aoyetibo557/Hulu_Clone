import React, {useState, useEffect} from 'react'
import './Results.css';
import VideoCard from './VideoCard';
import axios from '../axios';
import FlipMove from 'react-flip-move';


function Results({ selectedOption }) {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(selectedOption);
            const data = await response.data.results;
            setMovies(data);
            console.log(data)
            return response;
        }

        fetchData();
    }, [selectedOption])


    return (
        <div className="results">
            <FlipMove className="results__container">
                {movies.map((movie) => (
                    <VideoCard key={movie.id} movie = {movie} />
                ))}
            </FlipMove>
        </div>
    )
}

export default Results
