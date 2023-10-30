import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import {AiOutlineHome} from 'react-icons/ai';
import {BiPhoneCall} from 'react-icons/bi';
import {AiOutlineMail} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"}/>
      <BreadCrumb title="Contact Us"/>
      <div className='contact-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6707.259947118187!2d74.88711590000001!3d32.8020693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e814c66911587%3A0x315bac25dddbfc0c!2sIIT%20Jammu%20North%20Block!5e0!3m2!1sen!2sin!4v1697778334334!5m2!1sen!2sin" width="600" height="450" className="border-0 w-100" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contact-title mb-4'>Contact</h3>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input type="text" className='form-control' placeholder='Name'/>
                    </div>
                    <div>
                      <input type="text" className='form-control' placeholder='Email'/>
                    </div>
                    <div>
                      <input type="text" className='form-control' placeholder='Mobile Number'/>
                    </div>
                    <div>
                      <textarea name="" id="" cols="30" rows="10" className='w-100 form-control' placeholder='Comment'/>
                    </div>
                    <div>
                      <button className='button'>Submit</button> 
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className='contact-title'>Get in touch with Us</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                         <AiOutlineHome className='fs-5'/>
                         <address className='mb-0'>
                            GS : 850 Near Yamuna River Front,
                            Noida, Uttar Pradesh
                            Pin Code: 131103
                          </address>
                         
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiPhoneCall className='fs-5'/>
                        <a href="tel:+91 9301763998">+91 9301763998</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineMail className='fs-5'/>
                        <a href="mailto:arjav@gmail.com">
                          arjav@gmail.com
                        </a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BsInfoCircle className='fs-5'/>
                        <p className='mb-0'>Monday - Friday 10 AM - 8 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Contact


