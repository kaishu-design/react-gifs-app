import React, { useState, useEffect } from 'react';
import SearchBar from './components/search_bar.jsx';
import Gifs from './components/gifs.jsx';
import SelectedGif from './components/selected_gif.jsx';
import './App.scss';

function App() {

  // define state
  const [searchQuery, setSearchQuery] = useState('8H80IVPjAdKY8')
  const [selectedGif, setSelectedGif] = useState('https://media3.giphy.com/media/8H80IVPjAdKY8/giphy.webp')

  // functions
  const handleSelectedGif = (selectedSrc) => {
    setSelectedGif(selectedSrc)
  }

  // const apiCall () => {
  //   setSearchQuery
  // }

  // variables
  const gifIDs = ["P3CZolxd8DeRy4g4fM","8H80IVPjAdKY8","1jC6xbuNBZp2CfIs0b"]

  return (
    <div className="App">

      <div className='left-scene'>
        <SearchBar />
        {/* listGifs={apiCall} */}
        <SelectedGif selectedGif={selectedGif}/>
      </div>

      <div className='right-scene'>
        <Gifs gifIDs={gifIDs} clickGif={handleSelectedGif}/>
      </div>

    </div>
  );
}
export default App;
