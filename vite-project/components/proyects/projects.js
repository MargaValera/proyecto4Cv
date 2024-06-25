export const projects = (data) => {
  const container = () => {
    const projectsContainer = document.createElement('section')
    projectsContainer.classList = 'cards'

    const projectsTitle = document.createElement('h3')
    projectsTitle.textContent = 'Projects'
    projectsTitle.id = 'projects'

    const projectsImg = document.createElement('img')
    projectsImg.src = './assets/proyectos.png'
    projectsImg.alt = 'Projects'
    projectsImg.classList = 'cardsImg'

    projectsContainer.appendChild(projectsTitle)
    projectsContainer.appendChild(projectsImg)
    document.body.appendChild(projectsContainer)

    return projectsContainer
  }

  const createProjects = (projectsContainer) => {
    const divProjects = document.createElement('div')
    divProjects.classList = 'divElements'

    const createListItem = (label, text, isLink = false, isImg = false) => {
      const listItem = document.createElement('li')
      if (isLink) {
        listItem.innerHTML = `<strong>${label}:</strong> <a href="${text}" target="_blank">${text}</a>`
      } else if (isImg) {
        listItem.innerHTML = `<strong>${label}:</strong> <img src="${text}" alt="${label}" />`
      } else {
        listItem.innerHTML = `<strong>${label}:</strong> ${text}`
      }
      return listItem
    }
    data.projects.forEach((project) => {
      const proj = document.createElement('ul')

      proj.appendChild(createListItem('Title', project.title))
      proj.appendChild(createListItem('Description', project.description))
      proj.appendChild(createListItem('Link', project.link, true))

      divProjects.appendChild(proj)
    })
    projectsContainer.appendChild(divProjects)
  }
  const projectsContainer = container()
  createProjects(projectsContainer)
}
