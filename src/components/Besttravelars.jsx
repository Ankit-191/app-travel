import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img1 from '../assets/image/png/Subtract.png'
import img2 from '../assets/image/png/Subtract(1).png'
import img3 from '../assets/image/png/Subtract(2).png'
import img4 from '../assets/image/png/Subtract(3).png'
import raju from '../assets/image/png/raja.png'
import zaire from '../assets/image/png/zairs.png'
import marcus from '../assets/image/png/marcus.png'
import davis from '../assets/image/png/davis.png'
import Slider from "react-slick";

const Besttravelars = () => {
    var best = {
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
        <Container className='overflow-hidden'>
            <p className='ff_montserrat fw_600 fs_40 cl_011736 text-center pt-5 mt-5 pb-4'>Best travelars of this month</p>
            <Slider {...best}>
      <div className='pb-5 px-2 mb-5 d-flex justify-content-center'>
        <div className='text-center travelars_box'>
                        <img src={img1} alt="" className='w-100'/>
                        <div className='d-flex justify-content-center tranform'>
                            <img src={raju} alt="raju" />
                        </div>
                        <p className='ff_montserrat fw_600 fs_24 cl_011736 mb-1'>Raju Mullah</p>
                        <p className='ff_montserrat fw_500 fs_16 cl_011736 pb-4'>@rajumulllah</p>
                    </div>
      </div>
      <div className='pb-5 px-2 mb-5 d-flex justify-content-center'>
        <div className='text-center travelars_box'>
                        <img src={img2} alt="" className='w-100'/>
                        <div className='d-flex justify-content-center tranform'>
                            <img src={zaire} alt="zaire" />
                        </div>
                        <p className='ff_montserrat fw_600 fs_24 cl_011736 mb-1'>Raju Mullah</p>
                        <p className='ff_montserrat fw_500 fs_16 cl_011736 pb-4'>@rajumulllah</p>
                    </div>
      </div>
      <div className='pb-5 px-2 mb-5 d-flex justify-content-center'>
        <div className='text-center travelars_box'>
                        <img src={img3} alt="" className='w-100'/>
                        <div className='d-flex justify-content-center tranform'>
                            <img src={marcus} alt="marcus" />
                        </div>
                        <p className='ff_montserrat fw_600 fs_24 cl_011736 mb-1'>Raju Mullah</p>
                        <p className='ff_montserrat fw_500 fs_16 cl_011736 pb-4'>@rajumulllah</p>
                    </div>
      </div>
      <div className='pb-5 px-2 mb-5 d-flex justify-content-center'>
        <div className='text-center travelars_box'>
                        <img src={img4} alt="" className='w-100'/>
                        <div className='d-flex justify-content-center tranform'>
                            <img src={davis} alt="davis" />
                        </div>
                        <p className='ff_montserrat fw_600 fs_24 cl_011736 mb-1'>Raju Mullah</p>
                        <p className='ff_montserrat fw_500 fs_16 cl_011736 pb-4'>@rajumulllah</p>
                    </div>
      </div>
      <div className='pb-5 px-2 mb-5 d-flex justify-content-center'>
        <div className='text-center travelars_box'>
                        <img src={img1} alt="" className='w-100'/>
                        <div className='d-flex justify-content-center tranform'>
                            <img src={raju} alt="raju" />
                        </div>
                        <p className='ff_montserrat fw_600 fs_24 cl_011736 mb-1'>Raju Mullah</p>
                        <p className='ff_montserrat fw_500 fs_16 cl_011736 pb-4'>@rajumulllah</p>
                    </div>
      </div>
      <div className='pb-5 px-2 mb-5 d-flex justify-content-center'>
        <div className='text-center travelars_box'>
                        <img src={img2} alt="" className='w-100'/>
                        <div className='d-flex justify-content-center tranform'>
                            <img src={zaire} alt="zaire" />
                        </div>
                        <p className='ff_montserrat fw_600 fs_24 cl_011736 mb-1'>Raju Mullah</p>
                        <p className='ff_montserrat fw_500 fs_16 cl_011736 pb-4'>@rajumulllah</p>
                    </div>
      </div>
      <div className='pb-5 px-2 mb-5 d-flex justify-content-center'>
        <div className='text-center travelars_box'>
                        <img src={img3} alt="" className='w-100'/>
                        <div className='d-flex justify-content-center tranform'>
                            <img src={marcus} alt="marcus" />
                        </div>
                        <p className='ff_montserrat fw_600 fs_24 cl_011736 mb-1'>Raju Mullah</p>
                        <p className='ff_montserrat fw_500 fs_16 cl_011736 pb-4'>@rajumulllah</p>
                    </div>
      </div>
      <div className='pb-5 px-2 mb-5 d-flex justify-content-center'>
        <div className='text-center travelars_box'>
                        <img src={img4} alt="" className='w-100'/>
                        <div className='d-flex justify-content-center tranform'>
                            <img src={davis} alt="davis" />
                        </div>
                        <p className='ff_montserrat fw_600 fs_24 cl_011736 mb-1'>Raju Mullah</p>
                        <p className='ff_montserrat fw_500 fs_16 cl_011736 pb-4'>@rajumulllah</p>
                    </div>
      </div>
    </Slider>
        </Container>
    </>
  )
}

export default Besttravelars