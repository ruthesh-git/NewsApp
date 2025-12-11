import './App.css';
import Navbar from './components/Navbar';

import React, { Component } from 'react'
import News from './components/News';
import LoadingBar from "react-top-loading-bar";

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

  state = {
    progress : 0
  }

  setProgress = (progress) => {
    this.setState({progress : progress})
  }

  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Navbar />
          <Routes>
            {/* ✅ In v6, pass the component to the 'element' prop */}
            <Route path='/' element={<News setProgress = {this.setProgress}  key="general" country='us' category='general' pageSize={this.pageS} />} />
            <Route path='/business' element={<News setProgress = {this.setProgress}  key="business" country='us' category='business' pageSize={this.pageS} />} />
            <Route path='/entertainment' element={<News setProgress = {this.setProgress}  key="entertainment" country='us' category='entertainment' pageSize={this.pageS} />} />
            <Route path='/science' element={<News setProgress = {this.setProgress}  key="science" country='us' category='science' pageSize={this.pageS} />} />
            <Route path='/sports' element={<News setProgress = {this.setProgress}  key="sports" country='us' category='sports' pageSize={this.pageS} />} />
            <Route path='/technology' element={<News setProgress = {this.setProgress}  key="technology" country='us' category='technology' pageSize={this.pageS} />} />
            <Route path='/health' element={<News setProgress = {this.setProgress}  key="health" country='us' category='health' pageSize={this.pageS} />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

