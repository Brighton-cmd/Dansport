(function(){
  function init(){
    var navs = document.querySelectorAll('nav, .nav, .navbar, header nav');
    navs.forEach(function(nav){
      var btn = nav.querySelector('.button-hamburger');
      if(!btn){
        btn = document.createElement('button');
        btn.className = 'button-hamburger';
        btn.setAttribute('aria-label','Toggle navigation');
        btn.innerHTML = '☰ Menu';
        nav.insertBefore(btn, nav.firstChild);
      }
      btn.addEventListener('click', function(){
        nav.classList.toggle('open');
      });
    });
  }
  if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();