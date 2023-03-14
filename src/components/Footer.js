import React from 'react'
import"./footer.css";
import resim1 from '../assets/clarusway_logo.png'



function handleClick(url) {
  window.location.href = url;
}

const Footer = () => {
  return (
    <div className='clarusway'>
    <img src={resim1} alt="" className='resim' onClick={() => handleClick("https://www.clarusway.com")} />
       
      
      <div>
        <p>Clarusway Web Design, Copyright © 2020</p>
      </div>
    </div>
  )
}

export default Footer
