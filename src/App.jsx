import React, { useState, useEffect } from 'react';
import SearchBar from './components/search_bar.jsx';
import Gifs from './components/gifs.jsx';
import SelectedGif from './components/selected_gif.jsx';
import './App.scss';

function App() {

  // const [searchQ, setSearchQ] = useState('idcomeshere')
  const [selectedGif, setSelectedGif] = useState('https://media3.giphy.com/media/8H80IVPjAdKY8/giphy.webp')
  const handleSelectedGif = (selectedSrc) => {
    setSelectedGif(selectedSrc)
  }

  const gifIDs = ["P3CZolxd8DeRy4g4fM","8H80IVPjAdKY8","1jC6xbuNBZp2CfIs0b"]
  const createsrcs = (gifIDs) => {
    let srcs = [];
    gifIDs.forEach((gifID) => {
      srcs.push(`https://media3.giphy.com/media/${gifID}/giphy.webp`)
    })
    return srcs
  }
  const srcs = createsrcs(gifIDs)
  // const src = "https://media3.giphy.com/media/P3CZolxd8DeRy4g4fM/giphy.webp"

  return (
    <div className="App">

      <div className='left-scene'>
        <SearchBar/>
        <SelectedGif selectedGif={selectedGif}/>
      </div>

      <div className='right-scene'>
        <Gifs srcs={srcs} clickGif={handleSelectedGif}/>
      </div>

    </div>
  );
}
export default App;
