import logo from '../../images/icons/logo.svg'
import logotxt from '../../images/icons/logotxt.svg'
import user from '../../images/icons/user.svg'
import lupa from '../../images/icons/lupa.svg'
import styles from './Header.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header className={styles.header}>
      <a href="/Home " className={styles.logo}>
        <img src={logo} alt="logo" />
        <img src={logotxt} alt="ravel" className={styles.logotxt} />
      </a>
      <nav className={styles.nav}>
        <ul className={styles.linksList}>
          <li>
            <Link to="/" exact>Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/destination">Destination</Link>
          </li>
          <li>
            <a href="/offer">offer</a>
          </li>
          <li>
            <a href="/tour">tour</a>
          </li>
        
        </ul>
        <ul className={styles.buttonsList}>
          <li>
            <button className={styles.userButton}>
              <img src={user} alt="user" />
              <p>my account</p>
            </button>
          </li>
          <li>
            <button>
              <img src={lupa} alt="lupa" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
