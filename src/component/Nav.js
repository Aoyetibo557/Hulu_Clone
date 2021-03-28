import React from 'react';
import requests from '../requests';
import './Nav.css';


function Nav({ setSelectedOption }) {
    return (
        <div className="nav">
            <h4 onClick={() => setSelectedOption(requests.fetchTrending)}>Trending</h4>
            <h4 onClick={() => setSelectedOption(requests.fetchTopRated)}>Top Rated</h4>
            <h4 onClick={() => setSelectedOption(requests.fetchActionMovies)}>Action</h4>
            <h4 onClick={() => setSelectedOption(requests.fetchComedyMovies)}>Comedy</h4>
            <h4 onClick={() => setSelectedOption(requests.fetchHorrorMovies)}>Horror</h4>
            <h4 onClick={() => setSelectedOption(requests.fetchRomaceMovies)}>Romance</h4>
            <h4 onClick={() => setSelectedOption(requests.fetchMystery)}>Mystery</h4>
            <h4 onClick={() => setSelectedOption(requests.fetchSciFi)}>Sci-fi</h4>
            <h4 onClick={() => setSelectedOption(requests.fetchWestern)}>Western</h4>
            <h4 onClick={() => setSelectedOption(requests.fetchAnimation)}>Animation</h4>
            <h4 onClick={() => setSelectedOption(requests.fetchTv)}>TV Movie</h4>
        </div>
    )
}

export default Nav
