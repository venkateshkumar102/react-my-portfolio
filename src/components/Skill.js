import React from 'react'
import "../css/skill.css"

function Skill() {
  return (
<section className="s-section">
    <h1 className="skill-title">MY SKILLS</h1>
    <div className="skills" id="skill">
        <div className="box">
            <h1>HTML</h1>
            <i style={{color:'#ffd900'}} className="fa-brands fa-html5"></i>
            <div className="p-bar">
                <div className="html"><span>85%</span></div>
            </div>
            
        </div>
        <div className="box">
            <h1>CSS</h1>
            <i style={{color:"#00ff15"}} className="fa-brands fa-css3"></i>
            <div className="p-bar">
                <div className="css"><span>85%</span></div>
            </div>
            
        </div>
        <div className="box">
            <h1>JS</h1>
            <i style={{color:" #efff10"}} className="fa-brands fa-js"></i>
            <div className="p-bar">
                <div className="js"><span>60%</span></div>
            </div>
            
        </div>
        <div className="box">
            <h1>REACT</h1>
            <i style={{color: "rgb(6, 144, 224)"}} className="fa-brands fa-react"></i>
            <div className="p-bar">
                <div className="react"><span>40%</span></div>
            </div>
            
        </div>
    </div>
</section>
    
  )
}

export default Skill

        