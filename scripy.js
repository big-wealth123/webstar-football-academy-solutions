// Back to Top Button functionality
window.onload = function() {
  // Create the button if it doesn't exist
  if (!document.getElementById('backToTop')) {
    var btn = document.createElement('button');
    btn.id = 'backToTop';
    btn.innerText = 'TOP';
    btn.style.display = 'none';
    document.body.appendChild(btn);
  }

  var backToTop = document.getElementById('backToTop');

  window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  };

  backToTop.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
};
