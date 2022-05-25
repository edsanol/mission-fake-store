import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/image.png'
import '../styles/About.scss'

const About = () => {
  return (
    <div className="about__container">
      <div className="about__perfil">
        <h2>Perfil</h2>
        <p>Soy un desarrollador web FullStack</p>
        <p>
          <strong>Make It Real</strong>
        </p>
      </div>
      <div className="about__img">
        <img src={img} alt="Perfil" className="imgRedonda" />
      </div>
      <div className="about__about">
        <h3>Acerca de mi</h3>
        <p>
          Hola soy Edinael y soy de Colombia. Conozco y he usado varias
          tecnologias web como HTML, CSS, JavaScript, React, Redux, NodeJS y
          MongoDB. Soy amante de la programación y como todo programador, de un
          buen café
        </p>
      </div>
      <div className="about__details">
        <h3>Detalles</h3>
        <p>
          <strong>Nombre</strong>
        </p>
        <p>Edinael Sanguino</p>
        <p>
          <strong>Habilidades aprendidas con Make It Real</strong>
        </p>
        <p className="p">React</p>
        <p className="p">Redux</p>
        <p className="p">Scrum</p>
      </div>
      <div className="about__contact">
        <Link to={'https://github.com/edsanol'}>
          <i className="bx bxl-github"></i>
        </Link>
        <Link to={'https://github.com/edsanol'}>
          <i className="bx bxl-gmail"></i>
        </Link>
      </div>
      
    </div>
  )
}

export default About
