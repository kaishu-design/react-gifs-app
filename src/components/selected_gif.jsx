import React from 'react'

const SelectedGif = React.memo(({selectedGif}) => {
  if (!selectedGif){
    return null;
  }

  return (
    <div className='selected-gif'>
      <img
      key={selectedGif}
      src = {selectedGif}
      alt="selected gif"
            />
    </div>
  )
}, (prevProps, nextProps) => {
  return prevProps.selectedGif === nextProps.selectedGif;
}
  //true=> レンダリングをスキップ
  //false=> レンダリング
);

export default SelectedGif
