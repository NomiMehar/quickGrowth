import React, { useEffect } from 'react'
import './TechStack.scss'
import AOS from 'aos';


const TechStack = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <React.Fragment>
        <div className="TechStack">
            <div className="container">
                <div className="title" data-aos="fade-up" data-aos-duration="1000">
                    <h2>Technology Stack We Use for <span> Mobile App Development</span></h2>
                </div>
                <div className='stack' data-aos="fade-up" data-aos-duration="1000">
                        <div className='p-title'>
                            <p>Programming Languages</p>
                        </div>
                        <div className='d-flex'>
                            <img src='/images/services/ts-1.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/ts-2.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/ts-3.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/ts-4.svg' alt='App Develeopment Stack' />
                        </div>
                </div>
                <div className='stack' data-aos="fade-up" data-aos-duration="1000">
                        <div className='p-title'>
                            <p>Frameworks</p>
                        </div>
                        <div className='d-flex'>
                            <img src='/images/services/ts-5.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/ts-6.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/ts-7.svg' alt='App Develeopment Stack' />
                        </div>
                </div>
                <div className='stack' data-aos="fade-up" data-aos-duration="1000">
                        <div className='p-title'>
                            <p>Databases</p>
                        </div>
                        <div className='d-flex'>
                            <img src='/images/services/ts-8.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/ts-9.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/ts-10.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/ts-11.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/ts-12.svg' alt='App Develeopment Stack' />
                        </div>
                </div>
                <div className='stack' data-aos="fade-up" data-aos-duration="1000">
                        <div className='p-title'>
                            <p>Back-end</p>
                        </div>
                        <div className='d-flex'>
                            <img src='/images/services/ts-13.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/ts-14.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/ts-15.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/ts-16.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/ts-17.svg' alt='App Develeopment Stack' />
                        </div>
                </div>
                <div className='stack' data-aos="fade-up" data-aos-duration="1000">
                        <div className='p-title'>
                            <p>IDE</p>
                        </div>
                        <div className='d-flex'>
                            <img src='/images/services/ts-18.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/ts-19.svg' alt='App Develeopment Stack' />
                        </div>
                </div>
                <div className='stack' data-aos="fade-up" data-aos-duration="1000">
                        <div className='p-title'>
                            <p>Design Tools</p>
                        </div>
                        <div className='d-flex'>
                            <img src='/images/services/ts-20.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/ts-21.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/ts-22.svg' alt='App Develeopment Stack' />
                        </div>
                </div>
            </div>
            
        </div>
    </React.Fragment>
  )
}

export default TechStack