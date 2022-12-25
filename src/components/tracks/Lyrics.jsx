import axios from "axios";
import {useState, useEffect, useContext} from "react";
import {Link, useParams} from "react-router-dom";
import {dataMMContext} from "../../Context";

const Lyrics = () => {
    const {allTracks, heading} = useContext(dataMMContext);
    let { id } = useParams();
    const [lyrics, setLyrics] = useState([]);
    const [track, setTrack] = useState([]);

    console.log(allTracks);
    console.log(heading);

    const newArr = allTracks.filter(item => {
        return item.track.track_id === parseInt(id)
    })
    let commonTrackId = newArr[0].track.commontrack_id;

    useEffect(() => {
        axios.get(`https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(res => {
                setLyrics(res.data.message.body.lyrics);

                return axios.get(`https://api.musixmatch.com/ws/1.1/track.get?commontrack_id=${commonTrackId}'&apikey=${process.env.REACT_APP_MM_KEY}`)
            })
            .then(res => {
                setTrack(res.data.message.body.track);
            })
            .catch(err => console.log(err))
    }, [])

    if (track === undefined || lyrics === undefined || Object.keys(track).length === 0 || Object.keys(lyrics).length === 0) {
        return (
            <>
                <h1 className='text-orange-400'>Loading...</h1>
            </>
        )
    } else {
        return (
            <>
                <h1 className='mb-9'>Lyrics of {track.track_name} by {track.artist_name}</h1>

                <p className='mb-9'>{lyrics.lyrics_body}</p>

                <h3>
                    {typeof track.primary_genres === 'undefined' || track.primary_genres === null
                        ? "No genre"
                        : track.primary_genres.music_genre_list.map(
                            item => item.music_genre.music_genre_name
                        )}
                </h3>

                <p>Explicit? {track.explicit === 0 ? 'No' : 'Yes'}</p>

                <Link to='/' className='inline-block py-3 px-5 mt-10 bg-slate-100 rounded-full'>Go back</Link>
            </>
        )
    }
}

export default Lyrics;