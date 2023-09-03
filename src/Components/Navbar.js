import React, { useState } from 'react';

function App() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [areLinesCrossed, setAreLinesCrossed] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
    setAreLinesCrossed(!areLinesCrossed);
  };

  return (
    <div>


            <button className="hamburger-button" onClick={toggleNav}>
            <div className={`hamburger-line ${areLinesCrossed ? 'cross' : ''}`}></div>
            <div className={`hamburger-line ${areLinesCrossed ? 'cross' : ''}`}></div>
            <div className={`hamburger-line ${areLinesCrossed ? 'cross' : ''}`}></div>
            </button>


            <nav>

            <div class="logo">
            <a href="index.html"><p>👨‍💻@developedbyjk</p></a>
            </div>

            <ul className={isNavVisible ? 'show' : ''}>
                    <li><a href="about.html">👋About</a></li>
                    <li><a href="project.html">💾project</a></li>
                    <li><a href="blog.html">✍️Blog</a></li>
                    <li><a href="more.html">🔮More</a></li>
            </ul>

            </nav> 


    </div>
  );
}

export default App;

{}