import React from 'react'
import"./card.css";
import resim1 from '../assets/logo_html.png'
import resim2 from '../assets/logo_css.png'
import resim3 from '../assets/logo_brush.png'
import { useNavigate } from 'react-router-dom';


const Card = () => {
  const navigate=useNavigate()
  return (
    
   

<div className='section'>
    <div className='section__div--letf' onClick={()=>navigate("/html")}>
    <img src={resim1} alt=""  width="150px" height="150px"/>
    <h3>HTML5 Markup</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt laboriosam aut voluptatibus modi nobis doloremque.</p>
</div>

<div className='section__div--middel' onClick={()=>navigate("/css")}> 
    <img src={resim2} alt="" width="150px" height="150px"/>
    <h3>CSS3 Styling</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt laboriosam aut voluptatibus modi nobis doloremque.
    </p>
</div>
<div className='section__div--rigth'onClick={()=>navigate("/logo")}>
    <img src={resim3} alt=""  width="150px" height="150px"/>
    <h3>Graphic Design</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt laboriosam aut voluptatibus modi nobis doloremque.
    </p>

</div>

</div>


  )
}

export default Card
