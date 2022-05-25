import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.scss'

export const Header = () => {
  return (
    <header className="header__full-container">
      <div className="header__title">
        Fake Store
      </div>
      <div className="header__links">
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
      </div>
    </header>
  )
}
