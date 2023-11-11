import React from 'react';
import './about.css';
import headerImg from '../../assets/th.jpeg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Us</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={headerImg} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className="about__icons" />
              <h5>Experience</h5>
              <small>1+Years Experience</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icons" />
              <h5>Clients</h5>
              <small>10+ WorldWide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icons" />
              <h5>Projects</h5>
              <small>3+ Completed Projects</small>
            </article>
            

          </div>

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit commodi accusantium molestias aliquid dignissimos. Sint quam, cupiditate odit in blanditiis, nulla unde consequatur quas animi corrupti placeat quod aut soluta!</p>
          <a href="#contact" className="btn btn-primary">Let's talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
