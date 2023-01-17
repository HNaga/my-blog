
import './App.css';
import {  BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
     <h1>My Awsome Blog</h1>
     <div ID="page-body">
       <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/articles" element={<ArticlesListPage />} />
          <Route path="/article/:articleID" element={<ArticlePage />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>


  );
}

export default App;
