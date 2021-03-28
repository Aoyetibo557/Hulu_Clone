import React from 'react'
import { useStateValue } from '../StateProvider';
import VideoCard from './VideoCard';
import './Watchlist.css';
import WatchlistCard from './WatchlistCard';
import { MdLocalMovies } from 'react-icons/md'
import { FcFilmReel } from 'react-icons/fc';


function Watchlist() {
    const [{watchlist}, dispatch] = useStateValue();
    // const [emptyState, setEmptyState] = useState(true);

    return (
        <div className="watchlist">
            <h3>Watchlist ({watchlist?.length}) </h3>
            {watchlist?.length === 0 ? (
                <div className="emptystate">
                    {/* <MdLocalMovies className="emptystate__icon" /> */}
                    <FcFilmReel className="emptystate__icon" />
                    <h2>You dont currently have any movies in your watchlist</h2>
                </div>
            ) : (
                
                watchlist.map((movie) => (
                    <WatchlistCard 
                        movie={movie}
                    />
                ))
            )}
            
        </div>
    )
}

export default Watchlist
