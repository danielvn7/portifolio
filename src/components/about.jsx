import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">Sobre mim</span>
                    <h2 className="colorlib-heading">Quem eu sou?</h2>
                    <p>Após anos trabalhando no ramo administrativo onde agreguei muita experiência, decidi mudar e agora estou em transição de carreira para a área de Desenvolvedor de Software. 
Sou estudante de Análise e Desenvolvimento de Sistemas, graduado em Logística. 
<p></p>Em busca de adquirir mais experiência no mercado, avançar nos estudos e profissionalmente.
Sou um entusiasta em tecnologia, inovação e estou sempre disposto a aprender coisas novas. 

                </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading">Algumas das minhas habilidades</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Desenvolvimento WEB </h3>
                    <p>Construção de sites utilizando as tecnologias JavaScript,React,HTML,CSS</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Desenvolvimento Back-End</h3>
                    <p>Desenvolvimento de APIS utilizando JAVA e Spring Framework</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
