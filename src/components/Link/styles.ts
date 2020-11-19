import styled, { css } from 'styled-components'
import { Link as LinkScroll } from 'react-scroll'

import { LinksProps } from '.'

type LinkProps = Pick<LinksProps, 'sidebar'>

const linksModifiers = {
  normal: () => css`
    &.active {
      border-bottom: 3px solid #f231a5;
    }
  `,
  side: () => css`
    justify-content: center;
    font-size: 1.5rem;
    list-style: none;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &.active {
      border-bottom: 3px solid #f231a5;
    }

    &:hover {
      color: #3cd3c1;
      transition: 0.2s ease-in-out;
    }
  `
}

export const Links = styled(LinkScroll)<LinkProps>`
  ${({ sidebar }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    ${!sidebar && linksModifiers.normal()};
    ${!!sidebar && linksModifiers.side()};
  `}
`
