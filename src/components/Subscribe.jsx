import React from 'react'
import { Button, Container } from 'react-bootstrap'


const Subscribe = () => {
  return (
    <>
        <section className='subscribebox'>
            <Container>
                <div className='d-flex flex-column align-items-center  justify-content-center h_430'>
                    <p className='ff_montserrat fw_700 fs_40 cl_011736 text-center w_500'>Subscribe Newsletter &  get letest news</p>    
                    <div className='emailinput mt-4'>
                        <input type="email" placeholder=' Enter your email address' className='inputtext w-100'/>
                        <button className='btn_sub'>Subscribe</button>                       
                    </div>
                </div>
            </Container>    
        </section>
        
    </>
  )
}

export default Subscribe