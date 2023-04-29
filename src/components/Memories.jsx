import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import memories1 from '../assets/image/png/memories1.png'
import memories2 from '../assets/image/png/memories2.png'
import memories3 from '../assets/image/png/memories3.png'
import memories4 from '../assets/image/png/memories4.png'
import Slider from "react-slick";

const Memories = () => {
     var settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true
                }
            },
            {
                breakpoint: 670,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }]
    };
  return (
    <>
        <Container className='py-5 my-5 overflow-hidden'>
            <p className='ff_montserrat fw_700 fs_40 cl_011736 text-center pb-sm-4'>Make memories with us</p>            

             <Slider {...settings}>
      <div className='d-flex justify-content-center px-2'>
        <img src={memories1} alt="" className='w-100 outlineimg'/>
      </div>
      <div className='d-flex justify-content-center px-2'>
        <img src={memories2} alt="" className='mt-5 w-100 outlineimg' />
      </div>
      <div className='d-flex justify-content-center px-2'>
        <img src={memories3} alt="" className='w-100 outlineimg'/>
      </div>
      <div className='d-flex justify-content-center px-2'>
        <img src={memories4} alt="" className='mt-5 w-100 outlineimg'/>
      </div>
      <div className='d-flex justify-content-center px-2'>
        <img src={memories1} alt="" className='w-100 outlineimg'/>
      </div>
      <div className='d-flex justify-content-center px-2'>
        <img src={memories2} alt="" className='mt-5 w-100 outlineimg'/>
      </div>
      <div className='d-flex justify-content-center px-2'>
        <img src={memories3} alt="" className='w-100 outlineimg'/>
      </div>
      <div className='d-flex justify-content-center px-2'>
        <img src={memories4} alt="" className='mt-5 w-100 outlineimg'/>
      </div>
    </Slider>
        </Container>
    </>
  )
}

export default Memories