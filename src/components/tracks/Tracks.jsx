import {useContext} from "react";
import {dataMMContext} from "../../Context";
import Track from "./Track";

const Tracks = () => {
    // const { trackList } = useContext(dataMMContext);
    const {tracks, heading} = useContext(dataMMContext)

    if(tracks === undefined || tracks.length === 0) {
        return (
            <>
                <h1 className='text-orange-400'>Loading...</h1>
            </>
        )
    } else {
        return (
            <>
                <h3>{heading}</h3>
                {tracks.map(item => (
                    <Track key={item.track.track_id} track={item.track} />
                ))}
            </>
        )
    }
}

export default Tracks;