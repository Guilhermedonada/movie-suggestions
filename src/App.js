import React, {useContext} from 'react'
import './App.css';
import Footer from './components/Footer'
import Home from './components/Home'
import List from './components/List'
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
            <div className="css-main-area">
              <div>
                <button className="css-back-button" type="button">Voltar ao início</button>
              </div>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home"  component={Home} />
                <Route path="/list"  component={List} />
              </Switch>
              
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
