// import '../myCss.css'
import React, { Component } from 'react'
import axios from 'axios'
import ReviewList from './ReviewList'
import ReviewForm from './ReviewForm'
import MobiloForm from './MobiloForm'
// import PopUpCard from './PopUpCard'
import Modal from './Modal'

class Reviews extends Component {
state = {
  reviews: [],
  isOpen: false,
  author: '',
  text: ''
}
// this.toggleModal = this.toggleModal.bind(this)
// this.getModalInfo = this.getModalInfo.bind(this)
// }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  getModalInfo = (author, text) => {
    this.setState({
      isOpen: !this.state.isOpen,
      author: author,
      text: text
    })
  }

    handleGetReviews = () => {
      axios.get('http://localhost:8000/reviews')
        .then((revs) => {
          console.log('AXIOS\n', revs.data[2].author)
          this.setState({ reviews: revs.data })
        })
        .catch((err) => {
          console.log('AXIOS ERROR: ', err)
        })
    }

    componentDidMount = () => {
      this.handleGetReviews()
    }
    render () {
      return (

        <React.Fragment>
          <Modal
            show={this.state.isOpen}
            onClick={this.toggleModal}
            author={this.state.author}
            text={this.state.text}
          />
          <section className='main'>
            <header>
              <div className='container'>
                <h2>А тут будут отзывы</h2>
                <p>Вот так прям плито4кой, по три в ряд. и карусель, обязательно карусель!</p>
              </div>
            </header>
            <div className='content dark style1 featured'>
              <div id='reviews' className='container'>
                <ReviewList
                  data={this.state.reviews}
                  getInfo={this.getModalInfo}
                /><hr />
                <div className='row gtr-50'>
                  <div className='col-6 col-12-narrow'>
                    <ReviewForm onBoink={this.handleGetReviews} />
                  </div>
                  <div className='col-6 col-12-narrow'>
                    <MobiloForm />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      )
    }
}

export default Reviews
