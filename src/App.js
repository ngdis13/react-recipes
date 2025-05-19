import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min.js';

import {Header} from './components/Header.jsx'
import {Footer} from './components/Footer.jsx'

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import Category from './pages/Category.jsx';
import Recipe from './pages/Recipe.jsx';

function App() {
  return (
    <>
    <Router basename="/react-food">
      <Header/>
        <main className='container content'>
            <Switch>
                <Route exact path='/' component ={Home}/>
                <Route path='/about' component ={About}/>
                <Route path='/contacts' component ={Contact}/>
                <Route path="/category/:name" component={Category}/>
                <Route path="/meal/:id" component={Recipe}/>
                <Route component={NotFound}/>
            </Switch>
        </main>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
