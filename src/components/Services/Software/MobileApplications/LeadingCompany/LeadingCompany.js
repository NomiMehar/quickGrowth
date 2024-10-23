import React, { useEffect } from 'react'
import AOS from 'aos';

const LeadingCompany = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <React.Fragment>
            <div className="needMaintenance">
                <div className="container">
                    <div className="row align-items-center" data-aos="fade-up" data-aos-duration="1000">
                        <div className="col-lg-7 col-md-12">
                            <div className="title">
                                <h2>Why Do I Need Website <span>Maintenance?</span></h2>
                                <div className="line"></div>
                                <p>Running on WordPress CMS or any other platform, your website occasionally needs updates to add new information about your products/services, upgrade the website software, theme, and plug-ins to ensure your website is secure and error-free.</p>
                                <p>With regular website maintenance, we help keep your website healthy and error-free but also save money. Select a suitable website maintenance package so you can focus on growing your business.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <div className="imgBlock">
                                <img src="/images/services/need.svg" alt="need" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LeadingCompany