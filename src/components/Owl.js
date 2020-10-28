import React, { Component } from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

class Owl extends Component {
    render() {
        return (
            <OwlCarousel
            className="owl-carousel owl-theme"
            items="1"
            autoplay
            center="true"
            dots
            loops
            margin={10}
        
            >
            <div className="item">
                <img src="https://www.xn--42caj4e6bk1f5b1j.com/assets/banner/half-half-01.png" class="img-fluid d-none d-lg-block" alt="1"/>
            </div>
            <div className="item">
                <img src="https://www.xn--42caj4e6bk1f5b1j.com/assets/banner/half-half-03.png" class="img-fluid d-none d-lg-block" alt="2"/>
            </div>
           
            </OwlCarousel>

        )
    }
}

export default Owl;

