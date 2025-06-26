'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Map button text to data-page attribute
const navMap = {
  'about': 'about',
  'resume': 'resume',
  'portfolio': 'portfolio',
  'certification': 'certification',
  'contact': 'contact'
};

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const btnText = this.querySelector('span').textContent.trim().toLowerCase();
    const pageKey = navMap[btnText];
    // Remove active from all
    navigationLinks.forEach(link => link.classList.remove("active"));
    pages.forEach(page => page.classList.remove("active"));
    // Add active to the clicked link and corresponding page
    this.classList.add("active");
    const targetPage = Array.from(pages).find(page => page.dataset.page === pageKey);
    if (targetPage) {
      targetPage.classList.add("active");
    }
    window.scrollTo(0, 0);
  });
}

// Fade-in effect for main content on load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.main-content').classList.add('fade-in');
});

// Ripple effect CSS
const rippleStyle = document.createElement('style');
rippleStyle.innerHTML = `.ripple { position: absolute; left: 50%; top: 50%; width: 120px; height: 120px; background: rgba(255,255,255,0.2); border-radius: 50%; transform: translate(-50%,-50%) scale(0); animation: ripple-effect 0.6s linear; pointer-events: none; z-index: 2; } @keyframes ripple-effect { to { transform: translate(-50%,-50%) scale(1); opacity: 0; } }`;
document.head.appendChild(rippleStyle);