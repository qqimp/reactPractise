import s from './Features.module.css'
export function FeaturesList({ array }) {
  return (
    <>
      <ul className={s.featuresList}>
        {array.map((object) => {
          //  console.log(object)
          const { id, image, title, content } = object
          return (
            <li key={id}>
              <div className={s.imagewrapper}>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p>{content}</p>
            </li>
          )
        })}
      </ul>
    </>
  )
}
