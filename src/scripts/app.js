"use strict";


let backToTopBtn = document.querySelector('.backToTop');

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

backToTopBtn.addEventListener("click", scrollToTop);


window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const main = document.querySelector('main');

    if (header && main) {
      const headerHeight = header.offsetHeight;
      main.style.paddingTop = `${headerHeight}px`;
    }
  });