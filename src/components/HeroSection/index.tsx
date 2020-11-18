import React from 'react'

import video from 'videos/video.mp4'

import * as S from './styles'

const HeroSection = () => (
  <S.HeroContainer id="home">
    <S.HeroBg>
      <S.VideoBg autoPlay loop muted src={video} />
    </S.HeroBg>
    <S.HeroContent>
      <S.HeroH1>Quer se destacar da concorrência?</S.HeroH1>
      <S.HeroP>
        Essas são algumas das principais habilidades de comunicação que os
        recrutadores e gerentes desejam ver em seu currículo...
      </S.HeroP>
    </S.HeroContent>
  </S.HeroContainer>
)

export default HeroSection
