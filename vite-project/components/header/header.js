// import './header.css'
import { personal } from '../personalInfo/personalInfo'

export function createHeader(data) {
  const container = () => {
    const header = document.createElement('header')
    header.className = 'header'
    header.id = 'container'

    const name = document.createElement('h4')
    name.textContent = data.PersonalInfo.name
    name.id = 'name'
    header.appendChild(name)

    const personalInfoDiv = personal(data.PersonalInfo)
    header.appendChild(personalInfoDiv)

    document.body.appendChild(header)

    return header
  }

  const createNavBar = (header) => {
    const navBar = document.createElement('nav')
    const ul = document.createElement('ul')
    ul.className = 'ulements'
    navBar.id = 'navBar'
    navBar.classList.add('hidden')

    Object.keys(data).forEach((key) => {
      const navButtons = document.createElement('button')

      navButtons.textContent = key

      navButtons.addEventListener('click', () => {
        const section = document.getElementById(key)
        section.scrollIntoView({ behavior: 'smooth' })
      })
      navBar.appendChild(navButtons)
    })
    header.appendChild(navBar)
  }

  const createMenu = (header) => {
    const menu = document.createElement('img')
    menu.src = './assets/lista.png'
    menu.id = 'menu'

    menu.addEventListener('click', () => {
      header.querySelector('#navBar').classList.toggle('hidden')
    })
    header.appendChild(menu)
  }

  const header = container()
  createNavBar(header)
  createMenu(header)
}
