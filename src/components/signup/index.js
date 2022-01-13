import React from 'react'
import Logo from '../../assests/graphics/file 01-1.png'
import { GiPhone, GiRotaryPhone } from 'react-icons/gi'
import { Button } from 'react-bootstrap'

const index = () => {
  return (
    <div className='d-flex align-item-center justify-content-center'>
      <div className='mt-5 shadow'>
        <div className='row'>
          <div className='col-8 d-flex align-items-center justify-content-center'>
            <img className='w-50' src={Logo} alt='logo' />
          </div>
          <div className='col-4 d-flex align-items-center justify-content-center'>
            <span className='text-center d-inline-block text-success'>My Registery</span>
          </div>
        </div>
        <form>
          <div className='m-lg-3 px-lg-5'>
            <h3 className='text-center text-success font-weight-bold'>MY LOOKUP INFORMATION</h3>
            <div className='d-flex flex-column align-item-center justify-content-center'>
              <div class="row d-flex align-items-center justify-content-center">
                <div class="col-md-5 col-sm-8 col-8 m-2 border border-secondary rounded d-flex">
                  <GiRotaryPhone fontSize={25} className='text-success'/>
                  <input type="text" class="form-control border-0" placeholder="Full name" />
                </div>
                <div class="col-md-5 col-sm-8 col-8 m-2 border border-secondary rounded d-flex">
                  <GiPhone fontSize={25} className='text-success'/>
                  <input type="text" class="form-control border-0" placeholder="Twitter Handle" />
                </div>
              </div>
              <div class="row d-flex align-items-center justify-content-center">
                <div class="col-md-5 m-2 col-sm-8 col-8 border border-secondary rounded d-flex">
                  <GiRotaryPhone fontSize={25} className='text-success'/>
                  <input type="text" class="form-control border-0" placeholder="Phone Number" />
                </div>
                <div class="col-md-5 m-2 col-sm-8 col-8 border border-secondary rounded d-flex">
                  <GiPhone fontSize={25} className='text-success'/>
                  <input type="text" class="form-control border-0" placeholder="Twitch Hnadle" />
                </div>
              </div>
              <div class="row d-flex align-items-center justify-content-center">
                <div class="col-md-5 m-2 col-sm-8 col-8 border border-secondary rounded d-flex">
                  <GiRotaryPhone fontSize={25} className='text-success' />
                  <input type="text" class="form-control border-0" placeholder=" Instagram Hnadle" />
                </div>
                <div class="col-md-5 m-2 col-sm-8 col-8 border border-secondary rounded d-flex">
                  <GiPhone fontSize={25} className='text-success'className='text-success'/>
                  <input type="text" class="form-control border-0" placeholder="Tiktok Hnadle" />
                </div>
              </div>
              <div class="row py-4 d-flex align-items-center justify-content-center">
                <Button variant="success" className='col-6'>Save</Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default index
