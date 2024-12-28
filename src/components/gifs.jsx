import React from 'react'

const Gifs = ({srcs, clickGif}) => {
  return (
    <div>
      {srcs.map((src, index) => (
        <img key={index} src={src} alt="gifs" onClick={() => clickGif(src)} />
      ))}
    </div>
  )
}

export default Gifs
