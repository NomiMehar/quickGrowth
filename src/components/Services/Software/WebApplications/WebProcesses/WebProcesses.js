import React, { useEffect } from 'react'
import './WebProcesses.scss'
import AOS from 'aos';

const WebProcesses = () => {
    useEffect(() => {
        AOS.init();
      }, [])
      return (
        <React.Fragment>
            <div className="WebProcesses">
                <div className="container">
                    <div className="title" data-aos="fade-up" data-aos-duration="1000">
                        <h2>Customized Business <span>Solutions</span></h2>
                    </div>
                    <div className="block">
                        <ul>
                            <li data-aos="fade-up" data-aos-duration="1000"><img src="/images/services/web-process-1.svg" alt="Web Process Img" /><span>Design</span></li>
                            <li data-aos="fade-up" data-aos-duration="1000"><img src="/images/services/web-process-2.svg" alt="Web Process Img" /><span>Prototype</span></li>
                            <li data-aos="fade-up" data-aos-duration="1000"><img src="/images/services/web-process-3.svg" alt="Web Process Img" /><span>Development</span></li>
                            <li data-aos="fade-up" data-aos-duration="1000"><img src="/images/services/web-process-4.svg" alt="Web Process Img" /><span>Software Quality
                            Assurance</span></li>
                            <li data-aos="fade-up" data-aos-duration="1000"><img src="/images/services/web-process-5.svg" alt="Web Process Img" /><span>DevOps Service</span></li>
                            <li data-aos="fade-up" data-aos-duration="1000"><img src="/images/services/web-process-6.svg" alt="Web Process Img" /><span>Support & Maintenance</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
      )
}

export default WebProcesses