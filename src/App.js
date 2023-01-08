import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import Lyrics from "./components/tracks/Lyrics";
import {useState, useEffect, useReducer} from "react";
import axios from "axios";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {dataMMContext, searchDispatchContext} from "./Context";

function App() {
  const [tracks, setTracks] = useState([]);
  // const [allTracks, dispatch] = useReducer(searchReducer, tracks);

  useEffect(() => {
      axios.get(`https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
          .then(res => {
              setTracks(res.data.message.body.track_list);
          })
          .catch(err => console.log(err))
  }, []);

  return (
      <dataMMContext.Provider value={{tracks, heading: 'Top 10 tracks'}}>
          <searchDispatchContext.Provider value='dispatch'>
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
          </searchDispatchContext.Provider>
      </dataMMContext.Provider>
  );
}

const searchReducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH_TRACKS':
            return {
                ...state,
                tracks: action.payload,
                heading: 'Search Results'
            }
        default:
            throw Error('Unknown action: ' + action.type);
    }
}

export default App;
