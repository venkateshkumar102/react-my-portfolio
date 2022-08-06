import React from 'react'
import '../css/contact.css'

function Contact() {
  return (
    <div id="contact" className="c-box">
    <h1>GET IN TOUCH</h1>

    <div className="c-sec">
        <i className="fa-solid fa-envelope"></i>
        <h2>venkateshkumarpj@gmail.com</h2>
    </div>
    <div className="c-sec">
        <i style={{color: "#ff1058"}} class="fa-brands fa-instagram"></i>
        <h2>venkateshkumar102</h2>
    </div>
    <div className="c-sec">
        <i style={{color: "#09f81d"}} class="fa-brands fa-whatsapp"></i>
        <h2>9092311696</h2>
    </div>
    <div className="c-sec">
        <i style={{color: "rgb(31, 29, 29)"}} class="fa-brands fa-github"></i>
        <h2>venkateshkumar102</h2>
    </div>
</div>
  )
}

export default Contact