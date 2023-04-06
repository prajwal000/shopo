import React from 'react'
import { Link } from 'react-router-dom'
import Data from './data.json'


function Blog() {
    return (
        <>
            <section className='aboutus-top-color'>
                <div className='container'>
                    <div className='d-flex py-4'> <Link class="nav-link " aria-current="page" to="/">Home</Link>/<Link class="nav-link " aria-current="page" to="/blog"> Blog</Link></div>
                    <div className='bolder py-5'> <h2 className='bolder text-center'>Blog</h2></div>
                </div>
            </section>
            <section className='container'>
                <div className='row py-3'>
                    {
                        Data.slice(0,4).map(a => {
                            return (
                                
                                   
                                        <div className="col-lg-6 py-4">
                                            <div className="cont-card p-5 border">
                                                <img src={a.images} width='300px'/>
                                                <h4 className="py-4">{a.title}</h4>
                                                <p className='text-in'>{a.des}</p>
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

export default Blog
