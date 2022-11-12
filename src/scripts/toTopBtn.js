const toTopBtnRef = document.querySelector('.to-top-btn');

window.addEventListener('scroll', onScroll);

function onScroll() {}

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
