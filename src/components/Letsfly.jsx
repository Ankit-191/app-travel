import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import newyorkgroup from '../assets/image/png/newyorkgroup.png'
import Bluebtn from './Bluebtn'

const Letsfly = () => {
  return (
    <>
        <Container className='pb-5'>
            <Row className='py-5 align-items-center'>
                <Col lg={6}>
                    <img src={newyorkgroup} alt="newyork" className='w-100'/>                                     
                </Col>
                <Col lg={6}>
                    <div className='d-flex align-items-center mt-4 mt-lg-0'>
                        <p className='ff_montserrat fw_900 fs_20 cl_bluelight mb-3'>Let’s Fly</p><p className='line ms-2'></p>
                    </div>
                    <p className='ff_montserrat fw_700 fs_32 cl_lightblack mb-4'>It’s one of the leading online flight booking platforms in the world</p>
                    <ul className='pt-3 dotline_before position-relative'>
                        <li className='ff_montserrat fw_500 fs_16 cl_lightblack bluecircle'>
                            Contrary to popular belief, Lorem Ipsum is not simply random text
                        </li>
                        <li className='ff_montserrat fw_500 fs_16 cl_lightblack bluecircle pt_10'>
                           If you are going to use a passage of Lorem Ipsum
                        </li>
                        <li className='ff_montserrat fw_500 fs_16 cl_lightblack bluecircle pt_10'>
                            Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                        </li>
                        <li className='ff_montserrat fw_500 fs_16 cl_lightblack bluecircle pt_10'>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </li>
                    </ul>
                    <div>
                        <Bluebtn bluetext="Book Now"/>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Letsfly