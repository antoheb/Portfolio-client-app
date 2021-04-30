import React, { Fragment } from 'react'
import NavBar from '../nav/NavBar'
import { AboutMe } from './AboutMe'
import { ContactPage } from './ContactPage'
import { EducationPage } from './EducationPage'
import { ExperiencePage } from './ExperiencePage'
import { Footer } from './Footer'
import { HomePage } from './HomePage'
import { ProjectPage } from './ProjectPage'
import { SkillsPage } from './SkillsPage'

export const Portfolio: React.FC = () => {
  return (
    <Fragment>
      <NavBar />
      <HomePage />
      <AboutMe />
      <EducationPage />
      <hr style={{ marginLeft: '10em', marginRight: '10em' }} />
      <ExperiencePage />
      <hr style={{ marginLeft: '10em', marginRight: '10em' }} />
      <SkillsPage />
      <ProjectPage />
      <ContactPage />
      <Footer />
    </Fragment>
  )
}
