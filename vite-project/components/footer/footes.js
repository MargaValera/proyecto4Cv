import './footer.css'

export const footer = (redes) => {
  const footerContainer = document.createElement('footer')
  footerContainer.id = 'footer'
  document.body.appendChild(footerContainer)

  const footerP = document.createElement('h5')
  footerP.textContent = 'Made by Marga Valera'
  const copy = document.createElement('p')
  copy.id = 'footerP'
  copy.textContent = 'Copyright 2024'
  footerContainer.appendChild(footerP)
  footerContainer.appendChild(copy)
  const footerLogos = (redes) => {
    const createLogo = (img, alt, a) => {
      const logo = document.createElement('img')
      logo.classList = 'logo'
      logo.src = img
      logo.alt = alt
      return logo
    }
    const logodDiv = document.createElement('div')
    logodDiv.id = 'divLogos'

    const img1 = './assets/github.png'
    const img2 = './assets/linkedin.png'

    const logocontainer = footerContainer
    logodDiv.appendChild(createLogo(img1, redes.GitHub))
    logodDiv.appendChild(createLogo(img2, redes.LinkIn))
    logocontainer.appendChild(logodDiv)
  }
  footerLogos(redes)
}
