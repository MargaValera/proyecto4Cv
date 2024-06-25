export function personal(personalInfo) {
  const personalInfoDiv = document.createElement('div')
  personalInfoDiv.id = 'personal-info'

  const personalLogos = (personalInfo) => {
    const createLogo = (img, alt) => {
      const logo = document.createElement('img')
      logo.classList = 'logo'
      logo.src = img
      logo.alt = alt
      return logo
    }
    const logodDiv = document.createElement('div')
    logodDiv.id = 'divLogos'

    const img1 = './assets/envelope.png'
    const img2 = './assets/phone-call.png'
    const img3 = './assets/marker.png'

    const logocontainer = personalInfoDiv
    logodDiv.appendChild(createLogo(img1, 'email'))
    logodDiv.appendChild(createLogo(img2, 'phone'))
    logodDiv.appendChild(createLogo(img3, 'address'))
    logocontainer.appendChild(logodDiv)
  }

  const personalPes = (personalInfo) => {
    const createParagraph = (text) => {
      const p = document.createElement('p')
      p.textContent = text
      return p
    }
    const container = personalInfoDiv
    const divContainer = document.createElement('div')
    divContainer.id = 'divPes'
    divContainer.appendChild(createParagraph(personalInfo.email))
    divContainer.appendChild(createParagraph(personalInfo.phone))
    divContainer.appendChild(createParagraph(personalInfo.address))
    container.appendChild(divContainer)
  }
  personalLogos(personalInfo)
  personalPes(personalInfo)

  return personalInfoDiv
}
