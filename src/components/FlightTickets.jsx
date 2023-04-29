import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import popularflight from '../assets/image/png/AirDelivery.png'
import ecnomy from '../assets/image/png/economy.png'

const FlightTickets = () => {
  return (
    <>
        <section className='bg_darkblue'>
            <Container>
                <Row className='pt-5'>
                    <Col md={6} className='p-4'>
                        <p className='ff_montserrat fw_700 fs_40 cl_white w_450'>Book Popular Flight Tickets</p>
                        <p className='ff_montserrat fw_400 fs_16 cl_graylight w_450 mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                        <img src={popularflight} alt="Air Delivery" className='w_100 '/>
                    </Col>
                    <Col md={6} className='pb-5'>
                        <img src={ecnomy} alt="" className='w-100'/>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default FlightTickets