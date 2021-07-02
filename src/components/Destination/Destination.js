import cuba from '../../images/icons/cuba.svg'
import paris from '../../images/icons/paris.svg'
import japan from '../../images/icons/japan.svg'
import s from './Destination.module.css'
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
          <li>
            <img src={cuba}/>
            <div>Cuba City</div>
          </li>
          <li>
            <img src={paris}/>
            <div>Paris</div>
          </li>
          <li>
            <img src={japan}/>
            <div>Japan</div>
          </li>
        </ul>
      </section>
    </>
  )
}
