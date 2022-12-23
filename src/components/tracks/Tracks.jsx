import {useContext} from "react";
import {dataMMContext} from "../../Context";
import Track from "./Track";

const Tracks = () => {
    const trackList = useContext(dataMMContext);

    if(trackList === undefined || trackList.length === 0) {
        return (
            <>
                <h1 className='text-orange-400'>Loading...</h1>
            </>
        )
    } else {
        return (
            <>
                <h3>Section title</h3>
                {trackList.map(item => (
                    <Track key={item.track.track_id} track={item.track} />
                ))}
            </>
        )
    }
}

export default Tracks;