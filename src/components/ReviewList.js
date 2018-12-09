import React, { Component } from 'react'
import Slider from 'react-slick'
import { GetRandomIcon, GetNextArrow, GetPrevArrow } from '../lib/getRandom'
import '../myCss.css'

class ReviewList extends Component {
  shortifyText = (text) => {
    if (text.length < 130) return text
    return text
      .slice(0, 129)
      .split(' ')
      .slice(0, -1)
      .join(' ')
      .concat(' ...')
  }
  sendInfo = (data) => {
    console.log('@@AUTHOR\n', data)
    return this.props.getInfo(data.author, data.text)
  }

  getReviewList = (revList) => {
    const reviewData = revList.map((item, index) => {
      const { author, text } = item
      const preparedText = this.shortifyText(text)

      return (
        <div key={index} onClick={() => this.sendInfo({ author: author, text: text })}>
          <section className='bord'>
            <header>
              <h3><GetRandomIcon /> { author } пишет:</h3>
            </header>
            <p>{ preparedText }</p>
          </section>
        </div>
      )
    })
    return reviewData
  }

  render () {
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
    if (!data || data.length < 1) {
      return (
        <div>не хотелось бы тебя расстраивать, но отзывов пока нет</div>
      )
    } else {
      const revData = this.getReviewList(data)

      return (
        <React.Fragment>
          <Slider {...settings}>
            { revData }
          </Slider>
        </React.Fragment>
      )
    }
  }
}

export default ReviewList
