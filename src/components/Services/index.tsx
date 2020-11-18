import React from 'react'

import Icon1 from 'images/svg-1.svg'
import Icon2 from 'images/undraw_wallet_aym5.webp'
import Icon3 from 'images/undraw_gift_card_6ekc.svg'

import * as S from './styles'

const Services = () => (
  <S.ServiceContainer id="services">
    <S.ServicesH1>Our services</S.ServicesH1>
    <S.ServicesWrapper>
      <S.ServicesCard>
        <S.ServicesIcon src={Icon1} />
        <S.ServicesH2>Reduce expenses</S.ServicesH2>
        <S.ServicesP>
          We help reduce your fess and increase your overall revenue.
        </S.ServicesP>
      </S.ServicesCard>
      <S.ServicesCard>
        <S.ServicesIcon src={Icon2} />
        <S.ServicesH2>Virtual Offices</S.ServicesH2>
        <S.ServicesP>
          You can access our platform online anywhere in the world.
        </S.ServicesP>
      </S.ServicesCard>
      <S.ServicesCard>
        <S.ServicesIcon src={Icon3} />
        <S.ServicesH2>Premium Benefits</S.ServicesH2>
        <S.ServicesP>
          Unlock our special membership card that returns 5% cash back.
        </S.ServicesP>
      </S.ServicesCard>
    </S.ServicesWrapper>
  </S.ServiceContainer>
)

export default Services
