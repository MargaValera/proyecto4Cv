import './main.css'
import { createHeader } from '/components/header/header'
import { createHero } from './components/hero/hero'
import { personal } from './components/personalInfo/personalInfo'
import { education } from './components/education/education'

import { data } from './components/data/data'

createHeader(data)
createHero(data)
personal(data)
education(data)
