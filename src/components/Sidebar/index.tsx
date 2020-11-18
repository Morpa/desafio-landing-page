import React from 'react'

import Link from 'components/Link'

import * as S from './styles'

type SidebarProps = {
  isOpen: boolean
  toggle: () => void
}

const Sidebar = ({ isOpen, toggle }: SidebarProps) => {
  return (
    <S.SidebarContainer isOpen={isOpen}>
      <S.Icon onClick={() => toggle()}>
        <S.CloseIcon />
      </S.Icon>
      <S.SidebarWrapper>
        <S.SidebarMenu>
          <Link to="about" text="About" onClick={toggle} sidebar />

          <Link to="discover" text="Discover" onClick={toggle} sidebar />

          <Link to="services" text="Services" onClick={toggle} sidebar />

          <Link to="signup" text="Sign up" onClick={toggle} sidebar />
        </S.SidebarMenu>
      </S.SidebarWrapper>
    </S.SidebarContainer>
  )
}

export default Sidebar
