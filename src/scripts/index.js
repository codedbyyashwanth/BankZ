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
const setUpTabs = (tabs, contents, tabName) => {
      tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                  const element = document.querySelector(tab.dataset[tabName]);
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

setUpTabs(dataTabs, tabContent, "tabTarget");

// Featured Layout Logic
const featuredTabs = document.querySelectorAll("[data-featured-tab]");
const featuredContent = document.querySelectorAll("[data-featured-content]");

setUpTabs(featuredTabs, featuredContent, "featuredTab");

// Testimonial Layout Logic
const testimonialTabs = document.querySelectorAll("[data-testimonial-target]");
const testimonialContent = document.querySelectorAll("[data-testimonial-content]");

setUpTabs(testimonialTabs, testimonialContent, "testimonialTarget");


const loadMore = document.getElementById("load_faq");
const faqItems = document.querySelectorAll("[data-faq-extra]");
const faqSpan = document.querySelectorAll("[data-span]");

loadMore.addEventListener("click", () => {
      faqItems.forEach(item => item.classList.toggle("active"));
      faqSpan.forEach(item => item.classList.toggle("hide"));
});

const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
            // Code Here
      });
}, {
      threshold: 0.5
});

navbar.forEach(el => observer.observe(el))