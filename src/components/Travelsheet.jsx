import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Bluebtn from './Bluebtn';

const Travelsheet = () => {
  return (
    <>
    <Container>
    <Tabs defaultActiveKey="economy" id="fill-tab-example"  className="" fill>
      <Tab eventKey="economy" title="Economy">
        <Row>
          <Col lg={3} sm={6} className='pt-4 pt-lg-0'>
                <div className='d-flex pb-4 pt_40   ps-3 ps-lg-0 justify-content-lg-center '>
                  <span>
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="28" cy="28" r="28" fill="#313EF7" fill-opacity="0.05"/>
                      <path d="M27.9989 29.4314C29.722 29.4314 31.1189 28.0345 31.1189 26.3114C31.1189 24.5883 29.722 23.1914 27.9989 23.1914C26.2758 23.1914 24.8789 24.5883 24.8789 26.3114C24.8789 28.0345 26.2758 29.4314 27.9989 29.4314Z" stroke="#030522" stroke-width="1.5"/>
                      <path d="M19.6217 24.49C21.5917 15.83 34.4217 15.84 36.3817 24.5C37.5317 29.58 34.3717 33.88 31.6017 36.54C29.5917 38.48 26.4117 38.48 24.3917 36.54C21.6317 33.88 18.4717 29.57 19.6217 24.49Z" stroke="#030522" stroke-width="1.5"/>
                    </svg>
                  </span>
                  <div className='ps-2'>
                    <p className='mb-0 ff_montserrat fw_600 fs_18 cl_lightblack'>Location</p>
                    <p className='ff_montserrat fw_400 fs_16 cl_gray'>Where are you going?</p>
                  </div>
                </div>
          </Col>
          <Col lg={3} sm={6} className='pt-sm-4 pt-lg-0'>
                <div className='d-flex pb-4 pt_40  ps-3 ps-sm-0 justify-content-lg-center'>
                  <span>
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="28" cy="28" r="28" fill="#313EF7" fill-opacity="0.05"/>
                      <path d="M28.6786 19.96C29.1586 20.67 29.4386 21.52 29.4386 22.44C29.4286 24.84 27.5386 26.79 25.1586 26.87C25.0586 26.86 24.9386 26.86 24.8286 26.87C22.4486 26.79 20.5586 24.84 20.5586 22.44C20.5586 19.99 22.5386 18 24.9986 18" stroke="#030522" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M32.4112 20C34.3512 20 35.9112 21.57 35.9112 23.5C35.9112 25.39 34.4113 26.93 32.5413 27C32.4613 26.99 32.3713 26.99 32.2812 27" stroke="#030522" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M20.1588 30.56C17.7387 32.18 17.7387 34.82 20.1588 36.43C22.9088 38.27 27.4188 38.27 30.1688 36.43C32.5888 34.81 32.5888 32.17 30.1688 30.56C27.4288 28.73 22.9188 28.73 20.1588 30.56Z" stroke="#030522" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M34.3398 36C35.0598 35.85 35.7398 35.56 36.2998 35.13C37.8598 33.96 37.8598 32.03 36.2998 30.86C35.7498 30.44 35.0798 30.16 34.3698 30" stroke="#030522" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <div className='ps-2'>
                    <p className='mb-0 ff_montserrat fw_600 fs_18 cl_lightblack'>Travelers</p>
                    <p className='ff_montserrat fw_400 fs_16 cl_gray'>Add guest</p>
                  </div>
                </div>
          </Col>
          <Col lg={3} sm={6}>
                <div className='d-flex pb-4 pt_40  ps-3 ps-lg-0  justify-content-lg-center'>
                  <span>
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="28" cy="28" r="28" fill="#313EF7" fill-opacity="0.05"/>
                      <path d="M24 18V21" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M32 18V21" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M19.5 25.0898H36.5" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M19 29.01V24.5C19 21.5 20.5 19.5 24 19.5H32C35.5 19.5 37 21.5 37 24.5V33C37 36 35.5 38 32 38H24C20.5 38 19 36 19 33" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M27.9941 29.6992H28.0031" stroke="#030522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M24.2949 29.6992H24.3039" stroke="#030522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M24.2949 32.6992H24.3039" stroke="#030522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <div className='ps-2'>
                    <p className='mb-0 ff_montserrat fw_600 fs_18 cl_lightblack'>Check-in</p>
                    <p className='ff_montserrat fw_400 fs_16 cl_gray'>Add date</p>
                  </div>
                </div>
          </Col>
          <Col lg={3} sm={6}>
                <div className='d-flex pb-4 pt_40  ps-3 ps-sm-0 justify-content-lg-center'>
                  <span>
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="28" cy="28" r="28" fill="#313EF7" fill-opacity="0.05"/>
                      <path d="M24 18V21" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M32 18V21" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M19.5 25.0898H36.5" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M19 29.01V24.5C19 21.5 20.5 19.5 24 19.5H32C35.5 19.5 37 21.5 37 24.5V33C37 36 35.5 38 32 38H24C20.5 38 19 36 19 33" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M27.9941 29.6992H28.0031" stroke="#030522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M24.2949 29.6992H24.3039" stroke="#030522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M24.2949 32.6992H24.3039" stroke="#030522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <div className='ps-2'>
                    <p className='mb-0 ff_montserrat fw_600 fs_18 cl_lightblack'>Check-out</p>
                    <p className='ff_montserrat fw_400 fs_16 cl_gray'>Add date</p>
                  </div>
                </div>
          </Col>
          <div className='d-flex justify-content-center mb-5'>
            <Bluebtn bluetext="Book Now"/>
          </div>
        </Row>
      </Tab>
      <Tab eventKey="busniness" title="Busniness ">
         <Row>
          <Col lg={3} sm={6} className='pt-4 pt-lg-0'>
                <div className='d-flex pb-4 pt_40   ps-3 ps-lg-0 justify-content-lg-center '>
                  <span>
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="28" cy="28" r="28" fill="#313EF7" fill-opacity="0.05"/>
                      <path d="M27.9989 29.4314C29.722 29.4314 31.1189 28.0345 31.1189 26.3114C31.1189 24.5883 29.722 23.1914 27.9989 23.1914C26.2758 23.1914 24.8789 24.5883 24.8789 26.3114C24.8789 28.0345 26.2758 29.4314 27.9989 29.4314Z" stroke="#030522" stroke-width="1.5"/>
                      <path d="M19.6217 24.49C21.5917 15.83 34.4217 15.84 36.3817 24.5C37.5317 29.58 34.3717 33.88 31.6017 36.54C29.5917 38.48 26.4117 38.48 24.3917 36.54C21.6317 33.88 18.4717 29.57 19.6217 24.49Z" stroke="#030522" stroke-width="1.5"/>
                    </svg>
                  </span>
                  <div className='ps-2'>
                    <p className='mb-0 ff_montserrat fw_600 fs_18 cl_lightblack'>Location</p>
                    <p className='ff_montserrat fw_400 fs_16 cl_gray'>Where are you going?</p>
                  </div>
                </div>
          </Col>
          <Col lg={3} sm={6} className='pt-sm-4 pt-lg-0'>
                <div className='d-flex pb-4 pt_40  ps-3 ps-sm-0 justify-content-lg-center'>
                  <span>
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="28" cy="28" r="28" fill="#313EF7" fill-opacity="0.05"/>
                      <path d="M28.6786 19.96C29.1586 20.67 29.4386 21.52 29.4386 22.44C29.4286 24.84 27.5386 26.79 25.1586 26.87C25.0586 26.86 24.9386 26.86 24.8286 26.87C22.4486 26.79 20.5586 24.84 20.5586 22.44C20.5586 19.99 22.5386 18 24.9986 18" stroke="#030522" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M32.4112 20C34.3512 20 35.9112 21.57 35.9112 23.5C35.9112 25.39 34.4113 26.93 32.5413 27C32.4613 26.99 32.3713 26.99 32.2812 27" stroke="#030522" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M20.1588 30.56C17.7387 32.18 17.7387 34.82 20.1588 36.43C22.9088 38.27 27.4188 38.27 30.1688 36.43C32.5888 34.81 32.5888 32.17 30.1688 30.56C27.4288 28.73 22.9188 28.73 20.1588 30.56Z" stroke="#030522" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M34.3398 36C35.0598 35.85 35.7398 35.56 36.2998 35.13C37.8598 33.96 37.8598 32.03 36.2998 30.86C35.7498 30.44 35.0798 30.16 34.3698 30" stroke="#030522" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <div className='ps-2'>
                    <p className='mb-0 ff_montserrat fw_600 fs_18 cl_lightblack'>Travelers</p>
                    <p className='ff_montserrat fw_400 fs_16 cl_gray'>Add guest</p>
                  </div>
                </div>
          </Col>
          <Col lg={3} sm={6}>
                <div className='d-flex pb-4 pt_40  ps-3 ps-lg-0  justify-content-lg-center'>
                  <span>
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="28" cy="28" r="28" fill="#313EF7" fill-opacity="0.05"/>
                      <path d="M24 18V21" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M32 18V21" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M19.5 25.0898H36.5" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M19 29.01V24.5C19 21.5 20.5 19.5 24 19.5H32C35.5 19.5 37 21.5 37 24.5V33C37 36 35.5 38 32 38H24C20.5 38 19 36 19 33" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M27.9941 29.6992H28.0031" stroke="#030522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M24.2949 29.6992H24.3039" stroke="#030522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M24.2949 32.6992H24.3039" stroke="#030522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <div className='ps-2'>
                    <p className='mb-0 ff_montserrat fw_600 fs_18 cl_lightblack'>Check-in</p>
                    <p className='ff_montserrat fw_400 fs_16 cl_gray'>Add date</p>
                  </div>
                </div>
          </Col>
          <Col lg={3} sm={6}>
                <div className='d-flex pb-4 pt_40  ps-3 ps-sm-0 justify-content-lg-center'>
                  <span>
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="28" cy="28" r="28" fill="#313EF7" fill-opacity="0.05"/>
                      <path d="M24 18V21" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M32 18V21" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M19.5 25.0898H36.5" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M19 29.01V24.5C19 21.5 20.5 19.5 24 19.5H32C35.5 19.5 37 21.5 37 24.5V33C37 36 35.5 38 32 38H24C20.5 38 19 36 19 33" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M27.9941 29.6992H28.0031" stroke="#030522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M24.2949 29.6992H24.3039" stroke="#030522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M24.2949 32.6992H24.3039" stroke="#030522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <div className='ps-2'>
                    <p className='mb-0 ff_montserrat fw_600 fs_18 cl_lightblack'>Check-out</p>
                    <p className='ff_montserrat fw_400 fs_16 cl_gray'>Add date</p>
                  </div>
                </div>
          </Col>
          <div className='d-flex justify-content-center mb-5'>
            <Bluebtn bluetext="Book Now"/>
          </div>
        </Row>
      </Tab>
      <Tab eventKey="first" title="First">
         <Row>
          <Col lg={3} sm={6} className='pt-4 pt-lg-0'>
                <div className='d-flex pb-4 pt_40  ps-3 ps-lg-0 justify-content-lg-center '>
                  <span>
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="28" cy="28" r="28" fill="#313EF7" fill-opacity="0.05"/>
                      <path d="M27.9989 29.4314C29.722 29.4314 31.1189 28.0345 31.1189 26.3114C31.1189 24.5883 29.722 23.1914 27.9989 23.1914C26.2758 23.1914 24.8789 24.5883 24.8789 26.3114C24.8789 28.0345 26.2758 29.4314 27.9989 29.4314Z" stroke="#030522" stroke-width="1.5"/>
                      <path d="M19.6217 24.49C21.5917 15.83 34.4217 15.84 36.3817 24.5C37.5317 29.58 34.3717 33.88 31.6017 36.54C29.5917 38.48 26.4117 38.48 24.3917 36.54C21.6317 33.88 18.4717 29.57 19.6217 24.49Z" stroke="#030522" stroke-width="1.5"/>
                    </svg>
                  </span>
                  <div className='ps-2'>
                    <p className='mb-0 ff_montserrat fw_600 fs_18 cl_lightblack'>Location</p>
                    <p className='ff_montserrat fw_400 fs_16 cl_gray'>Where are you going?</p>
                  </div>
                </div>
          </Col>
          <Col lg={3} sm={6} className='pt-sm-4 pt-lg-0'>
                <div className='d-flex pb-4 pt_40 ps-3 ps-sm-0 justify-content-lg-center'>
                  <span>
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="28" cy="28" r="28" fill="#313EF7" fill-opacity="0.05"/>
                      <path d="M28.6786 19.96C29.1586 20.67 29.4386 21.52 29.4386 22.44C29.4286 24.84 27.5386 26.79 25.1586 26.87C25.0586 26.86 24.9386 26.86 24.8286 26.87C22.4486 26.79 20.5586 24.84 20.5586 22.44C20.5586 19.99 22.5386 18 24.9986 18" stroke="#030522" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M32.4112 20C34.3512 20 35.9112 21.57 35.9112 23.5C35.9112 25.39 34.4113 26.93 32.5413 27C32.4613 26.99 32.3713 26.99 32.2812 27" stroke="#030522" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M20.1588 30.56C17.7387 32.18 17.7387 34.82 20.1588 36.43C22.9088 38.27 27.4188 38.27 30.1688 36.43C32.5888 34.81 32.5888 32.17 30.1688 30.56C27.4288 28.73 22.9188 28.73 20.1588 30.56Z" stroke="#030522" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M34.3398 36C35.0598 35.85 35.7398 35.56 36.2998 35.13C37.8598 33.96 37.8598 32.03 36.2998 30.86C35.7498 30.44 35.0798 30.16 34.3698 30" stroke="#030522" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <div className='ps-2'>
                    <p className='mb-0 ff_montserrat fw_600 fs_18 cl_lightblack'>Travelers</p>
                    <p className='ff_montserrat fw_400 fs_16 cl_gray'>Add guest</p>
                  </div>
                </div>
          </Col>
          <Col lg={3} sm={6}>
                <div className='d-flex pb-4 pt_40 ps-3 ps-lg-0  justify-content-lg-center'>
                  <span>
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="28" cy="28" r="28" fill="#313EF7" fill-opacity="0.05"/>
                      <path d="M24 18V21" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M32 18V21" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M19.5 25.0898H36.5" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M19 29.01V24.5C19 21.5 20.5 19.5 24 19.5H32C35.5 19.5 37 21.5 37 24.5V33C37 36 35.5 38 32 38H24C20.5 38 19 36 19 33" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M27.9941 29.6992H28.0031" stroke="#030522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M24.2949 29.6992H24.3039" stroke="#030522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M24.2949 32.6992H24.3039" stroke="#030522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <div className='ps-2'>
                    <p className='mb-0 ff_montserrat fw_600 fs_18 cl_lightblack'>Check-in</p>
                    <p className='ff_montserrat fw_400 fs_16 cl_gray'>Add date</p>
                  </div>
                </div>
          </Col>
          <Col lg={3} sm={6}>
                <div className='d-flex pb-4 pt_40 ps-3 ps-sm-0 justify-content-lg-center'>
                  <span>
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="28" cy="28" r="28" fill="#313EF7" fill-opacity="0.05"/>
                      <path d="M24 18V21" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M32 18V21" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M19.5 25.0898H36.5" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M19 29.01V24.5C19 21.5 20.5 19.5 24 19.5H32C35.5 19.5 37 21.5 37 24.5V33C37 36 35.5 38 32 38H24C20.5 38 19 36 19 33" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M27.9941 29.6992H28.0031" stroke="#030522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M24.2949 29.6992H24.3039" stroke="#030522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M24.2949 32.6992H24.3039" stroke="#030522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <div className='ps-2'>
                    <p className='mb-0 ff_montserrat fw_600 fs_18 cl_lightblack'>Check-out</p>
                    <p className='ff_montserrat fw_400 fs_16 cl_gray'>Add date</p>
                  </div>
                </div>
          </Col>
          <div className='d-flex justify-content-center mb-5'>
            <Bluebtn bluetext="Book Now"/>
          </div>
        </Row>
      </Tab>
    </Tabs>
    </Container>
    </>
  )
}

export default Travelsheet