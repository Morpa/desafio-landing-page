import styled, { css } from 'styled-components'
import { FaTimes } from 'react-icons/fa'

type SidebarContainerProps = {
  isOpen?: boolean
}

const sidebarModifiers = {
  open: () => css`
    opacity: 100%;
    top: 0;
  `,
  close: () => css`
    opacity: 0;
    top: 100%;
  `
}

export const SidebarContainer = styled.aside<SidebarContainerProps>`
  ${({ isOpen }) => css`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3 ease-in-out;

    ${!isOpen && sidebarModifiers.open()};
    ${!!isOpen && sidebarModifiers.close()};
  `}
`

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const SidebarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 8rem);

  @media screen and (max-width: 58rem) {
    grid-template-rows: repeat(6, 6rem);
  }
`
