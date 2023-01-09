import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import Lyrics from "./components/tracks/Lyrics";
import {useState, useEffect} from "react";
import axios from "axios";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {dataMMContext} from "./Context";

function App() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
      axios.get(`https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
          .then(res => {
              setTracks(res.data.message.body.track_list);
          })
          .catch(err => console.log(err))
  }, []);

  return (
      <dataMMContext.Provider value={{tracks, heading: 'Top 10 tracks'}}>
          <BrowserRouter>
              <>
                  <Navbar />
                  <div className='mx-5'>
                      <Routes>
                          <Route path='/' element={<Index />} />
                          <Route path='/lyrics/track/:id' element={<Lyrics />} />
                      </Routes>
                  </div>
              </>
          </BrowserRouter>
      </dataMMContext.Provider>
  );
}

export default App;
