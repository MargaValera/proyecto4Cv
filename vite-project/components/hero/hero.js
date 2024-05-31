import './hero.css'

export const createHero = (data) => {
  const hero = document.createElement('div')
  hero.id = 'hero'
  const heroImg = document.createElement('img')
  heroImg.src = './assets/mujer.png'
  heroImg.alt = data.PersonalInfo.name
  const skillsTitle = document.createElement('h3')
  skillsTitle.textContent = 'Skills'
  skillsTitle.id = 'title'
  const skillsList = document.createElement('ul')
  skillsList.id = 'skills'

  data.skills.forEach((skill) => {
    const li = document.createElement('li')
    li.textContent = skill
    skillsList.appendChild(li)
  })

  heroImg.addEventListener('click', () => {
    heroImg.src = './assets/mujerBordes.png'
  })
  hero.appendChild(heroImg)
  hero.appendChild(skillsTitle)
  hero.appendChild(skillsList)
  document.body.appendChild(hero)
}

