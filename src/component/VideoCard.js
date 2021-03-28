import React, { forwardRef } from 'react'
import './VideoCard.css';
import Temp from '../images/huluLogo.png';
import TextTruncate from 'react-text-truncate';
import { FaThumbsUp } from 'react-icons/fa'
import { BsHeartFill } from 'react-icons/bs';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import { IoIosAddCircleOutline } from 'react-icons/io'

const base_URL = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({movie}, ref) => {
    const [{watchlist}, dispatch] = useStateValue();
    

    const addToWatchlist = () =>{
        dispatch({
            type: actionTypes.ADD_TO_LIST,
            movie: movie
        })

        alert(`${movie?.title} has been added to watchlist`)
    }


    return (
        <div ref={ref} className="videoCard">
            <img className="videoCard__image" src={`${base_URL+movie?.backdrop_path || base_URL+movie?.poster_path}` || Temp} alt={movie?.title} />
            <TextTruncate 
                line={1}
                element="p"
                truncateText="..."
                text={movie?.overview}

            />
            <h2 className="title">
                <span>{movie?.title || movie?.original_name}</span>
                <span title="Add to Watchlist" className="__icon" onClick={addToWatchlist}><IoIosAddCircleOutline /></span>
            </h2>

            
            <p className="videoCard__stats">
                <span>{movie.media_type && `${movie.media_type}`}</span>
                <span>{movie?.release_date || movie?.first_air_date}</span>
                <span><BsHeartFill /> {movie?.vote_average}</span>
                <span><FaThumbsUp /> {movie?.vote_count}</span>
                
            </p>
            {/* add plus icon for add to watchlist functionality */}
        </div>
    )
});

export default VideoCard
