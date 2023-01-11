import axios from "axios";
import {useState, useEffect, useContext} from "react";
import {Link, useParams} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faRecordVinyl, faUser, faTriangleExclamation, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import {dataMMContext} from "../../Context";
import Loader from "../layout/Loader";

const Lyrics = () => {
    const {tracks} = useContext(dataMMContext);
    let { id } = useParams();
    const [lyrics, setLyrics] = useState([]);
    const [track, setTrack] = useState([]);

    const newArr = tracks.filter(item => {
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
        // eslint-disable-next-line
    }, [])

    if (track === undefined || lyrics === undefined || Object.keys(track).length === 0 || Object.keys(lyrics).length === 0) {
        return (
            <>
                <Loader />
            </>
        )
    } else {
        return (
            <>
                <div className='my-8'>
                    <h1 className='mb-5 text-3xl font-semibold text-center'>{track.track_name}</h1>
                    <div className='flex justify-around'>
                        <div className=''>
                            <h3 className='text-sm'><FontAwesomeIcon icon={ faUser } /> Artist</h3>
                            <p className='font-medium'>{track.artist_name}</p>
                        </div>
                        <div className='ml-4'>
                            <h3 className='text-sm'><FontAwesomeIcon icon={ faRecordVinyl } /> Album</h3>
                            <p className='font-medium'>{track.album_name}</p>
                        </div>
                    </div>
                </div>

                <p className='mb-8 leading-relaxed'>{lyrics.lyrics_body}</p>

                <h3 className='text-xl mb-1'>Genres</h3>
                <div className="flex gap-2.5 flex-wrap">
                    {typeof track.primary_genres === 'undefined' || track.primary_genres === null
                        ? "No genre"
                        : track.primary_genres.music_genre_list.map(
                            item => <p key={item.music_genre.music_genre_id} className='bg-slate-200 rounded-full py-1 px-4 w-fit'>{item.music_genre.music_genre_name}</p>
                        )}
                </div>

                {
                    track.explicit === 0
                    ? <p className="font-medium my-10 text-green-500"><FontAwesomeIcon icon={faThumbsUp} /> Safe for all audiences</p>
                    : <p className="font-medium my-10 text-red-500"><FontAwesomeIcon icon={faTriangleExclamation} /> Explicit content</p>
                }


                <Link to='/music_lyrics_app/' className='inline-block py-3 px-5 bg-slate-100 rounded-full mb-5'>
                    <FontAwesomeIcon icon={faArrowLeft} className='mr-2' /> Go back
                </Link>
            </>
        )
    }
}

export default Lyrics;