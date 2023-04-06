import React from 'react'
import { Link } from 'react-router-dom'


function Contact() {

    return (
        <>
            <section className='aboutus-top-color'>
                <div className='container'>
                    <div className='d-flex py-4'> <Link class="nav-link " aria-current="page" to="/">Home</Link>/<Link class="nav-link " aria-current="page" to="/contact"> Contact Us</Link></div>
                    <div className='bolder py-5'> <h2 className='bolder text-center'>Contact us</h2></div>
                </div>
            </section>
            <section className='container py-5'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <h3>Contact Information</h3>
                        <p className='aboutus-c'>Fill the form below or write us .We will help you as soon as possible.</p>
                        <div className='d-flex'>
                            <div className='color-contact-1 p-5 me-5 '>
                                <span className='ps-5'><i class="bi bi-telephone-fill banner-brand-1"></i></span>
                                <h4>Phone</h4>
                                <span className='email'>
                                    <p>+(323) 9847 3847 383</p>
                                    <p> +(323) 9847 3847 383</p>
                                </span>
                            </div>
                            <div className='color-contact-2 p-5 ms-3'>
                                <span className='ps-5'><i class="bi bi-envelope-fill banner-brand-1"></i></span>
                                <h4>Email</h4>
                                <span className='email'>
                                    <p>Demoemail@gmail.com</p>
                                    <p> Demoemail@gmail.com</p>
                                </span>
                            </div>
                        </div>
                        <div className='map-c py-5 mt-4'>
                            <div>
                                <div className='d-flex align-items-center '>  <span className='ps-5'><i class="bi bi-telephone-fill map-brand-1"></i></span>
                                    <div className='ps-5'><h4>Address</h4>
                                        4517 Washington Ave. Manchester, Road 2342,<br />
                                        Kentucky 39495
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='bg-white py-3'>
                            <h2 className='text-center pb-3'>Get In Touch
                            </h2>
                            <div>
                                <form className='px-5'>
                                    <p className='text-in'>Name*</p><input type="text" name="first_name" className='text-input' />
                                    <p></p>
                                    <p className='text-in'>Email Address*</p><input type="email" name="last_name" className='text-input' />
                                    <p></p>
                                    <p className='text-in'>Subject*</p><input type="text" name="last_name" className='text-input' />
                                    <p></p>
                                    <p></p>
                                    <p className='text-in'>Subject*</p><textarea rows="4" cols="50" name="comment" form="usrform">
                                        Enter text here...</textarea>
                                        <button className="btn btn-footer my-3" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
