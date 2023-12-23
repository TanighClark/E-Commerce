import React from 'react'
import './Discriptionbox.css'


const DiscriptionBox = () => {
  return (
    <div className='discriptionbox'>
        <div className="discriptionbox-navigator">
            <div className="discriptionbox-nav-box">Discription</div>
            <div className="discriptionbox-nav-box fade">Reviewsss (122)</div>
        </div>
        <div className="discriptionbox-description">
            <p> This e-commerce platform is <span>NOT</span> intended for actual purchasing transactions. 
                Instead, it was developed exclusively for my personal portfolio to showcase my FullStack capabilities. 
                Please note that it does not facilitate online buying or selling activities."
            </p>
            <p>-Ta'nigh Clark</p>
        </div>
    </div>
  )
}

export default DiscriptionBox