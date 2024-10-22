import React, { useEffect } from 'react'
import './EcommerceDevelopmentFeatures.scss'
import AOS from 'aos';
import { Link } from 'react-router-dom';
function EcommerceDevelopmentFeatures() {
    useEffect(() => {
        AOS.init();
    }, []);
    const slideData = [
        {
            title: 'Current',
            imageSrc: '/images/services/df1.svg',
            description: 'Always provide correct & updated information about your products, services & company news to your customers. Our website maintenance service keeps your website updated so your customers always get the latest information.'
        },
        {
            title: 'Error-Free',
            imageSrc: '/images/services/df2.svg',
            description: 'Technology is changing quickly, as a result, your website may develop errors before you know it. With a website maintenance plan, we regularly scan your website & fix the errors as these appear.'
        },
        {
            title: 'WordPress',
            imageSrc: '/images/services/df3.svg',
            description: 'If you don’t update your WordPress core engine software, theme, and plug-ins, your website may develop errors & security holes. With our WordPress maintenance services, we apply updates as soon as they’re available.'
        },
        {
            title: 'Security',
            imageSrc: '/images/services/df4.svg',
            description: 'Your website software needs regular security audit to ensure a safe website. Our website maintenance service includes regular monitoring and applying relevant patches to your website to ensure it’s always secure.'
        },
        {
            title: 'Backup',
            imageSrc: '/images/services/df5.svg',
            description: 'Enjoy built-in regular website backups with a maintenance plan. We regularly backup at a secure offline location. So, if anything goes wrong with your server, we can bring your website back online quickly.'
        },
        {
            title: 'On-Demand',
            imageSrc: '/images/services/df6.svg',
            description: 'We are your IT team. With an email or a quick phone call, you can be confident that the changes will be done promptly and accurately.'
        },
    ]
    return (
        <React.Fragment>
            <div className="ecommerceDevelopmentFeatures">
                <div className="container">
                    <div className="title" data-aos="fade-up" data-aos-duration="1000">
                        <h2>Ecommerce Website Development <br />
                            <span> Features</span></h2>
                        <p>Inevitably in any growth market, the competition is heightening.</p>
                        <p>Today your digital customers expect slick user experiences that just work.</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div className="row">
                            {slideData.map((item, index) => (
                                <div className="col-lg-4 col-md-6" key={index}>
                                    <div className="ecommerceDevelopmentFeatures__card">
                                        <img src={item.imageSrc} alt="Ecommerce Features" />
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="btn-center" data-aos="fade-up" data-aos-duration="1000">
                            <Link to="/" className="btn-custom">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default EcommerceDevelopmentFeatures
