import React, { useState } from 'react'

import Navbar from 'components/Navbar'
import HeroSection from 'components/HeroSection'
import Sidebar from 'components/Sidebar'
import InfoSection from 'components/InfoSection'
import Footer from 'components/Footer'

import {
  Empathy,
  Cooperation,
  Communication,
  Ear,
  NoVerbal
} from 'components/InfoSection/data'

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...Empathy} />
      <InfoSection {...Cooperation} />
      <InfoSection {...Communication} />
      <InfoSection {...Ear} />
      <InfoSection {...NoVerbal} />
      <Footer />
    </>
  )
}

export default HomePage
