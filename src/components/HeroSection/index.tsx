import React from 'react'

import video from 'assets/videos/video.mp4'

import * as S from './styles'

const HeroSection = () => (
  <S.HeroContainer id="home">
    <S.HeroBg>
      <S.VideoBg autoPlay loop muted src={video} />
    </S.HeroBg>
    <S.HeroContent>
      <S.HeroH1>Habilidades sociais</S.HeroH1>
      <S.HeroP>
        Se você trabalha em equipe, precisa ser capaz de se dar bem com outras
        pessoas. Se você trabalha com clientes, deve ouvir atentamente suas
        dúvidas e preocupações. Se você for um gerente, deverá motivar os
        funcionários.
      </S.HeroP>
    </S.HeroContent>
  </S.HeroContainer>
)

export default HeroSection
