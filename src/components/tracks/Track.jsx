import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophoneLines } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const Track = (props) => {
    const { track } = props;

    return (
        <>
            <div className='mb-5 flex justify-between py-6 px-5 bg-slate-50 rounded-md'>
                <div className='pr-2 flex flex-col justify-center'>
                    <h3 className='text-black font-medium text-l'>{track.track_name}</h3>
                    <p className='text-gray-500 font-normal text-xs'>{track.artist_name}</p>
                </div>
                <Link to={`lyrics/track/${track.track_id}`} className='flex items-center justify-between py-4 px-4 my-auto bg-slate-100 rounded-full'>
                    <FontAwesomeIcon icon={ faMicrophoneLines } className='mr-2' /> Lyrics
                </Link>
            </div>
        </>
    );
}

export default Track;