import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Aboutus() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>

      <section className='aboutus-top-color'>
        <div className='container'>
          <div className='d-flex py-4'> <Link class="nav-link " aria-current="page" to="/">Home</Link>/<Link class="nav-link " aria-current="page" to="/aboutus">About us</Link></div>
          <div className='bolder py-5'> <h2 className='bolder text-center'>About Us</h2></div>
        </div>
      </section>
      <section className='container py-5'>
        <div className='row'>
          <div className='col-lg-6'>
            <img src={require('../images/about-banner.png')} />
          </div>
          <div className='col-lg-6 ps-5 pt-5'>
            <h4 className='pt-5'> What is e-commerce business?</h4>
            <div className='aboutus-c'>
              <p className='pt-5 lh-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the on leap into electronic typesetting.
              </p>
              <ul className='lh-lg'>
                <li> slim body with metal cover</li>
                <li>latest Intel Core i5-1135G7 processor (4 cores / 8 threads)</li>
                <li>8GB DDR4 RAM and fast 512GB PCIe SSD</li>
                <li> NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit keyboard</li>
              </ul>
              <button className="btn btn-footer ms-3" type="submit">Search</button>
            </div>
          </div>
        </div>
      </section>
      <section className='p-5 bg-white'>
        <div className='container position-relative'>
          <h2 className='text-center'>Customers Feedback</h2>
          <div className='py-5'>
            <Carousel responsive={responsive} className=''>
              <div>
                <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                  <div className='p-3'><i class="bi bi-star-fill brand"></i><i class="bi bi-star-fill brand"></i><i class="bi bi-star-fill brand"></i><i class="bi bi-star-fill brand"></i>(5.0)</div>

                  <p className="card-text p-3 text-md-start aboutus-c">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                  <div className='d-flex align-items-center'>
                    <div className='p-3'><img src={require('../images/comment-user-1.png')} /></div>
                    <div> <h6 className='comment-name'>Ridoy Rock </h6>
                    <p className='aboutus-c-f'>London,uk</p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                  <div className='p-3'><i class="bi bi-star-fill brand"></i><i class="bi bi-star-fill brand"></i><i class="bi bi-star-fill brand"></i><i class="bi bi-star-fill brand"></i>(5.0)</div>

                  <p className="card-text p-3 text-md-start aboutus-c">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                  <div className='d-flex align-items-center'>
                    <div className='p-3'><img src={require('../images/comment-user-1.png')} /></div>
                    <div> <h6 className='comment-name'>Ridoy Rock </h6>
                    <p className='aboutus-c-f'>London,uk</p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                  <div className='p-3'><i class="bi bi-star-fill brand"></i><i class="bi bi-star-fill brand"></i><i class="bi bi-star-fill brand"></i><i class="bi bi-star-fill brand"></i>(5.0)</div>

                  <p className="card-text p-3 text-md-start aboutus-c">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                  <div className='d-flex align-items-center'>
                    <div className='p-3'><img src={require('../images/comment-user-1.png')} /></div>
                    <div> <h6 className='comment-name'>Ridoy Rock </h6>
                    <p className='aboutus-c-f'>London,uk</p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                  <div className='p-3'><i class="bi bi-star-fill brand"></i><i class="bi bi-star-fill brand"></i><i class="bi bi-star-fill brand"></i><i class="bi bi-star-fill brand"></i>(5.0)</div>

                  <p className="card-text p-3 text-md-start aboutus-c">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                  <div className='d-flex align-items-center'>
                    <div className='p-3'><img src={require('../images/comment-user-1.png')} /></div>
                    <div> <h6 className='comment-name'>Ridoy Rock </h6>
                    <p className='aboutus-c-f'>London,uk</p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                  <div className='p-3'><i class="bi bi-star-fill brand"></i><i class="bi bi-star-fill brand"></i><i class="bi bi-star-fill brand"></i><i class="bi bi-star-fill brand"></i>(5.0)</div>

                  <p className="card-text p-3 text-md-start aboutus-c">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                  <div className='d-flex align-items-center'>
                    <div className='p-3'><img src={require('../images/comment-user-1.png')} /></div>
                    <div> <h6 className='comment-name'>Ridoy Rock </h6>
                    <p className='aboutus-c-f'>London,uk</p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                  <div className='p-3'><i class="bi bi-star-fill brand"></i><i class="bi bi-star-fill brand"></i><i class="bi bi-star-fill brand"></i><i class="bi bi-star-fill brand"></i>(5.0)</div>

                  <p className="card-text p-3 text-md-start aboutus-c">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                  <div className='d-flex align-items-center'>
                    <div className='p-3'><img src={require('../images/comment-user-1.png')} /></div>
                    <div> <h6 className='comment-name'>Ridoy Rock </h6>
                    <p className='aboutus-c-f'>London,uk</p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
          <div>
          <div className='row py-3 bg-white my-5 last-cont'>
                    <div className='col-lg-3'>
                        <div className='ps-4 d-flex align-items-center'>
                            <i class="bi bi-cart banner-brand text-dark"></i>
                            <div className='pt-3 ps-3'><span className='banner-cont'>Free Shipping</span>
                                <p className='banner-scont'>When ordering over $100</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'><div className='ps-4 d-flex align-items-center'>
                        <i class="bi bi-arrow-repeat banner-brand text-dark"></i>
                        <div className='pt-3 ps-3'><span className='banner-cont'>Free Return</span>
                            <p className='banner-scont'>When ordering over $100</p>
                        </div>
                    </div>
                    </div>
                    <div className='col-lg-3'><div className='ps-4 d-flex align-items-center'>
                        <i class="bi bi-file-lock banner-brand text-dark"></i>
                        <div className='pt-3 ps-3'><span className='banner-cont'>Secure Payment</span>
                            <p className='banner-scont'>When ordering over $100</p>
                        </div>
                    </div>
                    </div>
                    <div className='col-lg-3'><div className='ps-4 d-flex align-items-center'>
                        <i class="bi bi-trophy banner-brand text-dark"></i>
                        <div className='pt-3 ps-3'><span className='banner-cont'>Best Quality</span>
                            <p className='banner-scont'>When ordering over $100</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        </div>
        
      </section>
      
      

    </>
  )
}

export default Aboutus
