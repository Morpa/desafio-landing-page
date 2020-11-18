import styled, { css } from 'styled-components'

type NavProps = {
  scrollNav?: boolean
}

const navModifiers = {
  hero: () => css`
    background-color: transparent;
  `,
  black: () => css`
    background-color: #000;
  `
}

export const Nav = styled.nav<NavProps>`
  ${({ scrollNav }) => css`
    height: 8rem;
    margin-top: -8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    ${!scrollNav && navModifiers.hero()};
    ${!!scrollNav && navModifiers.black()};

    @media screen and (max-width: 96rem) {
      transiton: 0.8 all ease;
    }
  `}
`

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 8rem;
  z-index: 1;
  width: 100%;
  padding: 0 2.4rem;
  max-width: 110rem;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -2.2rem;

  @media screen and (max-width: 77rem) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 8rem;
  font-size: 2rem;
`
