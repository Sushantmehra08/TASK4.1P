import React from 'react';
import './FeaturedTutorials.css';

function FeaturedTutorials() {
  return (
    <section className="featured-tutorials">
      <h2>Featured Tutorials</h2>
      <div className="tutorials-container">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="tutorial">
            <div className="tutorial-image">Tutorial image</div>
            <h3>Tutorial's Name</h3>
            <p>Description e.g., React Router</p>
            <p>⭐⭐⭐⭐⭐ username</p>
          </div>
        ))}
      </div>
      <button className="see-all-btn">See all tutorials</button>
    </section>
  );
}

export default FeaturedTutorials;
