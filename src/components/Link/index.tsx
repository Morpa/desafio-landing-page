import React from 'react'

import * as S from './styles'

export type LinksProps = {
  to: string
  text: string
  onClick?: () => void
  sidebar?: boolean
}

const Link = ({ to, text, onClick, sidebar }: LinksProps) => {
  return (
    <S.Links
      sidebar={sidebar}
      to={to}
      smooth={true}
      duration={500}
      spy={true}
      offset={-80}
      onClick={onClick}
    >
      {text}
    </S.Links>
  )
}

export default Link
