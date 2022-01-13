import React from 'react'
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import headerIllustration from '../../assests/graphics/Header Illustrations.svg'
import logo from '../../assests/graphics/file 041-1.png'
import { Login } from './style'
import { GiLockedBox, GiLockers, GiPhone } from 'react-icons/gi';

const index = () => {
  return (
    <>
      <Row className="vh-100">
        <Col xs='12' sm='12' md="6" lg="6" className='bg-primary'>
          <div className='d-flex align-items-center justify-content-center'>
            <div className='row d-flex align-items-center justify-content-center'>
              <div className='col-10 d-flex align-items-center justify-content-md-start justify-content-center'>
                <img src={logo} alt='' className='w-50' />
              </div>
              <div className='col-10'>
                <img src={headerIllustration} alt='' className='w-100' />
              </div>
            </div>
          </div>
        </Col>

        <Col xs='12' sm='12' md="6" lg="6">
          <div className='d-flex align-item-center justify-content-center'>
            <div className='container'>
              <form className='my-5'>
                <div>
                  <h3 className='text-center text-success font-weight-bold'>LOGIN NOW</h3>
                  <p className='text-center text-success font-weight-bold'>Enter Your Login Details</p>
                  <div className='d-flex flex-column align-item-center justify-content-center'>
                    <div class="row d-flex align-items-center justify-content-center">
                      <div class="col-lg-6 col-md-8 col-sm-6 col-8 m-2 border border-secondary rounded d-flex">
                        <GiPhone fontSize={25} className='text-success' className='text-success' />
                        <input type="text" class="form-control border-0" placeholder="Twitter Handle" />
                      </div>
                    </div>
                    <div class="row d-flex align-items-center justify-content-center">
                      <div class="col-lg-6 col-md-8 col-sm-6 col-8 m-2 border border-secondary rounded d-flex">
                        <GiLockers fontSize={25} className='text-success' className='text-success' />
                        <input type="text" class="form-control border-0" placeholder="Twitter Handle" />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-6 d-flex align-items-center justify-content-center'>
                        <input type="checkbox" />
                        <span>Remember Me</span>
                      </div>
                      <div className='col-6 d-flex align-items-center justify-content-center'>
                        <span className='text-end d-inline-block font-italic'>Forgot Password</span>
                      </div>
                    </div>
                    <div class="row py-2 d-flex align-items-center justify-content-center">
                      <Button variant="success" className='col-4'>LOGIN</Button>
                    </div>
                    <div class="row d-flex align-items-center justify-content-center">
                      <div style={{ width: '50%', height: '20px', borderBottom: '1px solid black', textAlign: 'center' }}>
                        <span style={{ fontSize: '10px', backgroundColor: 'white', paddingRight: '10px', paddingLeft: '10px' }}>
                          Don't Have an Account
                        </span>
                      </div>
                    </div>
                    <div class="row py-3 d-flex align-items-center justify-content-center">
                      <Button variant="success" className='col-4'>SIGNUP</Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default index
