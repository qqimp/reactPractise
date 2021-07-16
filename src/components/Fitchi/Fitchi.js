import s from './Features.module.css'
// import map from '../../images/icons/map.svg'
// import binocular from '../../images/icons/binocular1.svg'
// import backpack from '../../images/icons/backpack1.svg'
// import ukulele from '../../images/icons/ukelele1.svg'
import { FeaturesList } from './FeaturesList'
import { array } from '../../dataBase/featuresList.json'
console.log(array)
export function Features() {
  return (
    <>
      <section className={s.fitch}>
        <FeaturesList array={array} />
      </section>
    </>
  )
}
