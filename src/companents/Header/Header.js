import logo from '../../images/logo.svg'
import logotxt from '../../images/logotxt.svg'
import user from '../../images/user.svg'
import lupa from '../../images/lupa.svg'
import styles from './Header.module.css'
function Header() {
  return (
    <header className={styles.header}>
      <a href="/Home " className={styles.logo}>
        <img src={logo} alt="logo" />
        <img src={logotxt} alt= "ravel" className={styles.logotxt}/>
      </a>
      <nav className={styles.nav}>
        <ul className={styles.linksList}>
          <li>
            <a href="/destination">destination</a>
          </li>
          <li>
            <a href="/offer">offer</a>
          </li>
          <li>
            <a href="/tour">tour</a>
          </li>
          <li>
            <a href="/blog">blog</a>
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
