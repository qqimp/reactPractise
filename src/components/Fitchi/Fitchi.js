import s from './Features.module.css'
import map from '../../images/icons/map.svg'
import binocular from '../../images/icons/binocular1.svg'
import backpack from '../../images/icons/backpack1.svg'
import ukulele from '../../images/icons/ukelele1.svg'
export function Features() {
  return (
    <>
      <section className={s.fitch}>
        <ul className={s.featuresList}>
          <li>
            <div className={s.imagewrapper}>
              <img src={map} alt="map" />
            </div>
            <h3>Choose Destination</h3>
            <p>Lorem Ipsum is simply dummy text of the printing setting</p>
          </li>
          <li>
            <div className={s.imagewrapper}>
              <img src={binocular} alt="binoc" />
            </div>
            <h3>Explore The Place</h3>
            <p>Lorem Ipsum is simply dummy text of the printing setting</p>
          </li>
          <li>
            <div className={s.imagewrapper}>
              <img src={backpack} />
            </div>
            <h3>Start Your Journey</h3>
            <p>Lorem Ipsum is simply dummy text of the printing setting</p>
          </li>
          <li>
            <div className={s.imagewrapper}>
              <img src={ukulele} />
            </div>
            <h3>Let’s Enjoy</h3>
            <p>Lorem Ipsum is simply dummy text of the printing setting</p>
          </li>
        </ul>
      </section>
    </>
  )
}
