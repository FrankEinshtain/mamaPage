import React, { Component } from 'react'
import axios from 'axios'
// import getTelega from '../lib/getTelega'

class ReviewForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      author: '',
      text: ''
    }
    this.onAuthorChange = this.onAuthorChange.bind(this)
    this.onTextChange = this.onTextChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onAuthorChange (e) {
    this.setState({ author: e.target.value })
  }

  onTextChange (e) {
    this.setState({ text: e.target.value })
  }

  onSubmit (e) {
    e.preventDefault()
    let postData = {
      author: this.state.author,
      text: this.state.text
    }

    if (!postData.author || !postData.text) {
      alert('ne4ego peredavat')
    } else {
      // this.props.onSendForm(postData)
      axios.post('http://localhost:8000/addReview', postData)
        .then((res) => {
          console.log('RESPONSE RECEIVED: ', res)
          this.props.onBoink()
        })
        .catch((err) => {
          console.log('AXIOS ERROR: ', err)
        })
    }
  }

  render () {
    return (
      <React.Fragment>

        <header>
          <h3>Здесь можно оставить отзыв</h3>
          <h2>Который покажется в разделе выше</h2>
        </header>
        <form method='post' onSubmit={this.onSubmit}>
          <div className='col-6'>
            <input
              type='text'
              name='author'
              id='author'
              defaultValue={this.state.author}
              onChange={this.onAuthorChange}
              placeholder='Твоё имя'
            />
          </div><br />
          <div className='col-6'>
            <textarea
              name='text'
              id='text'
              defaultValue={this.state.text}
              onChange={this.onTextChange}
              placeholder='А тут - собственно сообщение' />
          </div><br />
          <div className='col-6'>
            <input type='submit' className='button' defaultValue='Send Message' />
          </div>
        </form>

      </React.Fragment>
    )
  }
}

export default ReviewForm
