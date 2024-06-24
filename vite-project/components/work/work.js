import { education } from '../education/education'

export const workExperience = (data) => {
  const workContainer = document.createElement('section')
  workContainer.classList.add('cards')

  const workTitle = document.createElement('h3')
  workTitle.textContent = data.workExperience[0]
  // workExperience.id = ""
  workContainer.appendChild(workTitle)

  const workImg = document.createElement('img')
  workImg.src = './assets/work.png'
  workImg.alt = 'work'
  workImg.classList.add('cardsImg')
  workContainer.appendChild(workImg)

  document.body.appendChild(workContainer)
}
