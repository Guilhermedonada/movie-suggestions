import React, {useContext} from 'react'
import './App.css';
import Footer from './components/Footer'
import Home from './components/Home'
import List from './components/List'
import Main from './components/Main'
import Begin from './components/Begin'
import {UserProvider} from './components/context/UserContext'
import {FilmsProvider} from './components/context/FilmsContext'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {


  return (    
    <UserProvider>
      <FilmsProvider>

      <Router>
        <div className="App css-background" >
          <div>
            <div className="css-left-name">
            </div>
            <div className="css-right-name"></div>
            <div className="css-main-area">
              <Main/>
              <Switch>
              <Route path="/" exact component={Begin} />
                <Route path="/home" component={Begin} />
                <Route path="/quests"  component={Home} />
                <Route path="/movies"  component={List} />
              </Switch>
              {/* <div>
                <button className="css-back-button" type="button">Voltar ao início</button>
              </div> */}
              
              <Footer/>
            </div>
          </div>
        </div>
      </Router>
    
      </FilmsProvider>
    </UserProvider>
  );
}

export default App;
