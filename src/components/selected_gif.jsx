import React from 'react'

const SelectedGif = ({selectedGif}) => {

  return (
    <div className='selected-gif'>
      <img src = {selectedGif}
           alt="selected gif"
            />
    </div>
  )
}
export default SelectedGif
