import './App.css';
import Navbar from './components/Navbar';

import React, { useState, useEffect } from 'react'
import News from './components/News';
import LoadingBar from "react-top-loading-bar";

import {
  BrowserRouter as Router,
  Route,
  Routes,

} from 'react-router-dom';

export default function App() {
  const pageS = 10;
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    document.title = "rNews - news Highlights";
  }, []);


  return (
    <div>
      <Router>
        <LoadingBar
          color="#f11946"
          progress={progress}
        // onLoaderFinished={() => setProgress(0)}
        />
        <Navbar />
        <Routes>
          {/* ✅ In v6, pass the component to the 'element' prop */}
          <Route path='/' element={<News setProgress={setProgress} key="general" country='us' category='general' pageSize={pageS} />} />
          <Route path='/business' element={<News setProgress={setProgress} key="business" country='us' category='business' pageSize={pageS} />} />
          <Route path='/entertainment' element={<News setProgress={setProgress} key="entertainment" country='us' category='entertainment' pageSize={pageS} />} />
          <Route path='/science' element={<News setProgress={setProgress} key="science" country='us' category='science' pageSize={pageS} />} />
          <Route path='/sports' element={<News setProgress={setProgress} key="sports" country='us' category='sports' pageSize={pageS} />} />
          <Route path='/technology' element={<News setProgress={setProgress} key="technology" country='us' category='technology' pageSize={pageS} />} />
          <Route path='/health' element={<News setProgress={setProgress} key="health" country='us' category='health' pageSize={pageS} />} />
        </Routes>
      </Router>
    </div>
  )

}

