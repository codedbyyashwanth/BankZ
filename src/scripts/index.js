const mobileNav = document.getElementById("mobile_navbar");
const menu = document.getElementById("menu");
const navbar = document.querySelectorAll("#section");
const stickyNavbar = document.getElementById("navigation");

menu.addEventListener("click", () => {
      mobileNav.classList.toggle("open_mobile_nav");
      menu.classList.toggle("menu_open");
      if (menu.textContent.trim() == "notes")
            menu.textContent = "close";
      else
            menu.textContent = "notes";
});


window.addEventListener('scroll', () => {
      if (window.scrollY > 650)
            stickyNavbar.classList.add('fixed');
      else
            stickyNavbar.classList.remove('fixed');
});



const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
            // Code Here
      });
}, {
      threshold: 0.5
});

navbar.forEach(el => observer.observe(el))