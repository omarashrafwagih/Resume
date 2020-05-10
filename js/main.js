// Scrollbar Start
let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener('scroll', function () {
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + '%';
});

// Scrollbar End
// ----------------------------------------------------------------------------------------------------------------------------
// Loading Screen Start
window.onload = function () {
  document.body.style.overflowY = 'auto';
  document.getElementById('navnav').style.zIndex = '10';
  document.getElementById('loading').style.display = 'none';
};
// Loading Screen End

// Navbar Color Reveal Start
let nav = document.getElementById('navnav');

document.body.onscroll = function () {
  if (window.innerWidth < 768) {
    nav.style.background = 'rgba(0,0,0,0.9)';
  } else if (scrollY > 700) {
    nav.style.backgroundColor = 'rgba(0,0,0,0.9)';
    nav.classList.remove('container');
  } else if (scrollY < 700) {
    nav.style.backgroundColor = 'transparent';
    nav.classList.add('container');
  }
};
// Navbar Color Reveal End
