import React from 'react'

type InfoProps = {
  id: string
  topLine: string
  headline: string
  description: string
  img: string
  alt: string
  lightBg: boolean
  lightText: boolean
  lightTextDesc: boolean
  imgStart: boolean
  dark: boolean
  primary: boolean
  darkText: boolean
}

import * as S from './styles'

const InfoSection = ({
  id,
  topLine,
  headline,
  description,
  img,
  alt,
  lightBg,
  lightText,
  imgStart,
  darkText
}: InfoProps) => (
  <S.InfoContainer id={id} lightBg={lightBg}>
    <S.InfoWrapper>
      <S.InfoRow imgStart={imgStart}>
        <S.Column1>
          <S.TextWrapper>
            <S.TopLine>{topLine}</S.TopLine>
            <S.Heading lightText={lightText}>{headline}</S.Heading>
            <S.Subtitle darkText={darkText}>{description}</S.Subtitle>
          </S.TextWrapper>
        </S.Column1>
        <S.Column2>
          <S.ImgWrap>
            <S.Img src={img} alt={alt} />
          </S.ImgWrap>
        </S.Column2>
      </S.InfoRow>
    </S.InfoWrapper>
  </S.InfoContainer>
)

export default InfoSection
