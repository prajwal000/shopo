import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Aboutus from './Aboutus';
import Blog from './Blog';
import Contact from './Contact';
import Home from './Home';
import Products from './Products';
import Single from './Single';


function Header() {
    return (
        <>
            <section className='top-bar'>
                <div className='container d-flex align-items-center justify-content-between' >
                    <div>
                        <ul className='d-flex py-2'>
                            <li className='pe-3'>Account</li>
                            <li className='pe-3'>Track Order</li>
                            <li>Support</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='d-flex'>
                            <li>
                                <div class="dropdown">
                                    <a class="btn  dropdown-toggle border border-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        United State
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Nepal</a></li>
                                        <li><a class="dropdown-item" href="#">India</a></li>

                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div class="dropdown">
                                    <a class="btn  dropdown-toggle border border-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        USD
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">NPR</a></li>
                                        <li><a class="dropdown-item" href="#">INR</a></li>

                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div class="dropdown">
                                    <a class="btn  dropdown-toggle border border-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        English
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Nepali</a></li>
                                        <li><a class="dropdown-item" href="#">Hindi</a></li>

                                    </ul>
                                </div>
                            </li>
                        </ul>


                    </div>
                </div>
            </section>
            <section className='Nav-bar'>
                <nav className="navbar bg-white ps-5 py-2">
                    <div className="container  d-flex justify-content-between align-items-center">
                    <Link class="nav-link " aria-current="page" to="/"><img src='https://shopo.quomodothemes.website/assets/images/logo.svg' className='navbar-img' /></Link>

                        <form className="d-flex" role="search">
                            <input className="form-control me-1" type="search" placeholder="Search " aria-label="Search" />
                            <button className="btn rounded" type="submit">Search</button>
                        </form>
                        <div className='xyz'>
                            <ul className='d-flex'>
                                <li className='pe-3'><i class="bi bi-arrow-repeat"></i></li>
                                <li className='pe-3'><i class="bi bi-suit-heart"></i></li>
                                <li className='pe-3'><i class="bi bi-bag"></i></li>
                                <li><i class="bi bi-person"></i></li>
                            </ul>
                        </div>




                    </div>
                </nav>
            </section>
            <section class='Nav'>
                <div>
                    <nav class="navbar navbar-expand-lg  ps-5">
                        <div class="container">
                           
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            
                            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul class="navbar-nav">
                                <li class="nav-item dropdown dropdwn bg-white">
                                        <a class="nav-link dropdown-toggle pe-5 ps-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="bi bi-list-nested pe-3 "></i>All Categories
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li className='d-flex align-items-center py-1'><a class="dropdown-item" href="#"><i class="bi bi-phone px-2"></i>Mobile & Laptops</a></li>
                                            <li className='d-flex align-items-center border-top py-1'><a class="dropdown-item" href="#"><i class="bi bi-controller px-2"></i>Gaming Entertainment</a></li>
                                            <li className='d-flex align-items-center border-top py-1'><a class="dropdown-item" href="#"><i class="bi bi-card-image px-2"></i>Image & Video</a></li>
                                            <li className='d-flex align-items-center border-top py-1'><a class="dropdown-item" href="#"><i class="bi bi-car-front px-2"></i>Veichles</a></li>
                                            <li className='d-flex align-items-center border-top py-1'><a class="dropdown-item" href="#"><i class="bi bi-tv px-2"></i>Furniture</a></li>
                                            <li className='d-flex align-items-center border-top py-1'><a class="dropdown-item" href="#"><i class="bi bi-card-image px-2"></i>Sport</a></li>
                                            <li className='d-flex align-items-center border-top py-1'><a class="dropdown-item" href="#"><i class="bi bi-cup-straw px-2"></i>Food & Drinks</a></li>
                                            <li className='d-flex align-items-center border-top py-1'><a class="dropdown-item" href="#"><i class="bi bi-handbag px-2"></i>Fashion Accessories</a></li>
                                            <li className='d-flex align-items-center border-top py-1' ><a class="dropdown-item" href="#"><i class="bi bi-controller px-2"></i>Toilet & Sanitation</a></li>
                                            <li className='d-flex align-items-center border-top py-1'><a class="dropdown-item" href="#"><i class="bi bi-controller px-2"></i>Makeup Corner</a></li>
                                            <li className='d-flex align-items-center border-top py-1'><a class="dropdown-item" href="#"><i class="bi bi-controller px-2"></i>Baby Items</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item ps-3">
                                        <Link class="nav-link " aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li class="nav-item ps-3">
                                        <Link class="nav-link" to="/aboutus">About us</Link>
                                    </li>
                                    <li class="nav-item ps-3">
                                    <Link class="nav-link" to="/contact">Contact</Link>
                                    </li>
                                    <li class="nav-item ps-3">
                                        <Link class="nav-link" to="/blog">Blog</Link>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </nav>
                    </div>
            </section>
            <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path={"/single/:id"} element={<Single/>} />
        <Route path="/products" element={< Products/>} />

        
      </Routes>
        </>
    )
}

export default Header
