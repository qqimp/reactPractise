import googleplay from "../../images/icons/googleplay.svg"
import appstore from "../../images/icons/applestore.svg"
import s from "./Download.module.css"
export function Download() {
  return (
    <>
      <section className={s.download}>
        <div>
          <h2 className={s.travel}>Download Now Travel <br/> Community Apps</h2>
          <ul className={s.dButtons}>
            <li>
                <button>
                    <img src={googleplay} alt="img"/>
                </button>
            </li>
            <li>
                <button>
                    <img src={appstore} alt="img"/>
                </button>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
