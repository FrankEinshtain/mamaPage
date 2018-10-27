import React, { Component } from 'react'
import Slider from 'react-slick'

export default class ReviewSlider extends Component {
  render () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    }
    return (
      <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div key={index} className='col-4 col-12-narrow'>
            <section>
              {/* <span className="feature-icon"><span className="icon fa-cloud"><FontAwesomeIcon icon="graduation-cap" spin /></span></span> */}
              <header>
                <h3> { item.author }</h3>
              </header>
              <p>{ item.text }</p>
            </section><hr />
          </div>
        </Slider>
      </div>
    )
  }
}
