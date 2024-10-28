import React, { useRef, useEffect } from 'react'
import './WebMaintenanceProcess.scss'
import AOS from 'aos';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination,Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
function WebMaintenanceProcess() {
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
        {
            title: 'Understand',
            imageSrc: '/images/home/process1.svg',
        },
        {
            title: 'Devliver',
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
    const swiperRef = useRef(null);

    return (
        <React.Fragment>
            <div className="WebMaintenanceProcess">
                <div class="container">
                    <div class="row">
                        <div className="title" data-aos="fade-up" data-aos-duration="1000">
                            <h2>Our Website Maintenance <br /> <span>Process</span></h2>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                        <Swiper
                            ref={swiperRef}
                            effect={'coverflow'}
                            grabCursor={true}
                            autoplay={true}
                            centeredSlides={true}
                            loop={true}
                            slidesPerView={3.7}
                            spaceBetween={-150}
                            watchOverflow={true}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 130,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            pagination={true}
                            speed={500}
                            modules={[EffectCoverflow, Pagination,Autoplay]}
                            className="swiper_container"
                            breakpoints={{
                                1400: {
                                    slidesPerView: 3.7,
                                    spaceBetween: 10,
                                },
                                1000: {
                                    slidesPerView: 3.7,
                                    spaceBetween: 10,
                                },
                                600: {
                                    slidesPerView: 3.2,
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
               <Link to="/contact-us" className="btn-custom">LET'S TALK</Link>
               </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default WebMaintenanceProcess