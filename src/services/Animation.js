export function navbarAnimation() {
  const navbar = document.querySelector(".navbar");

  document.addEventListener("scroll", function () {
    const clientHeight = document.documentElement.clientHeight;
    const navbarY = navbar.getBoundingClientRect().y;
    const navbarHeight = navbar.getBoundingClientRect().height;

    if (clientHeight > navbarY + navbarHeight > 0) {
      navbar.style.backgroundColor = "red";
    }
  });
}
