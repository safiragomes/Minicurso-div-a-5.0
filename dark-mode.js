document.getElementById('theme-button').addEventListener('click', function() {
  
  document.body.classList.toggle('dark-mode');
  document.querySelectorAll('*').forEach(function(element) {
    element.classList.toggle('dark-mode');
  });
});
