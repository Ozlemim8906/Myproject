import React from 'react'
import"./services.css";

const Services = () => {
  return (
    <main>
    <div className="main__div--left">
        <h4>Services</h4>
        <div className="main_div_left-start">
            <h4>Website Design</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore deleniti temporibus earum,
                laborum cum nostrum
                reiciendis cumque porro nam ex aliquid!</p>
            <p>Pricing: $1,000 - $3,000</p>
        </div>
        <div className="main_div_left-middle">
            <h4>Website Maintenance</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit magni, nisi laborum voluptate
                reiciendis ab harum quidem,
                officiis itaque molestiae architecto!</p>
            <p>Pricing: $250 per mounth</p>
        </div>
        <div className="main_div_left-end">
            <h4>Wensite Hosting</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laudantium, perferendis esse
                voluptates pariatur
                corporis recusandae voluptatem ad saepe assumenda ipsam.</p>
            <p>Pricing: $25 per mounth</p>
        </div>
    </div>

    <div className="main__div--rigth">
        <h4>Get A Quote</h4>
        <div class="main_div_rigth-name-input">
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="Name" required/>
        </div>
        <div className="main_div_rigth-email-input">
            <label for="email">Email</label>
            <input type="text" id="email" placeholder="Email Address" required/>
        </div>
        <div className="main_div_rigth-message-input">
            <label for="message">Message</label>
            <textarea name="message" id="message" cols="50" rows="5"></textarea>

        </div>
        <button>Send</button>

    </div>
</main>
  

       
  )
}

export default Services
