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



// Function to handle the removal and addition of data-aos attributes
function handleAOS() {
  const element1 = document.getElementById('aos-element-1');
  const element2 = document.getElementById('aos-element-2');

  // Check if the screen width is less than the md breakpoint (768px)
  if (window.innerWidth < 768) {
    // Remove the data-aos attribute for smaller screens
    element1.removeAttribute('data-aos');
    element2.removeAttribute('data-aos');
  } else {
    // Add the data-aos attributes for medium screens and larger
    element1.setAttribute('data-aos', 'fade-up');
    element2.setAttribute('data-aos', 'fade-up-right');
  }

  // Reinitialize AOS (if using the AOS library)
  if (typeof AOS !== 'undefined') {
    AOS.refresh();
  }
}

// Initial check
handleAOS();

// Listen to resize events
window.addEventListener('resize', handleAOS);


document.addEventListener('DOMContentLoaded', function() {
  function handleAOS() {
    const mdBreakpoint = 768; // Adjust this value based on your definition of "md"
    
    if (window.innerWidth <= mdBreakpoint) {
      document.querySelectorAll('[data-aos]').forEach(element => {
        if ((!element.closest('.skills'))&(!element.closest('.counter-strip'))) {
          element.removeAttribute('data-aos');
        }
      });
    }
  }

  // Run on page load
  handleAOS();

  // Run on window resize
  window.addEventListener('resize', handleAOS);
});

