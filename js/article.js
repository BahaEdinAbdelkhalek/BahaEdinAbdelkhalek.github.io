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



const shrinkingContainer = document.getElementById('shrinkingContainer');
const initialHeight = shrinkingContainer.offsetHeight;

function handleScroll() {
  const scrollPosition = window.scrollY;
  const containerTop = shrinkingContainer.offsetTop;
  const containerHeight = shrinkingContainer.offsetHeight;
  const windowHeight = window.innerHeight;

  if (scrollPosition > containerTop - windowHeight && scrollPosition < containerTop + containerHeight) {
    const scrollPercentage = (scrollPosition - (containerTop - windowHeight)) / (containerHeight + windowHeight);
    const shrinkFactor = 1 - (scrollPercentage * 0.6); // 20% shrink
    const newHeight = initialHeight * Math.max(shrinkFactor, 0.4); // Limit to 20% shrink
    shrinkingContainer.style.height = '${newHeight}px';
  }
}

window.addEventListener('scroll', handleScroll);



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
// For example, let's apply it to all div   elements
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
// For example, let's apply it to all div   elements
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
// For example, let's apply it to all div   elements
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


