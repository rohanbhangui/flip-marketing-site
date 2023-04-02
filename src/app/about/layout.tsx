'use client'

import { smallDesktop, desktop, desktopFHD } from '@/assets/styles/themeConfig'
import Header from '@/components/Header'
import styled from 'styled-components'
import Image from 'next/image'

import ContactSection from '@/components/ContactSection'

import AboutBackground from '@/assets/img/about-1.png'
import About2 from '@/assets/img/about-2.png'
import About3 from '@/assets/img/about-3.png'

import YellowSquare from '@/assets/img/about-yellow-square.svg'
import RedSquare from '@/assets/img/about-red-square-tilt.svg'
import GreenCircle from '@/assets/img/about-green-circle.svg'
import BlueTriangle from '@/assets/img/about-blue-triangle.svg'

const Main = styled.main`
  background: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
`

const Hero = styled.section`
  z-index: 1;
  overflow: hidden;
  position: relative;

  .inner {
    color: white;
    max-width: ${smallDesktop}px;
    width: 100%;
    margin: 5rem auto;
    padding-bottom: 3rem;
    z-index: 10;
    position: relative;

    @media ${({ theme }) => theme.mediaQuery.smallTablet} {
      padding-top: 5rem;
      padding-bottom: 9rem;
      margin: 5rem auto;
    }

    @media ${({ theme }) => theme.mediaQuery.smallDesktop} {
      margin-bottom: 0;
      padding-bottom: 25vh;
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

      .highlight {
        background: ${({ theme }) => theme.colors.yellowOrange};
        padding: 0 1rem;
      }

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
  }

  .background-image {
    aspect-ratio: 5/4;
    position: relative;
    z-index: 10;

    @media ${({ theme }) => theme.mediaQuery.smallTablet} {
      aspect-ratio: 16/9;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .adlib {
    position: absolute;
    z-index: 2;
    transform: translateX(-50%) translateY(-50%);

    &.yellow-square {
      left: 95%;
      top: 20%;
      width: 5rem;

      @media ${({ theme }) => theme.mediaQuery.phone} {
        width: 10rem;
      }

      @media ${({ theme }) => theme.mediaQuery.smallTablet} {
        width: 12rem;
      }

      @media ${({ theme }) => theme.mediaQuery.smallDesktop} {
        width: 15rem;
      }

      @media ${({ theme }) => theme.mediaQuery.largeDesktop} {
        width: 30rem;
      }
    }

    &.blue-triangle {
      left: 53%;
      top: 10%;
      width: 5rem;

      @media ${({ theme }) => theme.mediaQuery.phone} {
        width: 10rem;
      }

      @media ${({ theme }) => theme.mediaQuery.smallTablet} {
        width: 12rem;
      }

      @media ${({ theme }) => theme.mediaQuery.smallDesktop} {
        width: 12rem;
      }

      @media ${({ theme }) => theme.mediaQuery.largeDesktop} {
        width: 22rem;
      }
    }

    &.red-square {
      left: 20%;
      top: 40%;
      width: 8rem;

      @media ${({ theme }) => theme.mediaQuery.phone} {
        width: 15rem;
      }

      @media ${({ theme }) => theme.mediaQuery.smallTablet} {
        width: 20rem;
      }

      @media ${({ theme }) => theme.mediaQuery.smallDesktop} {
        width: 30rem;
      }

      @media ${({ theme }) => theme.mediaQuery.largeDesktop} {
        width: 45rem;
        top: 35%;
      }
    }

    &.green-circle {
      left: 3%;
      top: 10%;
      width: 5rem;

      @media ${({ theme }) => theme.mediaQuery.phone} {
        width: 8rem;
      }

      @media ${({ theme }) => theme.mediaQuery.smallTablet} {
        width: 11rem;
      }

      @media ${({ theme }) => theme.mediaQuery.smallDesktop} {
        width: 15rem;
      }

      @media ${({ theme }) => theme.mediaQuery.largeDesktop} {
        width: 20rem;
      }
    }
  }
`

