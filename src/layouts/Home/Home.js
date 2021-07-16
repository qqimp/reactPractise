import Hero from '../../components/Hero/Hero'
import { Features } from "../../components/Fitchi/Fitchi"
import { Download } from '../../components/Download/Download'


let title = "It’s Time To Explore The World"

export function Home() {
  return (
    <>
      <Hero title={title}/>
      <Download />
      <Features />
    </>
  )
}
