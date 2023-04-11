window.addEventListener("DOMContentLoaded", function() {
    var sections = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    var navLinks = document.querySelectorAll(".toc-container a");

    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    for (var i = 0; i < sections.length; i++) {
      var currentSection = sections[i];
      var sectionTop = currentSection.offsetTop;
      var sectionBottom = sectionTop + currentSection.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        var currentLink = document.querySelector(".toc-container a[href='#" + currentSection.id + "']");
        navLinks.forEach(link => link.classList.remove("active"));
        currentLink.classList.add("active");
      }
    }
  });
