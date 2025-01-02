import React from 'react'

const SearchBar = ({listGifs}) => {

  // stateを使って検索枠内の値をpassする
  return (
    <input
    type="text"
    className="form-control form-search"
    onChange={()=>listGifs("dog")}
    />
  )
}

export default SearchBar
