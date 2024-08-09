import React from 'react';
import './FeaturedArticles.css';

function FeaturedArticles() {
  return (
    <section className="featured-articles">
      <h2>Featured Articles</h2>
      <div className="articles-container">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="article">
            <div className="article-image">Article image</div>
            <h3>Article's Name</h3>
            <p>Description e.g., React OR Vue</p>
            <p>⭐⭐⭐⭐⭐ Author's name</p>
          </div>
        ))}
      </div>
      <button className="see-all-btn">See all articles</button>
    </section>
  );
}

export default FeaturedArticles;
