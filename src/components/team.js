import React from 'react'
import teamImg from "../assests/headphone-skull.jpg"

function Team({ name, role }) {
    return (
        <div className='team-div'>
            <div className='team-img-ctn'>
            <img className='team-img' src={teamImg}/>
            </div>
            <h3 className='font-24 up-txt mrgn-top-1'>{name}</h3>
            <p className='cap-txt'>{role}</p>
        </div>
    )
}

export default Team

// <img className='team-img' src={teamImg}/>