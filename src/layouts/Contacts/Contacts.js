import logo from '../../images/icons/logo.svg'
import logotxt from '../../images/icons/logotxt.svg'
import styles from './Contacts.module.css'
export function Contacts() {
  return (
    <>
      <h2>Contacts</h2>
      <div>
        <a href="/Home " className={styles.logo}>
          <img src={logo} alt="logo" />
          <img src={logotxt} alt="ravel" className={styles.logotxt} />
        </a>
        <h2 className={styles.txt}>
          You can dream, create, design, and buildsa the most wonderful place.
        </h2>
        <ul className={styles.links}>
          <li>
            <a href="/Contacts">+0123 456 987, +0123 456 987</a>
          </li>
          <li>
            <a href="/Contacts">yourmailaddress@gmail.com</a>
          </li>
          <li>
            <a href="/Contacts">www.yourwebsitename.com</a>
          </li>
        </ul>
      </div>
    </>
  )
}
