import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import airoplane from '../assets/image/png/group.png'
import shadow from '../assets/image/png/airoplane-shadow.png'
import map from '../assets/image/png/Map.png'
import logo from '../assets/image/png/logo.png'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { GiCrossedBones } from "react-icons/gi";


const Hero = () => {
    const [first, setfirst] = useState(true);
  function showUl() {
    setfirst(!first);
  }
  if (!first) {
    document.body.classList.add("overflow-hidden")
  }
  else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <section className='bgcl_linear_header pb-5'>
        <Container className=" pt-4 ">         
          <div className="d-flex  align-items- center justify-content-between">
            <div className="d-flex align-items-center pt_27 position-relative z_3">
              <img src={logo} alt="logo" />
              <a href="#" className='ff_montserrat fw_800 fs_22 cl_white ps-2'>FT PLANE</a>
            </div>
            <div className=" d-lg-none z_3">
              <h2 onClick={showUl} className='cl_white'>
                {first ? <HiOutlineMenuAlt3 /> : <GiCrossedBones />}
              </h2>
            </div>
            <div
              className={
                first
                  ? "d-flex align-items-center mob_view"
                  : " d-flex align-items-center mob_view nav_left0"
              }>
              <ul className="d-flex align-items-center gap-5 pt_30 sm_view">
                <li>
                <a href="#" className='ff_montserrat fw_600 fs_16 cl_white underline position-relative'>All Flight</a>
              </li>
              <li>
                <a href="#" className='ff_montserrat fw_600 fs_16 cl_white underline position-relative'>Schedule</a>
              </li>
              <li>
                <a href="#" className='ff_montserrat fw_600 fs_16 cl_white underline position-relative'>Passengers</a>
              </li>
              <li>
                <a href="#" className='ff_montserrat fw_600 fs_16 cl_white underline position-relative'>Your Orders</a>
              </li>
              <li>
                <a href="#" className='ff_montserrat fw_600 fs_16 cl_white btn_letfly'>Let’s Fly</a>
              </li>
              </ul>
            </div>
          </div>
        </Container>

       <Container className='pb-5 overflow-hidden'>
        
        <div className='position-absolute z_neg2'>
          <img className='w-100' src={map} alt="map" />
        </div>
          <div className='d-flex flex-column align-items-center pt-5'>  
          <div className='position-relative'>
            <p className='ff_montserrat fw_900 fs_117 text_aviation position-absolute'>AVIATION</p>
            <img className='z-index_1 airoplaneani' src={airoplane} alt="airoplane" />
            <img className='shadow_position w-100 ' src={shadow} alt="shadow"/>
          </div>          
            <p className='ff_montserrat fw_700 fs_48 cl_white pt-4 mb-2'>Travel Around The World</p>
            <p className='ff_montserrat fw_400 fs_12 cl_white mb-5 pb-5'>One of the advantages of being disorganized is that one is always having surprising discoveries</p>
          </div>
       </Container>
      </section> 
    </>
  )
}

export default Hero