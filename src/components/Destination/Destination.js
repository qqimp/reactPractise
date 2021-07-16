import cuba from '../../images/icons/cuba.svg'
import paris from '../../images/icons/paris.svg'
import japan from '../../images/icons/japan.svg'
import s from './Destination.module.css'
import { destination } from '../../dataBase/destination.json'
console.log(destination)
export function Destination() {
  return (
    <>
      <section className={s.destination}>
        <div>
          <h2>Top Destinations In The World</h2>
          <p>
            It is a long established fact that a reader will be the distracted
            by the readable content of a page when looking at its layout from
            it.
          </p>
          <button>Discover More</button>
        </div>
        <ul>
          {destination.map((object) => {
            const { id, src, title } = object
            return (
              <li key={id}>
                <img src={src} alt="img" width="200" />
                <h3>{title}</h3>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}
