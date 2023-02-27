import React from 'react'

function Media({ image }) {
    return (
        <div className='media-img-div'>
            <img src={image} />
        </div>
    )
}

export default Media