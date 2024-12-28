import React from 'react'

const SearchBar = ({listGifs}) => {

  // const [search, setSearch] = useState;
  return (
    <input
    value="value"
    type="text"
    className="form-control form-search"
    onChange={(value)=>listGifs}
    />
  )
}

export default SearchBar
