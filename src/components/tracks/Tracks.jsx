import {useContext} from "react";
import {dataMMContext} from "../../Context";
import Loader from "../layout/Loader";
import Track from "./Track";

const Tracks = () => {
    const {tracks, heading} = useContext(dataMMContext)

    if(tracks === undefined || tracks.length === 0) {
        return (
            <>
                <Loader />
            </>
        )
    } else {
        return (
            <>
                <h3 className='text-center text-xl font-medium mb-5'>{heading}</h3>
                {tracks.map(item => (
                    <Track key={item.track.track_id} track={item.track} />
                ))}
            </>
        )
    }
}

export default Tracks;