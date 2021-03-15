function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    
    if (!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewind to the start == with no delay
    audio.play();
    key.classList.add('playing'); // JQuery -> key.addClass('playing')
    // toggle: key.classList.toggle('classname')
    // remove: key.classList.remove('classname')
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip it if it's not a transform
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');
//const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound); 