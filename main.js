const navSlide = () => {
  const burger = document.querySelector(".mobile__nav-burger")
  const nav = document.querySelector(".mobile__nav-slide")

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active")
  })
}

navSlide()

//Slider starts here
var slider_content = document.getElementById("box")

// contain images in an array
var image = ["slide3", "slide2", "slide1"]

var i = image.length

// function for next slide

function nextImage() {
  if (i < image.length) {
    i = i + 1
  } else {
    i = 1
  }
  slider_content.innerHTML = "<img src=" + image[i - 1] + ".png>"
}

// function for prev slide

function prevImage() {
  if (i < image.length + 1 && i > 1) {
    i = i - 1
  } else {
    i = image.length
  }
  slider_content.innerHTML = "<img src=" + image[i - 1] + ".png>"
}

// script for auto image slider

setInterval(nextImage, 6000)
