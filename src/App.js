import './App.css';
//import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

function App() {
  const name = 'larry';

  //only return the jsx inside return. Not initialise variables or calculation or anything of that sort
  return (
    <div className="App">
      <Header branding="Store the logs" />
      <h1> The app component { name } </h1>
      { false ? <h1>Hi!</h1> : <h1>Bye!</h1> }
      <Contact name="John Doe" phone="555-555-5555" email="shashwatksingh.27@gmail.com " />
    </div>
  );
}

/* Some class based return
class App extends Component{
  render(){
    return React.createElement('div', 
    { className: 'App' },
     React.createElement('h1', null, 'The app component!'));
    attribute is null in h1
    This is the alternative way to declare a div and a heading
  }
}
 */
export default App;
