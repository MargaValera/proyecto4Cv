export const createHero = (data) => {
  const hero = document.createElement('div')
  hero.id = 'hero'
  const heroImg = document.createElement('img')
  heroImg.src = './assets/mujer.png'
  heroImg.alt = data.PersonalInfo.name
  const skills = document.createElement('ul')
  skills.id = 'skills'

  Object.keys(data.skills).forEach((key) => {
    const li = document.createElement('li')
    li.textContent = data.skills
    skills.appendChild(li)
  })

  heroImg.addEventListener('click', () => {
    heroImg.src = './assets/mujerBordes.png'
  })
  hero.appendChild(heroImg)
  hero.appendChild(skills)
  document.body.appendChild(hero)
}
