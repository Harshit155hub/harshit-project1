const bulb = document.getElementById('bulb');
const toggleSwitch = document.getElementById('switch');

toggleSwitch.addEventListener('click', () => {
  bulb.classList.toggle('off');
});