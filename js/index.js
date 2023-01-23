const navIcon = document.querySelector("#nav-icon");
const mobileMenu = document.querySelector(".nav-mobile__container");
const viewMoreBtn = document.querySelector("#view-more-btn");
const posts = document.querySelectorAll(".post");

navIcon.addEventListener("click", function () {
  if (mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "block";
  }
});

viewMoreBtn.addEventListener("click", function () {
  posts.forEach((post) => {
    if (post.classList.contains("hide")) {
      post.classList.toggle("hide");
      viewMoreBtn.style.display = "none";
    } else {
      return;
    }
  });
});
