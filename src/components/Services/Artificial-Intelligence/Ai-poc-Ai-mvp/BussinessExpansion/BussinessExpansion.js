import React, { useEffect } from 'react'
import './BussinessExpansion.scss'
import AOS from 'aos';

function BussinessExpansion() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <React.Fragment>
            <div className="BussinessExpansion">
                <div className="container">
                    <div className="title" data-aos="fade-up" data-aos-duration="1000">
                        <h2>AI PoC and MVP Strategies to Drive  <span>Business Expansion</span></h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="1000">
                            <div className="block">
                                <h3>AI Strategy
                                    Consultation</h3>
                                <p>Our experts work hand in hand with you to formulate a comprehensive AI strategy that matches your business objectives and technological resources, paving the way for successful PoC and MVP development.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="1000">
                            <div className="block">
                                <h3>Data Assessment
                                    and Preparation</h3>
                                <p>Our team reviews your existing data infrastructure and prepares essential datasets for AI model training, guaranteeing the use of high-quality, pertinent data to enhance your AI solutions.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="1000">
                            <div className="block">
                                <h3>AI Model
                                    Development
                                    and Testing</h3>
                                <p>Our specialists create and thoroughly test AI models customized to your unique business requirements, emphasizing maximum accuracy and reliability from the very beginning.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="1000">
                            <div className="block">
                                <h3>Proof of Concept
                                    Creation</h3>
                                <p>We focus on developing AI Proof of Concepts (PoCs) that showcase the feasibility and potential benefits of the AI solution for your business, helping stakeholders visualize advantages early in the development process.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default BussinessExpansion
