const bodyEl = document.querySelector('body');

bodyEl.addEventListener('click', battonClick);

let intervalId;

function battonClick(evt) {
  if (evt.target.hasAttribute('data-start')) {
    intervalId = setInterval(() => {
      bodyEl.style.backgroundColor = getRandomHexColor();
    }, 1000);
    bodyEl.querySelector('[data-start]').disabled = true;
    bodyEl.querySelector('[data-stop]').disabled = false;
  }
  if (evt.target.hasAttribute('data-stop')) {
    clearInterval(intervalId);
    bodyEl.querySelector('[data-start]').disabled = false;
    bodyEl.querySelector('[data-stop]').disabled = true;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
