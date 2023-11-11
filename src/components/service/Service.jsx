import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'
const Service = () => {
  return (
    <section id='service'>
      <h5>What We Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className="service__head">
            <h3>Frontend-development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
         
          </ul>
        </article>
        {/* End of UI/UX */}
        <article className='service'>
          <div className="service__head">
            <h3>backend-development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
         
          </ul>
        </article>
        {/* End of Web_dev */}
        <article className='service'>
          <div className="service__head">
            <h3>XYZ</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
         
          </ul>
        </article>
        {/* End of UI/UX */}
      </div>
    </section>
  )
}

export default Service
