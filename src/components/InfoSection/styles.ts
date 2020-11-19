import styled from 'styled-components'

type InfoContainerProps = {
  lightBg?: boolean
}

export const InfoContainer = styled.div<InfoContainerProps>`
  color: #f9f9f9;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

  @media screen and (max-width: 768px) {
    padding: 10rem 0;
  }
`

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 660px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`

interface InfoRowProps {
  imgStart?: boolean
}

export const InfoRow = styled.div<InfoRowProps>`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

type HeadingProps = {
  lightText?: boolean
}

export const Heading = styled.h1<HeadingProps>`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  word-wrap: break-word;
  overflow-wrap: break-word;
  font-weight: 700;
  text-align: start;
  color: ${({ lightText }) => (lightText ? '#f9f9f9' : '#010606')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

interface SubtitleProps {
  darkText?: boolean
}

export const Subtitle = styled.p<SubtitleProps>`
  max-width: 540px;
  margin-bottom: 35px;
  font-size: 18px;
  text-align: justify;
  line-height: 24px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  color: ${({ darkText }) => (darkText ? '#010606' : '#f9f9f9')};
`

export const ImgWrap = styled.div`
  max-width: 500px;
  height: 100%;
`

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
`
