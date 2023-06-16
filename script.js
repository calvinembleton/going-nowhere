document.addEventListener('DOMContentLoaded', function () {
  const textBox = document.getElementById('textBox');
  const characterCounter = document.querySelector('.character-counter');
  const htmlElement = document.documentElement;

  let isFirstInput = true; // Flag to track the first input

  textBox.addEventListener('input', function () {
    const count = textBox.value.length;
    characterCounter.textContent = count;

    if (count === 0) {
      if (!isFirstInput) { // Check if it's not the first input
        textBox.style.borderColor = '#e6d51c'; // Update text box color
        htmlElement.style.borderColor = '#e6d51c'; // Update HTML border color
      }
    } else {
      textBox.style.borderColor = '#89da34'; // Update text box color
      htmlElement.style.borderColor = '#89da34'; // Update HTML border color
    }
  });

  textBox.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
      event.preventDefault();
      textBox.value = '';
      characterCounter.textContent = '0';
      textBox.style.borderColor = '#e6d51c'; // Update text box color
      htmlElement.style.borderColor = '#e6d51c'; // Update HTML border color
      submitSound.play(); // Play the sound when Enter is pressed
    }
  });

  textBox.addEventListener('focus', function () {
    isFirstInput = false; // Update the flag on the first input
  });
});