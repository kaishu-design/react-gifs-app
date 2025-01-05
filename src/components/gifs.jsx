import React from 'react'

const Gifs = ({gifIDs, clickGif}) => {
console.log("rendered");

  return (

    <div>
      {gifIDs.map((id) => (
        <img key={id} src={`https://media3.giphy.com/media/${id}/giphy.webp`} alt="gifs" onClick={() => clickGif(`https://media3.giphy.com/media/${id}/giphy.webp`)} />
      ))}
    </div>
  )
}

export default Gifs
