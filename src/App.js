import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Resume from './Components/Resume/Resume';
import Blogs from './Components/Blogs/Blogs';
import Projects from './Components/Projects/Projects';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects></Projects>
        </Route>
        <Route path="/blogs">
          <Blogs></Blogs>
        </Route>
        <Route path="/resume">
          <Resume></Resume>
        </Route>
        <Route path="/contact">
           <Contact></Contact>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
