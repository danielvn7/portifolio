import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/about.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc" style={{color:'white'}}>
                          <h1 style={{color:'white'}}>Bem vindo! <br />Meu nome é Daniel</h1>
                          <p style={{color:'white'}}>
                            <a style={{color:'white'}} className="btn btn-primary btn-learn" href="https://docs.google.com/document/d/15coSa2rnZcdywihM-pWTvoGqE65JAkxQAh6JDBNrF2Q/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                              Veja meu CV<i style={{color:'white'}} className="icon-download4" />
                              </a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/about.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-https://drive.google.com/file/d/1cTe9i4d2CCsxXHZkvqWnuxc1LvgV1Af7/view col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 style={{color:'white'}}>Apaixonado em Tecnologias</h1>
                          <p style={{color:'white'}}><a style={{color:'white'}} className="btn btn-primary btn-learn" href="https://github.com/danielvn7" target="_blank" rel="noopener noreferrer">Ver Projetos <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
