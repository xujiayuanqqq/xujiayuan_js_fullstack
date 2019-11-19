import React , { Component } from 'react';
import Swiper from 'swiper';
import './slide.css'

class Slide extends Component {
    componentDidMount () {
        new Swiper('.swiper-container', {
            direction: 'horizontal',
            pagination: {
                el: 'swiper-pagination'
            }
        })
    }
    render () {
        return (
            <div id="o2_main" className="main">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide slide-1"></div>
                        <div className="swiper-slide slide-2"></div>
                        <div className="swiper-slide slide-3"></div>
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
}

export default Slide