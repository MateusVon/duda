function showMessage() {
  let message = document.getElementById('message');
  message.style.display = 'block';
  setTimeout(() => {
      message.style.opacity = '1';
  }, 100);
}
