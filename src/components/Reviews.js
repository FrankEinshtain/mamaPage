// import '../myCss.css'
import React, { Component } from 'react'
import axios from 'axios'
// import getTelega from '../lib/getTelega'
import ReviewList from './ReviewList'
import ReviewForm from './ReviewForm'
import MobiloForm from './MobiloForm'



class Reviews extends Component {
    state = {
        reviews: [],
      }

    // telega = () => {
    //     getTelega()
    // }

    handleGetReviews = () => {
        axios.get('http://localhost:8000/reviews')
        .then((revs) => {
            this.setState({ reviews: revs.data })
          })
          .catch((err) => {
            console.log("AXIOS ERROR: ", err);
          })
    }

    componentDidMount() {
        this.handleGetReviews()
    }

    

    render() {
  
      return (
        <React.Fragment>
            <section className="main">
                <header>
                    <div className="container">
                        <h2>А тут будут отзывы</h2>
                        <p>Вот так прям плито4кой будут располагаться, по три в ряд</p>
                    </div>
                </header>
                <div className="content dark style1 featured">
                    <div id="reviews" className="container">
                        <ReviewList data={this.state.reviews} /><hr />
                        <div className="row gtr-50">
                            <div className="col-6 col-12-narrow">
                                <ReviewForm onBoink={this.handleGetReviews} />
                            </div>
                            <div className="col-6 col-12-narrow">
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






