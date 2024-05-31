import { data } from '../data/data'

export const projects = (data) => {
  const cards = document.createElement('section')
  cards.id = 'cards'
}

export function personal(data) {
  const personal = document.createElement('section')
  personal.id = 'infoPersonal'

  const propertiesToShow = ['name', 'address', 'email']

  for (const property of propertiesToShow) {
    const value = data.PersonalInfo[property]
    const paragraph = document.createElement('p')
    paragraph.textContent = `${
      property.charAt(0).toUpperCase() + property.slice(1)
    }: ${value}`
    personal.appendChild(paragraph)
  }

  document.body.appendChild(personal)
}
