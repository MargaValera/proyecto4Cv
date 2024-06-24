import './main.css'
import { createHeader } from '/components/header/header'
import { createHero } from './components/hero/hero'
import { personal } from './components/personalInfo/personalInfo'
import { education } from './components/education/education'
import { workExperience } from './components/work/work'

import { data } from './components/data/data'

createHeader(data)
personal(data)
createHero(data)
education(data)
workExperience(data)
