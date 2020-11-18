import React, { useState } from 'react'

import Navbar from 'components/Navbar'
import HeroSection from 'components/HeroSection'
import Sidebar from 'components/Sidebar'
import InfoSection from 'components/InfoSection'
import Footer from 'components/Footer'
import Services from 'components/Services'

import {
  Ear,
  BodyLanguage,
  ClarityConciseness,
  homeObjThree
} from 'components/InfoSection/data'

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...Ear} />
      <InfoSection {...BodyLanguage} />
      <InfoSection {...ClarityConciseness} />
      <InfoSection {...BodyLanguage} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  )
}

export default HomePage
