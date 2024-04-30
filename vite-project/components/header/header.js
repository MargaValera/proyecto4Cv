import './header.css'

export function createHeader(data) {
  const header = document.createElement('header')
  header.className = 'header'

  const name = document.createElement('h4')
  name.textContent = data.PersonalInfo.name
  name.id = 'name'

  const navBar = document.createElement('nav')
  const ul = document.createElement('ul')
  ul.className = 'ulements'
  navBar.id = 'navBar'

  Object.keys(data).forEach((key) => {
    const li = document.createElement('li')
    const anchor = document.createElement('a')

    anchor.textContent = key

    anchor.addEventListener('click', () => {
      const section = document.getElementById(key)
      section.scrollIntoView({ behavior: 'smooth' })
    })
    li.appendChild(anchor)
    ul.appendChild(li)
  })
  header.appendChild(name)
  header.appendChild(navBar)
  navBar.appendChild(ul)

  document.body.appendChild(header)

  return navBar
}
