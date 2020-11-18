import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import * as S from './styles'

const Footer = () => (
  <S.FooterContainer>
    <S.FooterWrap>
      <S.SocialMedia>
        <S.SocialMediaWrap>
          <S.WebsiteRights>Morpa © {new Date().getFullYear()}.</S.WebsiteRights>

          <S.SocialIcons>
            <S.SocialIconLink
              href="https://www.github.com/"
              target="_blank"
              aria-label="Github"
            >
              <FaGithub />
            </S.SocialIconLink>

            <S.SocialIconLink
              href="https://www.linkedin.com/"
              target="_blank"
              aria-label="Linkedin"
            >
              <FaLinkedin />
            </S.SocialIconLink>
          </S.SocialIcons>
        </S.SocialMediaWrap>
      </S.SocialMedia>
    </S.FooterWrap>
  </S.FooterContainer>
)

export default Footer
