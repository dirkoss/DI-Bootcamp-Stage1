// 1.

const listPlanets = document.getElementsByClassName("listPlanets")

const solersystem = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus", 
    "Neptune",
    "Pluto"
]

// 2.

for (let index = 0; index < solersystem.length; index++) {
    let planet = document.createElement("div")
    planet.classList.add("planet")

planet.classList.add(solersystem[index])

listPlanets[0].appendChild(planet)
}