import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

class App extends Component {
  render () {
    return (

      <React.Fragment>
        <Header />
        <Content />
        <Reviews />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App
