'use client'

import _Header from '@/components/Header'
import Image from 'next/image'
import styled from 'styled-components'
import Flip from '@/assets/img/hero-flip.svg'
import Curl from '@/assets/img/hero-curl.svg'
import { smallDesktop } from '@/assets/styles/themeConfig'

const Main = styled.main`
  background: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
`

const Header = styled(_Header)`
  padding-top: 1rem;

  @media ${({ theme }) => theme.mediaQuery.smallTablet} {
    padding-top: 3rem;
  }
`

const Hero = styled.section`
  color: white;
  max-width: ${smallDesktop}px;
  width: 100%;
  margin: 3rem auto;

  @media ${({ theme }) => theme.mediaQuery.smallTablet} {
    padding-top: 5rem;
  }

  .title {
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.secondary};
    width: 100%;
    text-align: center;
    padding: 0 1rem;
    font-size: min(10vw, 40rem);

    @media ${({ theme }) => theme.mediaQuery.smallDesktop} {
      font-size: min(8.2vw, 40rem);
    }

    > * {
      font-family: ${({ theme }) => theme.fonts.secondary};
    }

    .img-container {
      display: inline-block;
      height: min(7vw, 15rem);

      img {
        height: 100%;
        width: auto;
      }
    }
  }
`

const Home = () => {
  return (
    <Main>
      <Header />
      <Hero>
        <div className="title">
          Flip{' '}
          <div className="img-container">
            <Image src={Flip} alt="" />{' '}
          </div>{' '}
          the tide of{' '}
          <div className="img-container">
            <Image src={Curl} alt="" />{' '}
          </div>{' '}
          average marketing
        </div>
      </Hero>
    </Main>
  )
}

export default Home
