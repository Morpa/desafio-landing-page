import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { scrollSpy } from 'react-scroll'

import Link from 'components/Link'

import * as S from './styles'

type NavbarProps = {
  toggle: () => void
}

const Navbar = ({ toggle }: NavbarProps) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
    scrollSpy.update()
  }, [])

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <S.Nav scrollNav={scrollNav}>
          <S.NavContainer>
            <S.MobileIcon onClick={toggle}>
              <FaBars />
            </S.MobileIcon>

            <S.NavMenu>
              <S.NavItem>
                <Link to="empathy" text="Empatia" />
              </S.NavItem>

              <S.NavItem>
                <Link to="cooperation" text="Cooperação" />
              </S.NavItem>

              <S.NavItem>
                <Link to="communication" text="Comunicação" />
              </S.NavItem>

              <S.NavItem>
                <Link to="ear" text="Ouvir" />
              </S.NavItem>

              <S.NavItem>
                <Link to="noverbal" text="Comunicação não verbal" />
              </S.NavItem>
            </S.NavMenu>
          </S.NavContainer>
        </S.Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
