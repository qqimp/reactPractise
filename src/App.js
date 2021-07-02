import './App.css'
import './styles/modern-normalize.css'
import './components/Fitchi/Fitchi'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import { Features } from './components/Fitchi/Fitchi'
import { Destination } from './components/Destination/Destination' 
function App() {
  return (
    <div className="App container">
      <Header />
      <Hero />
      <Features />
      <Destination />
    </div>
  )
}

export default App
