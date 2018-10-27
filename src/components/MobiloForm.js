import React, { Component } from 'react'
import axios from 'axios'

export default class MobiloForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      phone: ''
    }
    this.onMobAuthorChange = this.onMobAuthorChange.bind(this)
    this.onMobNumberChange = this.onMobNumberChange.bind(this)
    this.onMobSubmit = this.onMobSubmit.bind(this)
  }

  onMobAuthorChange (e) {
    this.setState({ name: e.target.value })
  }

  onMobNumberChange (e) {
    this.setState({ phone: e.target.value })
  }

  onMobSubmit (e) {
    e.preventDefault()
    let postData = {
      name: this.state.name,
      phone: this.state.phone
    }

    if (!postData.name || !postData.phone) {
      alert('a nomera i netu!')
    } else {
      // this.props.onSendForm(postData)
      axios.post('http://localhost:8000/addMobilo', postData)
        .then((res) => {
          console.log('RESPONSE RECEIVED: ', res)
          // this.props.onBoink()
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
          <h3>А тут - имя и мобило</h3>
          <h2>И мы с вами сразу же свяжемся</h2>
        </header>
        <form method='post' onSubmit={this.onMobSubmit}>
          <div className='col-6'>
            <input
              type='text'
              name='name'
              id='mobAuthor'
              defaultValue={this.state.name}
              onChange={this.onMobAuthorChange}
              placeholder='Твоё имя'
            />
          </div><br />
          <div className='col-6'>
            <input
              type='text'
              name='mobilo'
              id='mobNumber'
              defaultValue={this.state.phone}
              onChange={this.onMobNumberChange}
              placeholder='38 066 5553322'
            />
          </div><br />
          <div className='col-6'>
            <input
              type='submit'
              className='button'
              defaultValue='Send Message'
            />
          </div>
        </form>
      </React.Fragment>

    )
  }
}
