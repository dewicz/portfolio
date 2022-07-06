import React, { useRef, useState, useContext } from 'react'
import './contact.css'
import me from "../../images/Spock_at_console.jpg"
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';

const Contact = () => {

    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;


    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_w4nc1hk', 'template_db06nvi', formRef.current, '7ajKDmbT4BU2Eez5o')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    }

  return (
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Lets discuss your project</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={me} alt="" className="c-icon" />
                        11111111
                    </div>
                </div>
                <div className="c-info-item">
                    dominika.dewicz@hotmail.com
                </div>
                <div className="c-info-item">
                    address
                </div>  
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>What's your story? </b> Get in touch. Always available for freelancing if the right project comes along
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                    <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder='Message' name="message"></textarea>
                    <button>Submit</button>
                    {done && "Thank you..."}
                </form>
            </div>
        </div>
    </div>
    
  )
}

export default Contact