const Extra = styled.section`
  .inner {
    position: relative;
    max-width: ${smallDesktop}px;
    width: 100%;
    margin: 3rem auto 0;
    z-index: 10;
    padding-bottom: 2rem;

    @media ${({ theme }) => theme.mediaQuery.smallTablet} {
      padding-bottom: 5rem;
      padding-top: 5rem;
    }

    @media ${({ theme }) => theme.mediaQuery.largeDesktop} {
      max-width: ${desktop}px;
    }

    @media ${({ theme }) => theme.mediaQuery.desktopFHD} {
      max-width: ${desktopFHD}px;
    }

    .grid {
      position: relative;
      z-index: 10;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      margin-top: 0;

      @media ${({ theme }) => theme.mediaQuery.smallTablet} {
        margin-top: 3rem;
      }

      .grid-item {
        padding: 1rem;
        &.image-1 {
          aspect-ratio: 5/4;
          grid-column: 1 / 13;

          @media ${({ theme }) => theme.mediaQuery.smallTablet} {
            grid-column: 1 / 6;
            margin-top: 4rem;
            aspect-ratio: 647/863;
          }

          @media ${({ theme }) => theme.mediaQuery.desktop} {
            margin-top: 6rem;
          }

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        &.second {
          grid-column: 1 / 13;
          @media ${({ theme }) => theme.mediaQuery.smallTablet} {
            grid-column: 7 / 13;
            justify-self: flex-end;
          }

          .content {
            padding: 1rem;

            @media ${({ theme }) => theme.mediaQuery.smallTablet} {
              padding: 0 2rem 0 0;
            }

            @media ${({ theme }) => theme.mediaQuery.smallDesktop} {
              margin-bottom: 3rem;
              padding: 0 4rem 0 0;
            }
          }

          .img-container {
            aspect-ratio: 780/961;
            display: none;

            @media ${({ theme }) => theme.mediaQuery.smallTablet} {
              display: block;
            }

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
      }
    }

    .adlib-container {
      .adlib {
        position: absolute;
        z-index: 5;
        transform: translateX(-50%) translateY(-50%);

        &.yellow-square {
          left: 70%;
          top: 30%;

          @media ${({ theme }) => theme.mediaQuery.smallTablet} {
            width: 20rem;
            top: 40%;
          }

          @media ${({ theme }) => theme.mediaQuery.smallDesktop} {
            width: 30rem;
          }

          @media ${({ theme }) => theme.mediaQuery.largeDesktop} {
            width: 40rem;
          }
        }

        &.blue-circle {
          left: 20%;
          top: 70%;
          width: 15rem;

          @media ${({ theme }) => theme.mediaQuery.smallTablet} {
            width: 20rem;
          }

          @media ${({ theme }) => theme.mediaQuery.smallDesktop} {
            width: 30rem;
          }

          @media ${({ theme }) => theme.mediaQuery.largeDesktop} {
            width: 40rem;
          }
        }
      }
    }
  }
`

const Layout = () => {
  return (
    <Main>
      <Header />
      <Hero>
        <div className="inner">
          <h1 className="title">Crafting Stories</h1>
        </div>
        <div className="background-image">
          <Image src={AboutBackground} alt="about background" />
        </div>
        <div className="adlib yellow-square">
          <Image src={YellowSquare} alt="yellow square shape decoration" />
        </div>
        <div className="adlib red-square">
          <Image src={RedSquare} alt="red square shape decoration" />
        </div>
        <div className="adlib green-circle">
          <Image src={GreenCircle} alt="green circle shape decoration" />
        </div>
        <div className="adlib blue-triangle">
          <Image src={BlueTriangle} alt="blue triangle shape decoration" />
        </div>
      </Hero>
      <Extra>
        <div className="inner">
          <div className="grid">
            <div className="grid-item image-1">
              <Image src={About2} alt="zaid in action" />
            </div>
            <div className="grid-item second">
              <div className="content">
                <p className="large">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
                <p className="large secondary">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div className="img-container">
                <Image src={About3} alt="zaid in action again" />
              </div>
            </div>
          </div>
        </div>
      </Extra>
      <ContactSection />
    </Main>
  )
}

export default Layout
