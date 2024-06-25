import './main.css'
import { createHeader } from '/components/header/header'
import { createHero } from './components/hero/hero'
import { personal } from './components/personalInfo/personalInfo'
import { education } from './components/education/education'
import { workExperience } from './components/work/work'
import { projects } from './components/proyects/projects'

import { data } from './components/data/data'
import { footer } from './components/footer/footes'

createHeader(data)
personal(data.PersonalInfo)
createHero(data)
education(data)
workExperience(data)
projects(data)
footer(data.redes)
