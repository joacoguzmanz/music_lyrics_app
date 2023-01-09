import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import Lyrics from "./components/tracks/Lyrics";
import {useEffect, useReducer} from "react";
import axios from "axios";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {dataMMContext, searchTracksContext} from "./Context";

const searchReducer = (state, action) => {
    switch (action.type) {
        case 'LIST_TRACKS':
            return {
                tracks: action.payload,
                heading: action.heading
            }
        case 'SEARCH_TRACKS':
            return {
                tracks: action.payload,
                heading: action.heading
            }
        default:
            throw new Error('Not recognized action' + action.type)
    }
}

function App() {
  const [tracks, dispatch] = useReducer(searchReducer, {});

  useEffect(() => {
      axios.get(`https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
          .then(res => {
              dispatch({
                  type: 'LIST_TRACKS',
                  payload: res.data.message.body.track_list,
                  heading: 'Top 10 tracks'
              })
          })
          .catch(err => console.log(err))
  }, []);

  return (
      <dataMMContext.Provider value={tracks}>
          <searchTracksContext.Provider value={dispatch}>
              <BrowserRouter>
                  <>
                      <Navbar />
                      <div className='mx-5 md:mx-auto md:max-w-md'>
                          <Routes>
                              <Route path='/' element={<Index />} />
                              <Route path='/lyrics/track/:id' element={<Lyrics />} />
                          </Routes>
                      </div>
                  </>
              </BrowserRouter>
          </searchTracksContext.Provider>
      </dataMMContext.Provider>
  );
}

export default App;
