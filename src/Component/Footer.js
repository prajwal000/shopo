import React from 'react'

function Footer() {
    return (
        <>
            <div className='container nomob'>
                <img src={require('../images/discount-banner-1.jpeg')} className='discount-images' height='220px' />
                <div className='position-relative container'>
                    <div className='position-absolute footer-banner-position'>
                        <div className='ps-5'>
                            <h3 className='fw-bolder'>Get <span className='discountnum'> 20%</span> Off Discount Coupon</h3>
                            <p className='fw-bolder discountdet'>by Subscribe our Newsletter</p>
                        </div>
                        <form className='d-flex'>
                            <input className="form-control footermail" type="email" placeholder='Email Address' aria-label="Search" />
                            <button className="btn btn-footer" type="submit">Search</button>
                        </form>
                    </div>

                </div>
            </div>
            <div className='container img-footer'>
                <img src='https://shopo.quomodothemes.website/assets/images/logo.svg' className='py-5' />
            </div>
            <footer className='container py-5'>
                <div className='row pb-5 border-bottom'>
                    <div className='col-lg-3'>

                        <h5 className='pb-3'>About us</h5>
                        <p className='footer-c '> We know there are a lot of threa developers our but we pride into a firm in the industry.</p>

                    </div>
                    <div className='col-lg-3'>
                        <h5 className='ps-4 pb-3'> Feature</h5>
                        <ul className='none'>
                            <li className='pb-2'>
                                <a className='Footer-links'>About us</a>
                            </li>
                            <li className='pb-2'>
                                <a className='Footer-links'>terms & condition</a>
                            </li>
                            <li>
                                <a className='Footer-links'>Best products</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-lg-3'>
                        <h5 className='ps-4 pb-3'> General links</h5>
                        <ul className='none'>
                            <li className='pb-2'>
                                <a className='Footer-links'>Blog</a>
                            </li>
                            <li className='pb-2'>
                                <a className='Footer-links'>Tracking Order</a>
                            </li>
                            <li>
                                <a className='Footer-links'>Become Seller</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-lg-3'>
                        <h5 className='ps-4 pb-3'> Helpful</h5>
                        <ul className='none'>
                            <li className='pb-2'>
                                <a className='Footer-links'>Flash sale</a>
                            </li>
                            <li className='pb-2'>
                                <a className='Footer-links'>FAQ</a>
                            </li>
                            <li>
                                <a className='Footer-links'>Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='text-center'>
                    <a className='Footer-links pe-2'><i class="bi bi-facebook"></i></a>
                    <a className='Footer-links pe-2'><i class="bi bi-instagram"></i></a>
                    <a className='Footer-links pe-5'><i class="bi bi-youtube"></i></a>
                    <span className='Footer-links'>©2022QuomodosoftAll rights reserved</span>
                </div>
            </footer>
        </>
    )
}

export default Footer
