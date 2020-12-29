import React from 'react';
import Navbaricon from './components/navbar/navbar.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home/home'
import Samples from './components/samples/samples'
import About from './components/about/about.js'
import Mostafa from './components/about/mostafa.js'
import Ahmed from './components/about/ahmed.js'


class App extends React.Component {
  render(){
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
          <Navbaricon/>
          <Switch>
            <Route path ='/' exact component={Home}/>
            <Route path = '/About_us' exact component= {About}/>
            <Route path = '/Samples' component = {Samples }/>
            <Route path = '/About_us/Mostafa' component ={Mostafa}/>
            <Route path = '/About_us/Ahmed' component= {Ahmed} />
          </Switch>
      </div>
    </BrowserRouter>
      );
}
}

export default App;
