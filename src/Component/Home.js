import React from 'react'
import { Link } from 'react-router-dom'
import Data from './data.json'

function Home() {
    return (
        <>
            <section className='container py-5'>
                <div className='row '>
                    <div className='col-lg-7 ps-4'>
                        <img src={require('../images/banner-1.png')} className='imgb' />
                    </div>

                    <div className='col-lg-5 second-banner'>
                        <img src={require('../images/banner-2.png')} className='img2' />
                        <img src={require('../images/banner-3.png')} className='img3' />
                    </div>
                </div>
                <div className='row py-3 bg-white my-5'>
                    <div className='col-lg-3'>
                        <div className='ps-4 d-flex align-items-center'>
                            <i class="bi bi-cart banner-brand"></i>
                            <div className='pt-3 ps-3'><span className='banner-cont'>Free Shipping</span>
                                <p className='banner-scont'>When ordering over $100</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'><div className='ps-4 d-flex align-items-center'>
                        <i class="bi bi-arrow-repeat banner-brand"></i>
                        <div className='pt-3 ps-3'><span className='banner-cont'>Free Return</span>
                            <p className='banner-scont'>When ordering over $100</p>
                        </div>
                    </div>
                    </div>
                    <div className='col-lg-3'><div className='ps-4 d-flex align-items-center'>
                        <i class="bi bi-file-lock banner-brand"></i>
                        <div className='pt-3 ps-3'><span className='banner-cont'>Secure Payment</span>
                            <p className='banner-scont'>When ordering over $100</p>
                        </div>
                    </div>
                    </div>
                    <div className='col-lg-3'><div className='ps-4 d-flex align-items-center'>
                        <i class="bi bi-trophy banner-brand"></i>
                        <div className='pt-3 ps-3'><span className='banner-cont'>Best Quality</span>
                            <p className='banner-scont'>When ordering over $100</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <h2 className='bolder pb-5'>Gamer world</h2>
                    <h5 className='bolder '> <Link class="nav-link" to="/products">view more<i class="ps-2 bi bi-arrow-right"></i></Link></h5>
                </div>
                <div className='row'>

                    <div className='col-lg-3 col-sm-6'>
                        <div className='position-relative smcontb'>
                            <img src={require('../images/section-category-1.jpg')} />
                            <div className='position-absolute mid-banner'>
                                <ul className='none '>
                                    <span className='banner-cont'>Mobile & Tablet</span>
                                    <li className='Footer-links'> Xioami</li>
                                    <li className='Footer-links'> Apple</li>
                                    <li className='Footer-links'> Google</li>
                                    <li className='Footer-links'> Samsung</li>
                                    <li className='Footer-links'>Shop Now</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {
                        Data.slice(0, 3).map(a => {
                            return (

                                <div className='col-lg-3 col-sm-6 mt-3 ' >

                                    <div className=' bg-white product-content py-4 border'>
                                        <Link to={`single/${a.id}`}>
                                            <div className='img-box px-3'>   <img src={a.images} className='border product-img' /></div>
                                            <div className='pt-5 '>
                                                <i class="bi bi-star-fill brand"></i><i class="bi bi-star-fill brand"></i><i class="bi bi-star-fill brand"></i><i class="bi bi-star-fill brand"></i></div>
                                            <div className='product-title'> <p className='product-cont pt-1'>{a.title} </p></div>
                                            <p className='price pb-1'>$18</p>
                                        </Link>
                                        <button className=' addtocart'> Add To Cart</button>
                                    </div>

                                </div>

                            )
                        })



                    }
                </div>
                <h2 className='py-5 bolder'>Shop by Brand</h2>
                <div className='row bg-white py-5 px-5 '>
                    <div className='col-lg-2 col-sm-6 pb-5 border-bottom  border-end pt-5  '>
                        <img src={require('../images/brand-1.png')} />
                    </div>
                    <div className='col-lg-2  col-sm-6 border-bottom border-end pt-5 ps-5 b-right  border-bottom'><img src={require('../images/brand-12.png')} /></div>
                    <div className='col-lg-2  col-sm-6 border-bottom border-end pt-5 ps-5 pb-5  border-bottom '><img src={require('../images/brand-2.png')} /></div>
                    <div className='col-lg-2  col-sm-6 border-bottom border-end pt-5 ps-5 b-right  border-bottom'><img src={require('../images/brand-3.png')} /></div>
                    <div className='col-lg-2 col-sm-6 border-bottom border-end pt-5 ps-3  border-bottom '><img src={require('../images/brand-4.png')} /></div>
                    <div className='col-lg-2 col-sm-6 border-bottom facebook pt-5 ps-5 pb-5  '><img src={require('../images/brand-5.png')} /></div>
                    <div className='col-lg-2 col-sm-6 pt-5 border-end pb-5  b-bottom'><img src={require('../images/brand-6.png')} /></div>
                    <div className='col-lg-2 col-sm-6 pt-5 border-end pb-5 ps-5 pb-5 b-right  b-bottom'><img src={require('../images/brand-7.png')} /></div>
                    <div className='col-lg-2 col-sm-6 pt-5 border-end pb-5 ps-5  b-bottom '><img src={require('../images/brand-8.png')} /></div>
                    <div className='col-lg-2 col-sm-6 pt-5 border-end pb-5 ps-5 b-right  b-bottom  '><img src={require('../images/brand-9.png')} /></div>
                    <div className='col-lg-2 col-sm-6 pt-5 border-end pb-5 ps-5 '><img src={require('../images/brand-10.png')} /></div>
                    <div className='col-lg-2 col-sm-6 pt-5 ps-5 '><img src={require('../images/brand-11.png')} /></div>
                </div>

                <div className='d-flex justify-content-between align-items-center py-5'>
                    <h2 className='bolder '>Best Saller</h2>
                    <h5 className='bolder '> <Link class="nav-link" to="/products">view more<i class="ps-2 bi bi-arrow-right"></i></Link></h5>
                </div>
                <div className='row py-5'>



                    <div className='col-lg-2 '>
                        <div className='rounded-circle bg-white pt-5 px-5 pb-4'>
                            <img src={require('../images/saller-1.png')} />
                        </div>
                    </div>
                    <div className='col-lg-2 '>
                        <div className='rounded-circle bg-white py-5  ps-4 pe-5'>
                            <img src={require('../images/saller-2.png')} />
                        </div>
                    </div>
                    <div className='col-lg-2 '>
                        <div className='rounded-circle bg-white pt-5 px-5 pb-5'>
                            <img src={require('../images/saller-3.png')} />
                        </div>
                    </div>
                    <div className='col-lg-2 '>
                        <div className='rounded-circle bg-white pt-5 px-5 pb-5'>
                            <img src={require('../images/saller-4.png')} />
                        </div>
                    </div>
                    <div className='col-lg-2 '>
                        <div className='rounded-circle bg-white pt-5 px-5 pb-5 pe-4'>
                            <img src={require('../images/saller-5.png')} />
                        </div>
                    </div>
                    <div className='col-lg-2 '>
                        <div className='rounded-circle bg-white pt-5 ps-4 pb-5 pe-5'>
                            <img src={require('../images/saller-6.png')} />
                        </div>
                    </div>

                </div>




                <div className='d-flex justify-content-between align-items-center'>
                    <h2 className='bolder pb-5'>Gamer world</h2>
                    <h5 className='bolder '> <Link class="nav-link" to="/products">view more<i class="ps-2 bi bi-arrow-right"></i></Link></h5>
                </div>
                <div className='row py-5'>

                    <div className='col-lg-3 col-sm-6'>
                        <div className='position-relative smcontb'>
                            <img src={require('../images/section-category-2.jpg')} />
                            <div className='position-absolute mid-banner'>
                                <ul className='none '>
                                    <span className='banner-cont'>Mobile & Tablet</span>
                                    <li className='Footer-links'> Xioami</li>
                                    <li className='Footer-links'> Apple</li>
                                    <li className='Footer-links'> Google</li>
                                    <li className='Footer-links'> Samsung</li>
                                    <li className='Footer-links'>Shop Now</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {
                        Data.slice(0, 3).map(a => {
                            return (

                                <div className='col-lg-3 col-sm-6 mt-3 ' >

                                    <div className=' bg-white product-content py-4 border'>
                                        <Link to={`single/${a.id}`}>
                                            <div className='img-box px-3'>   <img src={a.images} className='border product-img' /></div>
                                            <div className='pt-5 '>
                                                <i class="bi bi-star-fill brand"></i><i class="bi bi-star-fill brand"></i><i class="bi bi-star-fill brand"></i><i class="bi bi-star-fill brand"></i></div>
                                            <div className='product-title'> <p className='product-cont pt-1'>{a.title} </p></div>
                                            <p className='price pb-1'>$18</p>
                                        </Link>
                                        <button className=' addtocart'> Add To Cart</button>
                                    </div>

                                </div>

                            )
                        })



                    }
                </div>
                <div className='d-flex justify-content-between align-items-center py-5'>
                    <h2 className='bolder '>New Arrivals</h2>
                    <h5 className='bolder '> <Link class="nav-link" to="/products">view more<i class="ps-2 bi bi-arrow-right"></i></Link></h5>
                </div>
                <div className='row py-5'>



                    {
                        Data.slice(0, 20).map(a => {
                            return (

                                <div className='col-lg-3 col-sm-6 mt-3 ' >

                                    <div className=' bg-white product-content py-4 border'>
                                        <Link to={`/single/${a.id}`}>
                                            <div className='img-box px-3'>   <img src={a.images} className='border product-img' /></div>
                                            <div className='pt-5 '>
                                                <i class="bi bi-star-fill brand"></i><i class="bi bi-star-fill brand"></i><i class="bi bi-star-fill brand"></i><i class="bi bi-star-fill brand"></i></div>
                                            <div className='product-title'> <p className='product-cont pt-1'>{a.title} </p></div>
                                            <p className='price pb-1'>$18</p>
                                        </Link>
                                        <button className=' addtocart'> Add To Cart</button>
                                    </div>

                                </div>

                            )
                        })



                    }

                </div>
            </section>
            

            
           

             
        </>
    )
}

export default Home
