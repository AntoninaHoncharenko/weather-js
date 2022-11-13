const toTopBtnRef = document.querySelector('.to-top-btn');

window.addEventListener('scroll', onScroll);

function onScroll() {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;
  if (scrolled > coords) {
    toTopBtnRef.classList.remove('is-hidden');
  }
  if (scrolled <= coords) {
    toTopBtnRef.classList.add('is-hidden');
  }
}

toTopBtnRef.addEventListener('click', onTopBtnClick);

export function onTopBtnClick() {
  if (window.pageYOffset > 0) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}

onTopBtnClick();
