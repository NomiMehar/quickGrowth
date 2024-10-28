import React, { useEffect } from 'react'
import './MvpRecentWork.scss'
import AOS from 'aos';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay,  Pagination } from 'swiper/modules';

const MvpRecentWork = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    
      const slideData = [
        {
            imageSrc: '/images/services/seo-work (1).svg'
        },
        {
            imageSrc: '/images/services/seo-work (2).svg'
        },
        {
            imageSrc: '/images/services/seo-work (3).svg'
        },
        {
          imageSrc: '/images/services/seo-work (1).svg'
        },
        {
          imageSrc: '/images/services/seo-work (2).svg'
        },
        {
          imageSrc: '/images/services/seo-work (3).svg'
        },
    ]
  return (
    <React.Fragment>
        <div className="MvpRecentWork">
            <div className="container">
                <div className="title" data-aos="fade-up" data-aos-duration="1000">
                    <h2>Our  Recent
                    <span> Work</span></h2>
                    <p>All our SEO solutions are developed in-house by our skilled software engineers.
                        <br />
                         Check out our portfolio below to see examples of our work across various industries</p>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
                        <Swiper
                            autoplay={true}
                            loop={true}
                            slidesPerView={2.5}
                            centeredSlides={true}
                            spaceBetween={20}
                            pagination={true}
                             Pagination={true}
                            speed={500}
                            modules={[Autoplay, Pagination]}
                            className="mySwipper"
                            breakpoints={{
                                1400: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 20,
                                },
                                1000: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                600: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                0: {
                                    slidesPerView: 1.5,
                                    spaceBetween: 10,    
                                    centeredSlides:false,    
                            }
                            }}
                        >
                            {slideData.map((item, index) => (
                                <SwiperSlide key={index} className="swiper-slide">
                                    <img src={item.imageSrc} alt="Ecommercework" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
            </div>
        </div>
    </React.Fragment>
  )
}

export default MvpRecentWork