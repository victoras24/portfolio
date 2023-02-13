const footerContentText = document.createTextNode(
  `Victoras Isaakidis ${new Date().getFullYear()}`
)
const footerContentElement = document.createElement("p")
footerContentElement.appendChild(footerContentText)

const footer = document.createElement("footer")
footer.appendChild(footerContentElement)

const navbarTitleText = document.createTextNode(">$ /home/victoras_isaakidis")
const navbarTitleElement = document.createElement("p")
navbarTitleElement.appendChild(navbarTitleText)

const navbarBlinker = document.createElement("div")
navbarBlinker.classList.add("blinker")

const navbarHome = document.createElement("a")
navbarHome.href = "/portfolio"
navbarHome.classList.add("home_link")

navbarHome.appendChild(navbarTitleElement)
navbarHome.appendChild(navbarBlinker)

const navbar = document.createElement("nav")
navbar.appendChild(navbarHome)

document.body.appendChild(navbar)
document.body.appendChild(footer)

document.querySelectorAll("a").forEach((a) => {
  if (!a.classList.contains("home_link")) a.target = "_blank"
})

window.addEventListener("resize", () => {
  if (window.screenX < 600) {
    document.querySelectorAll("iframe").forEach((element) => {
      element.height = window.innerWidth
      element.width = window.innerWidth * 0.5
      element.scrolling = "yes"
    })

    document.querySelectorAll("code").forEach((code) => {
      code.style.display = "none"
    })
  }
})
