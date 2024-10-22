import React, { useEffect } from 'react'
import './WebsiteProcess.scss'
import AOS from 'aos';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination,Autoplay,Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
function WebsiteProcess() {
    useEffect(() => {
        AOS.init();
    }, [])
    const slideData = [
        {
            title: 'Understand',
            imageSrc: '/images/home/process1.svg',
        },
        {
            title: 'Devliver',
            imageSrc: '/images/home/process2.svg',
        },
        {
            title: 'Design',
            imageSrc: '/images/home/process3.svg',
        },
        {
            title: 'Development',
            imageSrc: '/images/home/process4.svg',
        },
        {
            title: 'Engage',
            imageSrc: '/images/home/process5.svg',
        },
        {
            title: 'Understand',
            imageSrc: '/images/home/process1.svg',
        },
        {
            title: 'Content',
            imageSrc: '/images/home/process2.svg',
        },
        {
            title: '25 Listing',
            imageSrc: '/images/home/process3.svg',
        },
        {
            title: 'Innovate',
            imageSrc: '/images/home/process4.svg',
        },
        {
            title: 'Engage',
            imageSrc: '/images/home/process5.svg',
        },
    ]

    return (
        <React.Fragment>
            <div className="websiteProcess">
                <div class="container">
                    <div class="row">
                        <div className="title" data-aos="fade-up" data-aos-duration="1000">
                            <h2>Website Development
                            <span>Process</span></h2>
                        </div>
                        
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                        <Swiper
                            autoplay={true}
                            centeredSlides={true}
                            loop={true}
                            slidesPerView={3.5}
                            spaceBetween={10}
                            pagination={true}
                            navigation={true}
                            speed={500}
                            modules={[Pagination,Autoplay,Navigation]}
                            className="swiper_container"
                            breakpoints={{
                                1400: {
                                    slidesPerView: 3.5,
                                    spaceBetween: 20,
                                },
                                1000: {
                                    slidesPerView: 3.5,
                                    spaceBetween: 10,
                                },
                                600: {
                                    slidesPerView: 3.5,
                                    spaceBetween: 10,
                                },
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,    
                                    centeredSlides:false,    
                            }
                            }}
                        >
                            {slideData.map((item, index) => (
                                <SwiperSlide key={index} className="swiper-slide">
                                        <div className="image-wrapper">
                                            <img src={item.imageSrc} alt={item.title} />
                                            <h2 className="slide-title">{item.title}</h2>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        </div>
                        <div className="btn-center" data-aos="fade-up" data-aos-duration="1000">
               <Link to="/contact-us" className="btn-custom">Get Started</Link>
               </div>
            </div>
        </React.Fragment>
    )
}

export default WebsiteProcess
