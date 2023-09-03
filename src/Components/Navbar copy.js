import React from "react";
  


export default function Navbar(){

    const hamburgerButton = document.getElementById('hamburger-button');
    const navList = document.querySelector('nav ul');
    const hamburgerLines = document.querySelectorAll('.hamburger-line');
    
    hamburgerButton.addEventListener('click', () => {
      navList.classList.toggle('show');
    
      // Toggle the cross icon
      hamburgerLines.forEach(line => line.classList.toggle('cross'));
    });



    return(
            <nav>
                <button id="hamburger-button" class="hamburger-button">
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                </button>
        
        
        
                <div class="logo">
                <a href="index.html"><p>@developedbyjk</p></a>
                </div>
                <ul>
                <li><a href="about.html">👋About</a></li>
                <li><a href="project.html">💾project</a></li>
                <li><a href="blog.html">✍️Blog</a></li>
                <li><a href="more.html">🔮More</a></li>
                </ul>
            </nav>
    )
}