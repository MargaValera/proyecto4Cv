import './education.css'

export const education = (data) => {
  const educationContainer = document.createElement('section')
  educationContainer.classList = 'cards'

  const educationTitle = document.createElement('h3')
  educationTitle.textContent = 'Education'
  education.id = 'Education'
  educationContainer.appendChild(educationTitle)

  const educationImg = document.createElement('img')
  educationImg.src = './assets/educacion (2).png'
  educationImg.alt = 'Education'
  educationImg.classList = 'cardsImg'
  educationContainer.appendChild(educationImg)

  const propertiesEducation = ['degree', 'university']
  for (const property of propertiesEducation) {
    const value = data.education[property]
    const educationItems = document.createElement('p')
    educationItems.textContent = `${
      property.charAt(0).toUpperCase() + property.slice(1)
    }: ${value}`
    educationContainer.appendChild(educationItems)
  }
  const relevantCoursesTitle = document.createElement('h3')
  relevantCoursesTitle.textContent = 'Relevant Courses'
  relevantCoursesTitle.id = 'relevantCoursesTitle'

  const relevantCourses = document.createElement('ul')
  data.education.relevantCourses.forEach((course) => {
    const listElement = document.createElement('li')
    listElement.textContent = course
    relevantCourses.appendChild(listElement)
  })

  educationContainer.appendChild(relevantCoursesTitle)
  educationContainer.appendChild(relevantCourses)

  document.body.appendChild(educationContainer)
}
