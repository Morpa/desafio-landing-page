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
          <Link to="empathy" text="Empatia" onClick={toggle} sidebar />

          <Link to="cooperation" text="Cooperação" onClick={toggle} sidebar />

          <Link
            to="communication"
            text="Comunicação"
            onClick={toggle}
            sidebar
          />

          <Link to="ear" text="Ouvir" onClick={toggle} sidebar />

          <Link
            to="noverbal"
            text="Comunicação não verbal"
            onClick={toggle}
            sidebar
          />
        </S.SidebarMenu>
      </S.SidebarWrapper>
    </S.SidebarContainer>
  )
}

export default Sidebar
