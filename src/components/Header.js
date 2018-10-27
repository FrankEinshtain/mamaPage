import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <section id='header' className='dark'>
        <header>
          <h1>Тут главный заголовок</h1>
          <p>А тут - 4уть поменьше</p>
        </header>
        <footer>
          <a href='#reviews' className='button scrolly'>кнопка, 4тоб поехало вниз, к отзывам</a>
        </footer>
      </section>

    )
  }
}

export default Header
