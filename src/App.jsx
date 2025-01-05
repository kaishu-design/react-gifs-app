import React, { useState } from 'react';
import SearchBar from './components/search_bar.jsx';
import Gifs from './components/gifs.jsx';
import SelectedGif from './components/selected_gif.jsx';
import './App.scss';
import { GiphyFetch } from '@giphy/js-fetch-api'

function App() {
  const gifIDs = ["cLcxtL1z8t8oo","8H80IVPjAdKY8","21PV0Su6USswD76iLv"]

  const [gifs, setGifs] = useState(gifIDs)
  const [selectedGif, setSelectedGif] = useState(null) // 'https://media3.giphy.com/media/8H80IVPjAdKY8/giphy.webp'

  const handleSelectedGif = (selectedSrc) => {
    setSelectedGif(selectedSrc)
  }
  const handleGifs = (gifIDs) => {
    setGifs(gifIDs)
  }

  const apiCall = async (query) => {
    try {
      const gf = new GiphyFetch('NaoG50izpidmuW5jSxYQpxWzDgtGJMXT');
      const results = await gf.search(query, { sort: 'relevant', lang: 'es', limit: 10 });
      // results.data.forEach((data) => console.log(data.id));
      const gifIDs = results.data.map((gif) => gif.id);
      handleGifs(gifIDs);
    } catch (error) {
      console.error('Error fetching gifs:', error);
    }
  };

  return (
    <div className="App">

      <div className='left-scene'>
        <SearchBar listGifs={apiCall}/>

        <SelectedGif selectedGif={selectedGif}/>
      </div>

      <div className='right-scene'>
        <Gifs gifIDs={gifs} clickGif={handleSelectedGif}/>
      </div>

    </div>
  );
}
export default App;
