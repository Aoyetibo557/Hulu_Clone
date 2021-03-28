import React from 'react'
import './Header.css';
import { VscHome} from 'react-icons/vsc'
import { BsLightning, BsSearch } from 'react-icons/bs';
import { MdLiveTv, MdVideoLibrary } from 'react-icons/md';
import { BiUser} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { Avatar } from '@material-ui/core';




function Header(props) {
    const [{user}, dispatch] = useStateValue();

    return (
        <div className="header">
            <div className="header__icons">
                <div className="header__icon header__icon--active">
                    <Link to="/">
                        <VscHome className="icon" />
                    </Link>
                    <p>Home</p>
                </div>

                <div className="header__icon">
                    <BsLightning className="icon" />
                    <p>Trending</p>
                </div>

                <div className="header__icon">
                    <MdLiveTv className="icon" />
                    <p>Verified</p>
                </div>

                <div className="header__icon">
                   <Link to="/watchlist">
                        <MdVideoLibrary className="icon" />
                   </Link>
                    <p>Watchlist</p>
                </div>

                <div className="header__icon">
                    <BsSearch className="icon" />
                    <p>Search</p>
                    
                </div>

                <div className="header__icon">
                    <Link to="/login">
                        <BiUser className="icon" />
                    </Link>
                    <p>
                        {user ? `${user?.displayName}` : <p>Account</p>}
                    </p>
                </div>
            </div>

            <div className="header__right">
                {user ? (
                  <Avatar className="header__Avatar" title={`Profile ${user?.email}`} src={user?.photoURL} alt={user?.displayName} />
                ) : ''}
              <img className="header__image" src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" alt ="Hulu Logo" />
            </div>
        </div>
    )
}

export default Header
