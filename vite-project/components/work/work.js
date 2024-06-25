export const workExperience = (data) => {
  const workContainer = document.createElement('section')
  workContainer.classList.add('cards')

  const workTitle = document.createElement('h3')
  workTitle.textContent = 'Work Experience'
  workTitle.id = 'workExperience'
  workContainer.appendChild(workTitle)

  const workImg = document.createElement('img')
  workImg.src = './assets/work.png'
  workImg.alt = 'work'
  workImg.classList.add('cardsImg')
  workContainer.appendChild(workImg)

  const divWork = document.createElement('div')
  divWork.classList = 'divElements'
  const createListItem = (label, text) => {
    const listItem = document.createElement('li')
    listItem.innerHTML = `<strong>${label}:</strong> ${text}`
    return listItem
  }

  data.workExperience.forEach((experience) => {
    const workE = document.createElement('ul')

    workE.appendChild(createListItem('Position', experience.position))
    workE.appendChild(createListItem('Company', experience.company))
    workE.appendChild(createListItem('Start Date', experience.startDate))
    workE.appendChild(createListItem('End Date', experience.endDate))
    workE.appendChild(createListItem('Description', experience.description))

    divWork.appendChild(workE)
  })

  workContainer.appendChild(divWork)
  document.body.appendChild(workContainer)
}
