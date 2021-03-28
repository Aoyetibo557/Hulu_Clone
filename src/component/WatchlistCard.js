import React from 'react'
import './WatchlistCard.css';
import { FaThumbsUp } from 'react-icons/fa';
import { BsHeartFill } from 'react-icons/bs';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';


const base_URL = "https://image.tmdb.org/t/p/original/";


function WatchlistCard({ movie }) {

    const [{}, dispatch] = useStateValue();

    const removeMovie = () => {
        dispatch({
            type: actionTypes.REMOVE_FROM_LIST,
            movie: movie
        })
    }

    const watchMovie = () => {
        alert('Wow, you are bold, are you really trying to watch this for free? 🤣🤣');
    }

    return (
        <div className="watchlistCard">
            <img src={`${base_URL+movie?.poster_path || base_URL+movie?.backdrop_path}`} alt="" />
            <div className="watchlistCard__info">
                <h3>
                    {movie?.title || movie?.original_name}
                </h3>

                <p className="watchlistCard__overview">{movie?.overview}</p>
                
                <p className="watchlistCard__stats">
                    <span>{movie.media_type && `${movie.media_type}`}</span>
                    <span>{movie?.release_date || movie?.first_air_date}</span>
                    <span><BsHeartFill /> {movie?.vote_average}</span>
                    <span><FaThumbsUp /> {movie?.vote_count}</span>
                </p>

                <div>
                    <button type="submit" onClick={removeMovie} className="watchlistCard__btn" >Remove</button>
                    <button type="submit" onClick={watchMovie} className="watchlistCard__btn" >Watch</button>
                </div>

            </div>
        </div>
    )
}

export default WatchlistCard
