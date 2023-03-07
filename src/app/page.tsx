'use client'

import _Header from '@/components/Header'
import Image from 'next/image'
import styled from 'styled-components'
import Flip from '@/assets/img/hero-flip.svg'
import Curl from '@/assets/img/hero-curl.svg'
import GreenCircleGrid from '@/assets/img/light-green-circle-grid.svg'
import MottoImage from '@/assets/img/motto-image.png'
import { desktop, desktopFHD, smallDesktop } from '@/assets/styles/themeConfig'
import Button from '@/components/Button'

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

  @media ${({ theme }) => theme.mediaQuery.largeDesktop} {
    max-width: ${desktop}px;
  }

  @media ${({ theme }) => theme.mediaQuery.desktopFHD} {
    max-width: ${desktopFHD}px;
  }

  .title {
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.secondary};
    width: 100%;
    text-align: center;
    padding: 0 1rem;
    font-size: min(10vw, 40rem);

    @media ${({ theme }) => theme.mediaQuery.smallDesktop} {
      font-size: 7.5rem;
    }

    @media ${({ theme }) => theme.mediaQuery.desktopFHD} {
      font-size: 12rem;
    }

    > * {
      font-family: ${({ theme }) => theme.fonts.secondary};
      vertical-align: middle;
    }

    .img-container {
      display: inline-block;
      height: min(8vw, 15rem);

      @media ${({ theme }) => theme.mediaQuery.smallPhone} {
        height: min(7vw, 12rem);
      }

      img {
        height: 100%;
        width: auto;
      }
    }
  }

  .action-buttons {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 2rem;

    a {
      margin: 0.5rem;
    }
  }
`

const Motto = styled.section`
  position: relative;
  padding: 6rem 1rem 2rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 0rem;

  @media ${({ theme }) => theme.mediaQuery.smallTablet} {
    grid-gap: 1rem;
  }

  .adlib {
    position: absolute;
    left: 25%;
    transform: translateX(-50%) translateY(-50%);
    top: 14%;
    max-width: 6rem;

    @media ${({ theme }) => theme.mediaQuery.smallTablet} {
      max-width: 6rem;
      top: 23%;
      left: 10%;
    }

    @media ${({ theme }) => theme.mediaQuery.smallDesktop} {
      max-width: 9rem;
      top: 15%;
      left: 10%;
    }

    @media ${({ theme }) => theme.mediaQuery.desktopFHD} {
      max-width: 12rem;
    }
  }

  .img-container {
    aspect-ratio: 3/2.3;
    grid-column: 1/13;
    border-radius: 2.5rem 2.5rem 0 0;
    overflow: hidden;

    @media ${({ theme }) => theme.mediaQuery.smallTablet} {
      grid-column: 1/8;
      aspect-ratio: 3/1.8;
      border-radius: 0 2.5rem 2.5rem 0;
    }

    @media ${({ theme }) => theme.mediaQuery.smallDesktop} {
      border-radius: 0 5rem 5rem 0;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content {
    grid-column: 1/13;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 0 2.5rem 2.5rem;
    color: white;
    background: ${({ theme }) => theme.colors.orange};

    @media ${({ theme }) => theme.mediaQuery.smallTablet} {
      grid-column: 8/11;
      border-radius: 2.5rem;
    }

    @media ${({ theme }) => theme.mediaQuery.smallDesktop} {
      border-radius: 5rem;
    }

    .inner {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;
      padding: 15% 4rem;
      height: 100%;

      @media ${({ theme }) => theme.mediaQuery.smallTablet} {
        padding: 20% 4rem;
      }

      h3 {
        display: block;
        line-height: 1.1;
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
        <div className="action-buttons">
          <Button
            href="#"
            type="secondary"
            label={
              <>
                <i className="fa-sharp fa-solid fa-play" />
                Check us out
              </>
            }
          />
          <Button href="#" type="secondary-alt" label="Our Services" />
        </div>
      </Hero>
      <Motto>
        <div className="adlib circle-grid">
          <Image src={GreenCircleGrid} alt="circle grid decoration" />
        </div>
        <div className="img-container">
          <Image
            src={MottoImage}
            alt="people working together at a desk looking at a screen"
          />
        </div>
        <div className="content">
          <div className="inner">
            <h3>Analyze Data</h3>
            <h3>Unlock Potential</h3>
            <h3>Increase Presence</h3>
          </div>
        </div>
      </Motto>
    </Main>
  )
}

export default Home
