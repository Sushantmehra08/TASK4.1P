import React from 'react';
import Header from './components/Header';
import FeaturedArticles from './components/FeaturedArticles';
import FeaturedTutorials from './components/FeaturedTutorials';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-image">
        <p>Image</p>
      </div>
      <FeaturedArticles />
      <FeaturedTutorials />
      <Footer />
    </div>
  );
}

export default App;
