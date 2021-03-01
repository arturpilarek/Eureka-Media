const navSlide = () => {
  const burger = document.querySelector(".mobile__nav-burger")
  const nav = document.querySelector(".mobile__nav-slide")

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active")
  })
}

navSlide()
