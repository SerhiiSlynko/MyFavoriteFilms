const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', function() {
  if(document.body.classList.contains('light-theme')) {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    toggleButton.textContent = 'Світла тема';
  } else {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    toggleButton.textContent = 'Темна тема';
  }
});
// Ініціалізація теми (світла тема за замовчуванням)
document.body.classList.add('light-theme');





