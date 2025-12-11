import './App.css';
import Navbar from './components/Navbar';

import React, { Component } from 'react'
import News from './components/News';

import { 
  BrowserRouter as Router,
  Route,
  Routes,

 } from 'react-router-dom';

export default class App extends Component {
  pageS = 10;
  componentDidMount() {
    document.title = "rNews - news Highlights";   // valid place to modify document
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
            {/* ✅ In v6, pass the component to the 'element' prop */}
            <Route path='/' element={<News key="general" country='us' category='general' pageSize = {this.pageS}/>} />
            <Route path='/business' element={<News key="business" country='us' category='business' pageSize = {this.pageS}/>} />
            <Route path='/entertainment' element={<News key="entertainment" country='us' category='entertainment' pageSize = {this.pageS}/>} />
            <Route path='/science' element={<News key="science" country='us' category='science' pageSize = {this.pageS}/>} />
            <Route path='/sports' element={<News key="sports" country='us' category='sports' pageSize = {this.pageS}/>} />
            <Route path='/technology' element={<News key="technology" country='us' category='technology' pageSize = {this.pageS}/>} />
            <Route path='/health' element={<News key="health" country='us' category='health' pageSize = {this.pageS}/>} />
          </Routes> 
        </Router>
      </div>
    )
  }
}

