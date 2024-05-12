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
              <h5>Skills</h5>
              <small><ul>
                <li>• Android App Development</li>
                <li>• Web Development</li>
                <li>• Collaborative team member</li>
                <li>• Leadership Quality</li></ul></small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>CGPA</h5>
              <small>8.22 out of 10</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About