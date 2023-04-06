import React from 'react'
import Footer from './Component/Footer'
import Header from './Component/Header'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';
import'./App.scss'


function App() {
  return (
    <>
      <Header/>
      <Footer/>
    </>
  )
}

export default App
