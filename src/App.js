import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
// import FunctionalComponentDemo from './components/concepts/FunctionalComponents/FunctionalComponentDemo';

import Footer from './components/site/Footer';
import Header from './components/site/Header';
import Sidebar from './components/site/Sidebar';
import{
  BrowserRouter as Router
} from 'react-router-dom';
// This package serves one main purpose, and that is enabling us to provide routing within our application in React. Considering we're using React to make a single page application, when we want to route to a new "page", it's actually not going to reroute our whole web page, but instead just change the content - or in our case - show us a different component. So the package in which we can achieve this through is react-router-dom!

function App() {
  return (
    <div className="App">
      {/* <FunctionalComponentDemo /> */}
      <Header />
      {/* Once imported, we then call the component using a self closing tag */}
      <Router> 
        {/* wrapping sidebar in Router makes sure we are using react-router-dom to change only the main content, not the header or footer */}
        <Sidebar />
      </Router>
      <Footer />
    </div>
  );
};

export default App;

// App.js is being imported and called inside of index.js.
