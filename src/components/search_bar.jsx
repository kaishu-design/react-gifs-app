// import React, { useState } from 'react'
import React from 'react'

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
    <input
    // value={word}
    type="text"
    className="form-control form-search"
    onChange={handleUpdate}
    />
  )
}

export default SearchBar
