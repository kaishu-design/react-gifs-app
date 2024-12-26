import React from 'react';
import SearchBar from './components/search_bar.jsx';
import Gifs from './components/gifs.jsx';
import SelectedGif from './components/selected_gif.jsx';
import './App.scss';


function App() {
  return (
    <div className="App">

      <div className='left-scene'>
        <SearchBar/>
        <SelectedGif/>
      </div>

      <div className='right-scene'>
        <Gifs/>
      </div>

    </div>
  );
}

export default App;
