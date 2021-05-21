window.addEventListener('scroll', () => {
    const globalNav = document.getElementById("menubar");
    let scrollTop = document.scrollingElement.scrollTop;
  
    if (scrollTop > 10) {
        globalNav.classList.add('scroll');
    } else {
        globalNav.classList.remove('scroll');
    }
  });