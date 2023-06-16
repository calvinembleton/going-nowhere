document.addEventListener('DOMContentLoaded', function () {
  const textBox = document.getElementById('textBox');
  const characterCounter = document.querySelector('.character-counter');
  const htmlElement = document.documentElement;

  let isFirstInput = true; // Flag to track the first input

  const audioElement = new Audio('static.mp3');
  audioElement.loop = true;

  const maxBorderWidth = 150; // Maximum border width

  textBox.addEventListener('input', function () {
    const count = textBox.value.length;
    characterCounter.textContent = count;

    if (count === 0) {
      textBox.style.borderColor = '#89da34';
      htmlElement.style.borderColor = '#89da34';
      htmlElement.style.zIndex = 'auto'; // Reset z-index
    } else {
      textBox.style.borderColor = '#FF3800';
      htmlElement.style.borderColor = '#FF3800';
      htmlElement.style.zIndex = '9999'; // Set a high z-index value
    }

    if (isFirstInput && count > 0) {
      const borderWidth = count <= maxBorderWidth ? count : maxBorderWidth;
      htmlElement.style.borderWidth = `${borderWidth}px`;
      audioElement.volume = count / 100;
      audioElement.play();
      isFirstInput = true;
      htmlElement.classList.add('grain-effect'); // Add class for grain effect
    } else if (count === 0) {
      audioElement.pause();
      audioElement.currentTime = 0;
      isFirstInput = true;
      htmlElement.style.borderWidth = '1px'; // Reset border width
      htmlElement.classList.remove('grain-effect'); // Remove class for grain effect
    }
  });

  textBox.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
      event.preventDefault();
      textBox.value = '';
      characterCounter.textContent = '0';
      textBox.style.borderColor = '#89da34';
      htmlElement.style.borderColor = '#89da34';
      audioElement.pause();
      audioElement.currentTime = 0;
      isFirstInput = true;
      htmlElement.style.borderWidth = '1px'; // Reset border width
      htmlElement.classList.remove('grain-effect'); // Remove class for grain effect
      htmlElement.style.zIndex = 'auto'; // Reset z-index
    }
  });
});