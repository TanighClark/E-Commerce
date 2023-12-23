import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>GET EXCLUSICE OFFERS IN YOUR EMAIL</h1>
        <p>Subscrive to our news letters and stay updated.</p>
        <div>
            <input type="email" placeholder='Your Email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter