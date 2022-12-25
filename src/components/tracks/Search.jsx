import axios from 'axios';
import { useState, useEffect } from "react";
import { useContext } from "react";
import { dataMMContext } from "../../Context";

const Search = () => {
    const {tracks} = useContext(dataMMContext);
    const [trackTitle, setTrackTitle] = useState('');

    const findTrack = (e) => {
        e.preventDefault();

        axios.get(`https://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const onChange = (e) => {
        setTrackTitle(e.target.value);
    }

    return (
        <>
            <h1>Search the song you want!</h1>
            <p>Find any song you like</p>
            <form onSubmit={findTrack}>
                <input type='text' placeholder='Song title...' name='trackTitle' value={trackTitle} onChange={onChange} />
                <button className='py-3 px-5 bg-slate-100 rounded-full ml-4'>Search</button>
            </form>
        </>
    )
}

export default Search;