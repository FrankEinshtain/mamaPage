import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

class Footer extends Component {
  render () {
    return (

      <section id='footer'>
        <ul className='icons'>

          <li><a href='#header' className='icon fa-2x'><FontAwesomeIcon icon={['fab', 'telegram']} /></a></li>
          <li><a href='#header' className='icon fa-2x'><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
          <li><a href='#header' className='icon fa-2x'><FontAwesomeIcon icon={['fab', 'skype']} /></a></li>
          <li><a href='#header' className='icon fa-2x'><FontAwesomeIcon icon={['fab', 'whatsapp']} /></a></li>
        </ul>
        <div className='copyright'>
          <ul className='menu'>
            <li><b>&copy; Untitled. All rights reserved blah-blah-blah.</b></li><li><b>Design: <a href='http://html5up.net'>HTML5 UP</a></b></li>
          </ul>
        </div>
      </section>

    )
  }
}

export default Footer
