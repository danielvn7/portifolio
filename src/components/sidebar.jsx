import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/me.jpeg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Daniel Venancio</a></h1>
              <span className="email"><i className="icon-mail"></i> danielvenancio2009@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introdução</a></li>
                  <li><a href="#about" data-nav-section="about">Sobre</a></li>
         
                  <li><a href="#timeline" data-nav-section="timeline">Linha do Tempo</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/daniel-venancio-3843a61ba/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/danielvn7" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>     
              </ul>
            </nav>
            <div className="colorlib-footer">
              
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
