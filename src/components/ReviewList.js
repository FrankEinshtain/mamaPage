import React, { Component } from 'react'
import Slider from 'react-slick'
import { GetRandomIcon, GetNextArrow, GetPrevArrow } from '../lib/getRandom'

import '../myCss.css'

class ReviewList extends Component {
    render() {
        const settings = {
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            speed: 2000,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
            nextArrow: <GetNextArrow />,
            prevArrow: <GetPrevArrow />
          }
          const { data } = this.props
    // console.log('data', data)
    if (!data || data.length < 1) {
      return (
        <div>не хотелось бы тебя расстраивать, но отзывов пока нет</div>
      )
    } else {
      const reviewData = data.map((item, index) => {
        return (
          <div key={index}>
            <section className='bord'>
              <header>
                <h3>
                  <GetRandomIcon /> { item.author }</h3>
              </header>
              <p>{ item.text }</p>
            </section>
          </div>

        )
      })
      console.log('data2', GetRandomIcon)
      return (
        <React.Fragment>

          <Slider {...settings}>
            {
              reviewData
            }
          </Slider>

        </React.Fragment>
      )
    }
  }
}

export default ReviewList
