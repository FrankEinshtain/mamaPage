
import React, { Component } from 'react'
// import Slider from "react-slick"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faChevronLeft,
  faCalculator,
  faGraduationCap,
  faInfinity,
  faCertificate,
  faStar,
  faSquareRootAlt
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faChevronRight,
  faChevronLeft,
  faCalculator,
  faGraduationCap,
  faInfinity,
  faCertificate,
  faStar,
  faSquareRootAlt
)

const arr = [
  'calculator',
  'graduation-cap',
  'infinity',
  'certificate',
  'star',
  'square-root-alt'
]

export class GetRandomIcon extends Component {
    getRandom = () => {
      return Math.floor(Math.random() * (arr.length))
    }
    render () {
      return (
        <FontAwesomeIcon icon={arr[this.getRandom()]} />
      )
    }
}

export class GetNextArrow extends React.Component {
  render () {
    const { onClick } = this.props
    return (
      <div
        onClick={onClick}
        style={{
          display: 'inline-flex',
          cursor: 'pointer'
        }}
      >
        <FontAwesomeIcon icon='chevron-right' size='2x' />
      </div>

    )
  }
}

export class GetPrevArrow extends React.Component {
  render () {
    const { onClick } = this.props
    return (
      <div
        onClick={onClick}
        style={{
          display: 'inline-flex',
          cursor: 'pointer'
        }}
      >
        <FontAwesomeIcon icon='chevron-left' size='2x' />
      </div>

    )
  }
}
