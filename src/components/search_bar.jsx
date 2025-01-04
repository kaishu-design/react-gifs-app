import React from 'react'

const SearchBar = ({listGifs}) => {

  const handleUpdate = ((event) => {
    let word = event.target.value;
    listGifs(word)
  })

  return (
    <input
    type="text"
    className="form-control form-search"
    onChange={handleUpdate}
    />
  )
}

export default SearchBar
