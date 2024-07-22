// script.js

document.addEventListener("DOMContentLoaded", function() {
  // Wait for the window to load completely
  window.addEventListener("load", function() {
      // Hide the loading screen with a fade out effect
      const loadingScreen = document.getElementById("loading-screen");
      loadingScreen.style.opacity = "0"; // Fade out

      setTimeout(() => {
          loadingScreen.style.display = "none"; // Hide after fading
          const mainContent = document.getElementById("main-content");
          mainContent.style.display = "block"; // Show main content
      }, 1000); // Match the duration of the CSS transition
  });
  
});



const strip = document.getElementById('counterStrip');
let animationTriggered = false;

function createCounterStrip() {
  for (let i = 0; i <= 12; i++) {
    const item = document.createElement('div');
    item.className = 'counter-item';
    item.textContent = i;
    strip.appendChild(item);
  }
}

function startAnimation() {
  if (!animationTriggered) {
    animationTriggered = true;
    setTimeout(() => {
      strip.style.transform = 'translateY(-120rem)'; // 12 * 60px
    }, 400); // 0.4s delay
  }
}

createCounterStrip();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startAnimation();
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

observer.observe(strip.parentElement);



document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="../html/"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const hrefValue = this.getAttribute('href');
      const targetId = hrefValue.substring(hrefValue.indexOf('#') + 1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;
        
        function animation(currentTime) {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const duration = 1500; // Animation duration in milliseconds (2 seconds)
          const run = ease(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
        }
        
        // Easing function
        function ease(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
        }
        
        requestAnimationFrame(animation);
      }
    });
  });
});


var elementToChange = document.getElementsByTagName("body")[0];
elementToChange.style.cursor = "url('../assets/cursor.png'), auto";

 
// Function to change cursor
function changeCursor(element, cursorUrl) {
  element.style.cursor = `url('${cursorUrl}'), auto`;
}

// Function to reset cursor
function resetCursor(element) {
  element.style.cursor = 'default';
}



// Get all elements you want to apply this effect to
// For example, let's apply it to all div elements
const elements = document.getElementsByTagName('a');

// Loop through each element and add event listeners
for (let element of elements) {
  element.addEventListener('mouseover', function() {
    changeCursor(this, '../assets/pointer.png');
  });


  element.addEventListener('mouseout', function() {
    resetCursor(this);
  });
}



// Get all elements you want to apply this effect to
// For example, let's apply it to all div elements
const elementss = document.getElementsByTagName('input');

// Loop through each element and add event listeners
for (let element of elementss) {
  element.addEventListener('mouseover', function() {
    changeCursor(this, '../assets/pointer.png');
  });


  element.addEventListener('mouseout', function() {
    resetCursor(this);
  });
}



// Get all elements you want to apply this effect to
// For example, let's apply it to all div elements
const elementsss = document.getElementsByTagName('button');

// Loop through each element and add event listeners
for (let element of elementsss) {
  element.addEventListener('mouseover', function() {
    changeCursor(this, '../assets/pointer.png');
  });


  element.addEventListener('mouseout', function() {
    resetCursor(this);
  });
}



// JavaScript to automate transition delays for .appear2 items
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.appear2');
  
  
  items.forEach((item, index) => {
    // Apply a staggered delay based on the item's index
    item.style.transitionDelay = `${0.1}s`;
  });

  const active = function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('inview2');
      } else {
        entry.target.classList.remove('inview2');
      }
    });
  }

  const io2 = new IntersectionObserver(active);
  items.forEach(item => io2.observe(item));
});
