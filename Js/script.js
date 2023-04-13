// Variables
let nav = document.querySelector('nav');
let navLink = document.querySelector('.navbar .collapse .navbar-nav .nav-item .nav-link');
let navItem = document.querySelectorAll('li');

// Events
window.addEventListener('scroll', addClassShow);

// Function Add & Remove Class Show
function addClassShow() {
  if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    nav.classList.add('show')
  } else {
    nav.classList.remove('show')
  }
}



// Scroll to anchor ID using scroll event
let sections = document.querySelectorAll('section');

// Events
window.addEventListener('scroll', scrollDown);

function scrollDown() {
  let scrollPosition = document.documentElement.scrollTop;

  sections.forEach((section) => {
    if(scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 && 
      scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25) {
      let currentId = section.attributes.id.value;
      // Add & Remove Function
      removeClassActive()
      addClassActive(currentId)
    }
  })
}

// Remove Function
function removeClassActive() {
  document.querySelectorAll('nav .nav-link').forEach((el) => {
    el.classList.remove('active')
  })
}

// Add Function
function addClassActive(id) {
  // console.log(id);
  let selector = `nav .nav-link[href="#${id}"]`;
  document.querySelector(selector).classList.add('active');
}