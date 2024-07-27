// script.js
document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);

  // Hide the loading screen
  const loadingScreen = document.getElementById("loading-screen");
  loadingScreen.style.opacity = "0";
  setTimeout(() => {
      loadingScreen.style.display = "none";
      const mainContent = document.getElementById("main-content");
      mainContent.style.display = "block";
      
      // Set up scroll animations
      setupScrollAnimations();
  }, 1000);

  function setupScrollAnimations() {
      gsap.utils.toArray(".fade-up").forEach(function(elem,index) {
          gsap.fromTo(elem, 
              {
                  opacity: 0,
                  y: 50
              },
              {
                  scrollTrigger: {
                      trigger: elem,
                      start: "top 120%",
                      end: "bottom 70%",
                      toggleActions: "play none none none",
                     // Remove in production
                  },
                  opacity: 1,
                  y: 0,
                  
                 
                  duration: 0.5,
              
                  delay:index * 0.05,
                  ease: "power2.out"
              }
          );
      });
      gsap.utils.toArray(".fade-right").forEach(function(elem,index) {
        gsap.fromTo(elem, 
            {
                opacity: 0,
                x: 50
            },
            {
                scrollTrigger: {
                    trigger: elem,
                    start: "top 90%",
                    end: "bottom 70%",
                    toggleActions: "play none none none",
               // Remove in production
                },
                opacity: 1,
                x: 0,
                duration: 0.5,
                delay:index * 0.05,
                ease: "power2.out"
            }
        );
    });
    gsap.utils.toArray(".fade-left").forEach(function(elem,index) {
      gsap.fromTo(elem, 
          {
              opacity: 0,
              x: 50
          },
          {
              scrollTrigger: {
                  trigger: elem,
                  start: "top 120%",
                  end: "bottom 70%",
                  toggleActions: "play none none none",
             // Remove in production
              },
              opacity: 1,
              x: 0,
              duration: 0.5,
              delay:index * 0.05,
              ease: "power2.out"
          }
      );
  });

}
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

