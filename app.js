window.addEventListener('keydown', (e) => {
  const audioElement = document.querySelector(`audio[data-key="${e.code}"]`);
  const keyDiv = document.querySelector(`div[data-key="${e.code}"]`);
  if(!audioElement) return;

  keyDiv.classList.add('playing');
  audioElement.currentTime = 0;
  audioElement.play();
});

function removePlayingClassName(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removePlayingClassName))