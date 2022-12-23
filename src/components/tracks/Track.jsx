import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophoneLines } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const Track = (props) => {
    const { track } = props;

    return (
        <>
            <div className='border-b rounded-2xl mb-10 flex justify-between py-9 px-5'>
                <div className='pr-2'>
                    <h3 className='text-black font-medium text-l'>{track.track_name}</h3>
                    <p className='text-gray-500 font-normal text-xs'>{track.artist_name}</p>
                </div>
                <Link to={`lyrics/track/${track.track_id}`} className='flex items-center justify-between py-3 px-5 my-auto bg-slate-100 rounded-full'>
                    <FontAwesomeIcon icon={ faMicrophoneLines } className='mr-2' /> Read lyrics
                </Link>
            </div>
        </>
    );
}

export default Track;