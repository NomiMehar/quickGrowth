import React from 'react'
import { Link } from 'react-router-dom'
import './AwesomeProjects.scss'

const AwesomeProjects = () => {
    return (
        <React.Fragment>
            <div className="AwesomeProject">
                <div className="container">
                    <div className="title" data-aos="fade-up" data-aos-duration="1000">
                        <h2>Awesome <span>Project</span></h2>
                    </div>


                    {/* <div className="parent">
              <div className= 'div5'  data-aos="fade-up" data-aos-duration="1000" >
                <div className="block">
                  <img src='/images/services/awesome-1.svg' alt='Awesome Project' />
                  <p className="heading">'Host Guru AI'</p>
                </div>
              </div>
              <div className= 'div5 div6 div7'  data-aos="fade-up" data-aos-duration="1000" >
                <div className="block">
                  <img src='/images/services/awesome-2.svg' alt='Awesome Project' />
                  <p className="heading">'Host Guru AI'</p>
                </div>
              </div>
              <div className= 'div5 div6 div7'  data-aos="fade-up" data-aos-duration="1000" >
                <div className="block">
                  <img src='/images/services/awesome-3.svg' alt='Awesome Project' />
                  <p className="heading">'Host Guru AI'</p>
                </div>
              </div>
              <div className= 'div5 div6 div7'  data-aos="fade-up" data-aos-duration="1000" >
                <div className="block">
                  <img src='/images/services/awesome-5.svg' alt='Awesome Project' />
                  <p className="heading">'Host Guru AI'</p>
                </div>
              </div>
              <div className= 'div5 div6 div7'  data-aos="fade-up" data-aos-duration="1000" >
                <div className="block">
                  <img src='/images/services/awesome-6.svg' alt='Awesome Project' />
                  <p className="heading">'Host Guru AI'</p>
                </div>
              </div>
          </div> */}
                    <div className="row">
                        <div className='col-lg-7 big-one'>
                                <div className="block">
                                    <img src='/images/services/awesome-1.svg' alt='Awesome Project' />
                                    <p className="heading">Host Guru AI</p>
                                </div>
                        </div>
                        <div className='col-lg-5'>
                            <div className='row'>
                                <div className='col-12' data-aos="fade-up" data-aos-duration="1000" >
                                    <div className="block">
                                        <img src='/images/services/awesome-2.svg' alt='Awesome Project' />
                                        <p className="heading">'Host Guru AI'</p>
                                    </div>
                                </div>
                                <div className='col-12' data-aos="fade-up" data-aos-duration="1000" >
                                    <div className="block">
                                        <img src='/images/services/awesome-3.svg' alt='Awesome Project' />
                                        <p className="heading">'Host Guru AI'</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-5'>
                            <div className='row px-0'>
                                <div className='col-12' data-aos="fade-up" data-aos-duration="1000" >
                                    <div className="block">
                                        <img src='/images/services/awesome-4.svg' alt='Awesome Project' />
                                        <p className="heading">'Host Guru AI'</p>
                                    </div>
                                </div>
                                <div className='col-12' data-aos="fade-up" data-aos-duration="1000" >
                                    <div className="block">
                                        <img src='/images/services/awesome-5.svg' alt='Awesome Project' />
                                        <p className="heading">'Host Guru AI'</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-7 big-two'>
                                <div className="block ">
                                    <img src='/images/services/awesome-6.svg' alt='Awesome Project' />
                                    <p className="heading">Host Guru AI</p>
                                </div>
                        </div>
                    </div>

                    <div className="btn-center" data-aos="fade-up" data-aos-duration="1000">
                        <Link to="/contact-us" className="btn-custom">Let's Talk</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AwesomeProjects
