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
    shrinkingContainer.style.height = `${newHeight}px`;
  }
}

window.addEventListener('scroll', handleScroll);