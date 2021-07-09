import './App.css'
import './styles/modern-normalize.css'
import './components/Fitchi/Fitchi'
import Header from './components/Header/Header'
import { Home } from './layouts/Home/Home'
import { Blog } from './layouts/Blog/Blog'
import { Contacts } from './layouts/Contacts/Contacts'
import { Switch, Route } from 'react-router-dom'
import { DestinationPage } from './layouts/Destination/Destination'

function App() {
  return (
    <div className="App container">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/blog" component={Blog} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/destination" component={DestinationPage} />
      </Switch>
    </div>
  )
}

export default App
