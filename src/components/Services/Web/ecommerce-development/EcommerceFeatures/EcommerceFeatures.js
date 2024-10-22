import React, {  useEffect } from 'react'
import './EcommerceFeatures.scss'
import AOS from 'aos';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation,Autoplay } from 'swiper/modules';
function EcommerceFeatures() {
  useEffect(() => {
    AOS.init();
  }, []);
  const slideData = [
    {
        title: 'Fully Customizable',
        imageSrc: '/images/services/feature1.svg',
        description:'You’ll want your ecommerce website to present your products in the very best way. And as your business grows, you’ll find that you have new requirements and ideas to keep improving.'
    },
    {
        title: 'Easy to Manage',
        imageSrc: '/images/services/feature2.svg',
        description:'Products come and go. How you present your products online is critical to creating appeal and driving that all-important click to add to basket and through to check out.'
    },
    {
        title: 'High-Performance',
        imageSrc: '/images/services/feature3.svg',
        description:'We leverage over a decade experience delivering hundreds of high-performance eCommerce websites that are carefully engineered using best practice techniques and approaches.'
    },
    {
      title: 'Fully Customizable',
      imageSrc: '/images/services/feature1.svg',
      description:'You’ll want your ecommerce website to present your products in the very best way. And as your business grows, you’ll find that you have new requirements and ideas to keep improving.'
  },
  {
      title: 'Easy to Manage',
      imageSrc: '/images/services/feature2.svg',
      description:'Products come and go. How you present your products online is critical to creating appeal and driving that all-important click to add to basket and through to check out.'
  },
  {
      title: 'High-Performance',
      imageSrc: '/images/services/feature3.svg',
      description:'We leverage over a decade experience delivering hundreds of high-performance eCommerce websites that are carefully engineered using best practice techniques and approaches.'
  },
]
  return (
    <React.Fragment>
        <div className="ecommerceFeatures">
            <div className="container">
                <div className="title" data-aos="fade-up" data-aos-duration="1000">
                    <h2>Key Features of ecommerce <span>Websitess</span></h2>
                    <p>Inevitably in any growth market, the competition is heightening.</p>
                    <p>Today your digital customers expect slick user experiences that just work.</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                        <Swiper
                            autoplay={true}
                            loop={true}
                            slidesPerView={3}
                            spaceBetween={20}
                            navigation={true}
                            speed={500}
                            modules={[Navigation,Autoplay]}
                            className="mySwipper"
                            breakpoints={{
                                1400: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                1000: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                600: {
                                    slidesPerView: 2,
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
                                          <div className="ecommerceFeatures__card">
                                              <img src={item.imageSrc} alt="Ecommerce Features" />
                                              <h3>{item.title}</h3>
                                              <p>{item.description}</p>
                                          </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default EcommerceFeatures
