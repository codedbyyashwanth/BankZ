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

// Common Tab Layout Logic 
const setUpTabs = (tabs, contents) => {
      tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                  const element = document.querySelector(tab.dataset.tabTarget);
                  contents.forEach(content => content.classList.remove("active_tab"));
                  tabs.forEach(content => {
                        content.classList.remove("activate");
                        content.classList.add("inactive");
                  });
                  element.classList.add("active_tab");
                  tab.classList.add("activate");
                  tab.classList.remove("inactive");
            });
      });
}


// Tab Layout Logic
const dataTabs = document.querySelectorAll("[data-tab-target]");
const tabContent = document.querySelectorAll("[data-tab-content]");

setUpTabs(dataTabs, tabContent);

const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
            // Code Here
      });
}, {
      threshold: 0.5
});

navbar.forEach(el => observer.observe(el))