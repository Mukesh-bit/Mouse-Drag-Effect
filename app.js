document.querySelector(".main").addEventListener("mousemove", (e) => {
  document.querySelector(".top-img").style.width = e.clientX + "px"
})