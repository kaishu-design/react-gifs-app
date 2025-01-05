// import React, { useState } from 'react'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({listGifs}) => {
  // const [word, setWord] = useState("dog")
  // const handleUpdate = ((event) => {
  //   let words = event.target.value
  //   setWord(words)
  //   listGifs(words)
  // })
  const handleUpdate = ((event) => {
    let word = event.target.value;
    listGifs(word)
  })

  return (
    <div>
    <FontAwesomeIcon icon={faMagnifyingGlass} />
    <input
    // value={word}
    type="text"
    className="form-control form-search"
    onChange={handleUpdate}
    />
    </div>
  )
}
export default SearchBar
