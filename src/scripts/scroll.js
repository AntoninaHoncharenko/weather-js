export function addSmoothScroll() {
  const { height: cardHeight } = document
    .querySelector('.weather-card')
    .getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 1.5,
    behavior: 'smooth',
  });
}
