import axios from 'axios';
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
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
        <div className='px-4 py-6 mt-3 mb-10 rounded-md bg-green-400'>
            <h1 className='text-gray-900 text-2xl font-medium font-poppins mb-3'>Discover</h1>
            <form onSubmit={findTrack} className='flex justify-between'>
                <input type='text' placeholder='Search your favourite song' name='trackTitle' value={trackTitle} onChange={onChange} className='w-full bg-slate-100 rounded-lg pl-4 font-poppins' />
                <button className='py-3 px-5 bg-slate-100 rounded-lg ml-2'><FontAwesomeIcon icon={ faMagnifyingGlass} /></button>
            </form>
        </div>
    )
}

export default Search;