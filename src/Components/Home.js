import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Header from './Header';
import Footer from './footer';

function Home(){
    return(
        <div id='home'>
          <Header />
      
  <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel"
      src="https://store.unity.com/themes/store/images/products/unity/personal/unity-assetstore.jpg"
      alt="First slide"
    />
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100 carousel"
      src="https://assets.vccircle.com/uploads/2019/08/Technologyrfxllargex.jpg"
      alt="Second slide"
    />
{/*     
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel"
      src="https://licreativetechnologies.com/wp-content/uploads/2020/01/Startup-business.jpg"
      alt="Third slide"
    />

    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>

<div className='container'>
  <div className='row'>
    <div className='col-md-4'>
      <div className='home_divs'>
      <i class="fa fa-clock-o icon-1" aria-hidden="true"></i>
        <p className='home_divs_heading'>Time Management</p>
        <p className='home_divs_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis.</p>
      </div>
    </div>
    <div className='col-md-4'>
      <div className='home_divs'>
      <i class="fa fa-lock icon-1" aria-hidden="true"></i>
        <p className='home_divs_heading'>Secure System</p>
        <p className='home_divs_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis.</p>
      </div>
    </div>
    <div className='col-md-4'>
      <div className='home_divs'>
      <i class="fa fa-envelope-o icon-1" aria-hidden="true"></i>
        <p className='home_divs_heading'>Mail Support</p>
        <p className='home_divs_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis.</p>
      </div>
    </div>
  </div>
</div>
<Footer />
        </div>
        
    )
}
export default Home;