import React from 'react'
import "./intro.css"
import me from "../../images/Spock_at_console.jpg"
const Intro = () => {
  return (
    <div className="i">
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hey, I'm</h2>
                <h1 className="i-name">Domi</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Fullstack Developer</div>
                        <div className="i-title-item">Fullstack Developer</div>
                        <div className="i-title-item">Fullstack Developer</div>
                        <div className="i-title-item">Fullstack Developer</div>
                    </div>
                </div>
                <div className="i-desc">
                        I develop services for customers of all sizes, specializing in modern websites, web services and apps.
                </div>
            </div>
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={me} alt="" className="i-img"></img>
            </div>  
    </div>
)
}

export default Intro