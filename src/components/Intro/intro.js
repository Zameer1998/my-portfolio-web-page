import React from 'react'
import './intro.css';
import bg from '../../assets/1.png'; // Adjust the path as necessary
import btnImg from '../../assets/hireme.png'; // Adjust the path as necessary
import { Link } from "react-scroll"; 

function Intro() {
  return (
    <section id='intro'>
        <div className="introContent">
            <span className='hello'>Hello</span>
            <span className='introText'>I'm<span className='introName'>Zameer</span><br/>Website Designer</span>
            <p className='introPara'>I am a web designer with a passion for creating beautiful and functional websites.
                <br/> I have experience in HTML, CSS, and JavaScript, and 
                <br/>I am always looking to learn new skills and improve my craft.</p>
            <Link><button className='btn'><img src={btnImg} alt='' className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro