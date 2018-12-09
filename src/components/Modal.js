import React from 'react'
import PropTypes from 'prop-types'
import '../myCss.css'

export default class Modal extends React.Component {
  render () {
    const { author, text, show, onClick } = this.props
    if (!show) {
      return null
    }

    return (
      <div onClick={onClick}>
        <div className='mod'>
          <p><b>{ author } пишет:</b></p>
          <p>{ text }</p>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  author: PropTypes.string,
  text: PropTypes.string,
  show: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}
