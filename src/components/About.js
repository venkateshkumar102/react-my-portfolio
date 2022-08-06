import React from 'react'
import '../css/about.css'
import img from '../image/fullimg.png'
import cv from '../cv/venkateshkumar.pdf'


function About() {
  return (
    <div className="about" id="about">
    
    <div className="acontainer">
        <p className="abc">Touch here</p>
        <img className="aimg" src={img}/>
        <div className="aboutme">
            <h1>ABOUT ME</h1>
            <br/>
            <p>Hi! I am <span className="name">VENKATESHKUMAR</span>, a web designer/developer from madurai focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers but I found myself into web design/development since 2020. I enjoy creating beautifull designed websites.</p>
            
            <button className="cv"><a class="acv" href={cv} download>MY CV</a></button>
        </div>
    
    </div>
</div>
  )
}

export default About