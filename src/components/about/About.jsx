import React from 'react'
import './about.css'
import DPAbout from '../../assets/dp.png'
import { FaRegFileCode } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={DPAbout} alt="about" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaRegFileCode className='about__icon'/>
              <h5>Project</h5>
              <small>3+ Completed</small>
            </article>
            <article className='about__card'>
              <GoChecklist className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Months</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>CGPA</h5>
              <small>8.22 out of 10</small>
            </article>
          </div>
          
          <p>
          Hello👋! I'm Dhairya Parikh, a final year B.Tech Computer Science student with a passion for coding and technology. I'm on a mission to become a successful software engineer 🚀.</p>
          <p>I've dived deep into programming, algorithms, and software development, gaining hands-on experience through projects. Proficient in Java and Python, I specialize in Android app development 📱 and am currently learning web development 🌐. </p>
          <p>As I approach graduation, I'm excited to work with dynamic teams and to innovate and grow 🌟.
          Explore my projects and let's create something awesome together!
          </p>
          
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About