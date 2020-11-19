import styled from 'styled-components'

type InfoContainerProps = {
  lightBg?: boolean
}

export const InfoContainer = styled.div<InfoContainerProps>`
  color: #f9f9f9;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

  @media screen and (max-width: 77rem) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 35rem 0;
    flex-flow: column wrap;
    align-items: center;
    justify-content: flex-start;
    align-self: auto;
  }
`

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 66rem;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 2.4rem;
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

  @media screen and (max-width: 77rem) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`

export const Column1 = styled.div`
  margin-bottom: 1rem;
  padding: 0 1rem;
  grid-area: col1;
`

export const Column2 = styled.div`
  margin-bottom: 1rem;
  padding: 0 1rem;
  grid-area: col2;
`

export const TextWrapper = styled.div`
  max-width: 54rem;
  padding-top: 0;
  padding-bottom: 6rem;
`

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 1.6rem;
  line-height: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  margin-bottom: 1.6rem;
`

type HeadingProps = {
  lightText?: boolean
}

export const Heading = styled.h1<HeadingProps>`
  margin-bottom: 2rem;
  font-size: 4.8rem;
  line-height: 1.1;
  word-wrap: break-word;
  overflow-wrap: break-word;
  font-weight: 700;
  text-align: start;
  color: ${({ lightText }) => (lightText ? '#f9f9f9' : '#010606')};

  @media screen and (max-width: 48rem) {
    font-size: 3.2rem;
  }
`

interface SubtitleProps {
  darkText?: boolean
}

export const Subtitle = styled.p<SubtitleProps>`
  max-width: 54rem;
  margin-bottom: 3.5rem;
  font-size: 1.8rem;
  text-align: justify;
  line-height: 2.4rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
  color: ${({ darkText }) => (darkText ? '#010606' : '#f9f9f9')};
`

export const ImgWrap = styled.div`
  max-width: 50rem;
  height: 100%;
`

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
`
