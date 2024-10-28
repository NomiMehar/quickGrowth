import React, { useEffect } from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom'
import './SaasAiBanner.scss'

const SaasAiBanner = () => {
  useEffect(() => {
    AOS.init();
  }, [])

return (
<React.Fragment>
            <div className="SaasAiBanner">
                <div className="container">
                    <div className="row">
                        <div className="title" data-aos="fade-up" data-aos-duration="1000">
                            <h2>SaaS AI Solution</h2>
                            <p>Our AI SaaS services provide practical solutions to real-world challenges, offering a one-stop platform for all your AI development needs in Canada.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="breadCrumbs">
                <div className="container">
                    <p data-aos="fade-left" data-aos-duration="1000">
                    <Link to="/" className='home'>Home</Link>
                    <span>/</span>
                    <Link to="/services/artificial-intelligence/saas-ai-solution" className='page'>SaaS AI Solution</Link>
                    </p>
                </div>
            </div>
</React.Fragment>
)
}

export default SaasAiBanner