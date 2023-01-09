import {Player} from "@lottiefiles/react-lottie-player";

const Loader = () => {
    return (
        <>
            <Player src='https://assets4.lottiefiles.com/private_files/lf30_8hgvcqak.json' className='player' autoplay={true} />
        </>
    )
}

export default Loader;