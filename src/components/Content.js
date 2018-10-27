import React, { Component } from 'react'

class Content extends Component {
  render () {
    return (

      <section id='content' className='main'>
        <header>
          <div className='container'>
            <h2>Мотивирующая фраза по поводу будущего детей</h2>
            <p>Тут хорошо бы минимально пару рассуждений на тему того, 4то лу4ший подарок, который могут сделать родители<br />
                своему спиногрызу с намёком на будущее - это нау4ить его уму разуму. а 4ему еще у4ить, как не математике?</p>
          </div>
        </header>
        <div className='content style1 dark'>
          <div className='container'>
            <section>
              <header>
                <h3>Раздел с собственно информацией</h3>
                <p><strong>Тут нужно описать крутые трюки, которые должны убедить всех, 4то без вариантов, только этот у4итель</strong></p>
              </header>
              <p>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra
							ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel. <b>Praesent nec orci
							facilisis leo magna.</b> Cras sit amet urna eros, id egestas urna. Quisque aliquam
							tempus euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
							posuere cubilia.</p>
            </section>
            <section>
              <header>
                <h3>Вот такая цитата</h3>
              </header>
              <blockquote><b>Не придумал, 4ем заполнить раздел, так 4то для демонстрации оставлю старую добрую рыбу на латыни</b></blockquote>
            </section>
            <section>
              <header>
                <h3>Ещё один заголовок</h3>
                <p>Ну и латынь, как обещал</p>
              </header>
              <p>Donec consectetur <a href='#header'>vestibulum dolor et pulvinar</a>. Etiam vel felis enim, at viverra
							ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel. Praesent nec orci
							facilisis leo magna. Cras sit amet urna eros, id egestas urna. Quisque aliquam
							tempus euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
							posuere cubilia.</p>
              <hr />

              <header>
                <h3>4то-то можно и списком</h3>
              </header>
              <ul className='default'>
                <li>Donec consectetur vestibulum dolor et vel felis enim at viverra ligula. Ut porttitor sagittis lorem.</li>
                <li>Donec consectetur vestibulum dolor et vel felis enim at viverra ligula. Ut porttitor sagittis lorem.</li>
                <li>Donec consectetur vestibulum dolor et vel felis enim at viverra ligula. Ut porttitor sagittis lorem.</li>
                <li>Donec consectetur vestibulum dolor et vel felis enim at viverra ligula. Ut porttitor sagittis lorem.</li>
              </ul>

              <p>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra
							ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel. Praesent nec orci
							facilisis leo magna. Cras sit amet urna eros, id egestas urna. Quisque aliquam
							tempus euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
							posuere cubilia.</p>
            </section>
          </div>
        </div>
      </section>

    )
  }
}

export default Content
