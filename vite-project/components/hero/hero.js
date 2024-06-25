import './hero.css'

export const createHero = (data) => {
  const hero = document.createElement('div')
  hero.id = 'hero'

  const heroImg = document.createElement('img')
  heroImg.src = './assets/mujer.png'
  heroImg.alt = data.PersonalInfo.name

  const skillsTitle = document.createElement('button')
  skillsTitle.textContent = 'Skills'
  skillsTitle.id = 'title'

  const skillsList = document.createElement('ul')
  skillsList.id = 'skills'
  skillsList.classList.add('hide')

  data.skills.forEach((skill) => {
    const li = document.createElement('li')
    li.textContent = skill
    skillsList.appendChild(li)
  })

  if (skillsTitle) {
    const changeImage = () => {
      const randomCacheBuster = Math.random().toString(36).substring(2, 7)
      heroImg.src = `./assets/mujerBordes.png?cache=${randomCacheBuster}`
    }

    const resetImage = () => {
      heroImg.src = './assets/mujer.png'
    }

    skillsTitle.addEventListener('mousedown', changeImage)
    skillsTitle.addEventListener('mouseup', resetImage)
    skillsTitle.addEventListener('mouseleave', resetImage)

    skillsTitle.addEventListener('touchstart', changeImage)
    skillsTitle.addEventListener('touchend', resetImage)
  } else {
    console.error('skillsTitle element not found!')
  }

  const toggleSkillsList = () => {
    skillsList.classList.toggle('hide')
  }

  skillsTitle.addEventListener('click', () => {
    toggleSkillsList()
  })

  hero.appendChild(heroImg)
  hero.appendChild(skillsTitle)
  hero.appendChild(skillsList)
  document.body.appendChild(hero)
}
