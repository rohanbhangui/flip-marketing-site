'use client'

import {
  smallDesktop,
  desktop,
  desktopFHD,
  smallPhone,
  smallTablet,
} from '@/assets/styles/themeConfig'
import Header from '@/components/Header'
import styled from 'styled-components'
import Image from 'next/image'

import Stairs from '@/assets/img/services-pink-stairs.svg'
import GreenStar from '@/assets/img/interruption-green-star.svg'
import BlueAsterisk from '@/assets/img/services-blue-asterisk.svg'
import ServicesBackground from '@/assets/img/services-background.jpg'
import Stories from '@/assets/img/stories-image.png'
import WhatMatters from '@/assets/img/services-what-matters.png'

const Main = styled.main`
  background: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
`

const Hero = styled.section`
  z-index: 1;

  .inner {
    color: white;
    max-width: ${smallDesktop}px;
    width: 100%;
    margin: 3rem auto;
    padding-bottom: 3rem;
    z-index: 10;
    position: sticky;

    @media ${({ theme }) => theme.mediaQuery.smallTablet} {
      padding-top: 5rem;
      padding-bottom: 9rem;
      top: 25vh;
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

    @media ${({ theme }) => theme.mediaQuery.smallTablet} {
      aspect-ratio: 16/9;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.75;
    }
  }
`

const Services = styled.section`
  .inner {
    max-width: ${smallDesktop}px;
    width: 100%;
    margin: 3rem auto 0;
    z-index: 10;

    @media ${({ theme }) => theme.mediaQuery.smallTablet} {
      margin: 3rem auto;
    }

    @media ${({ theme }) => theme.mediaQuery.largeDesktop} {
      max-width: ${desktop}px;
    }

    @media ${({ theme }) => theme.mediaQuery.desktopFHD} {
      max-width: ${desktopFHD}px;
    }

    .offset-grid {
      color: white;
      z-index: 10;
      padding-bottom: 0rem;

      @media ${({ theme }) => theme.mediaQuery.smallTablet} {
        padding-top: 5rem;
        padding-bottom: 3rem;
      }

      .grid-item {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-gap: 1.75rem;
        padding: 0 1rem;
        color: white;
        margin-bottom: 6rem;
        align-items: center;

        &:nth-child(odd) {
          .content {
            @media ${({ theme }) => theme.mediaQuery.smallTablet} {
              grid-column: 7 / 13;
            }
          }

          .img {
            @media ${({ theme }) => theme.mediaQuery.smallTablet} {
              grid-column: 1 / 7;
            }
          }
        }

        /* &:nth-child(even) {
          .content {
            @media ${({ theme }) => theme.mediaQuery.smallTablet} {
            }
          }

          .img {
            @media ${({ theme }) => theme.mediaQuery.smallTablet} {
            }
          }
        } */

        .content {
          grid-column: 1 / 13;
          margin-bottom: 1rem;

          @media ${({ theme }) => theme.mediaQuery.smallTablet} {
            grid-column: 1 / 7;
            grid-row: 1;
          }

          p {
            @media ${({ theme }) => theme.mediaQuery.smallTablet} {
              font-size: 1.25rem;
            }
          }
        }

        .img {
          grid-column: 1 / 13;
          position: relative;

          @media ${({ theme }) => theme.mediaQuery.smallTablet} {
            grid-column: 7 / 13;
            grid-row: 1;
          }

          .content-img {
            width: 100%;
            height: auto;
            border-radius: 2rem;
            box-shadow: 0.75rem 0.75rem 0 0rem
              ${({ theme }) => theme.colors.yellowOrange};

            @media ${({ theme }) => theme.mediaQuery.smallTablet} {
              aspect-ratio: 603/804;
              height: 100%;
              object-fit: cover;
              max-width: ${smallPhone}px;
              margin: 0 auto;
              border-radius: 100rem 100rem 0 0;
            }

            &.yellowOrange {
              box-shadow: 0.75rem 0.75rem 0 0rem
                ${({ theme }) => theme.colors.yellowOrange};

              @media ${({ theme }) => theme.mediaQuery.smallTablet} {
                border-radius: 100rem 100rem 0 0;
              }
            }

            &.blue {
              box-shadow: 0.75rem 0.75rem 0 0rem
                ${({ theme }) => theme.colors.blue};

              @media ${({ theme }) => theme.mediaQuery.smallTablet} {
                border-radius: 0 0 100rem 100rem;
              }
            }

            &.yellow {
              box-shadow: 0.75rem 0.75rem 0 0rem
                ${({ theme }) => theme.colors.yellow};

              @media ${({ theme }) => theme.mediaQuery.smallTablet} {
                border-radius: 0 0 100rem 100rem;
              }
            }
          }

          .adlib {
            position: absolute;
            display: inline-block;
            width: auto;

            &.green-star {
              z-index: 4;
              left: 10%;
              top: 3%;
              transform: translateX(-50%) translateY(-50%);
              width: 4rem;
              height: auto;

              @media ${({ theme }) => theme.mediaQuery.smallTablet} {
                width: 7rem;
                left: 20%;
                top: 10%;
              }

              @media ${({ theme }) => theme.mediaQuery.smallDesktop} {
                width: 8rem;
              }
            }

            &.blue-asterisk {
              z-index: 4;
              left: 10%;
              top: 3%;
              transform: translateX(-50%) translateY(-50%);
              width: 4rem;
              height: auto;

              @media ${({ theme }) => theme.mediaQuery.smallTablet} {
                width: 7rem;
                left: 7.5%;
                top: 15%;
              }

              @media ${({ theme }) => theme.mediaQuery.smallDesktop} {
                width: 8rem;
              }
            }
          }
        }
      }
    }
  }
`

const Fulltile = styled.section`
  background: ${({ theme }) => theme.colors.backgroundLight};

  .inner {
    max-width: ${smallDesktop}px;
    width: 100%;
    margin: 3rem auto;
    z-index: 10;
    padding-bottom: 3rem;
    padding-top: 5rem;

    @media ${({ theme }) => theme.mediaQuery.smallTablet} {
      padding-bottom: 5rem;
    }

    @media ${({ theme }) => theme.mediaQuery.largeDesktop} {
      max-width: ${desktop}px;
    }

    @media ${({ theme }) => theme.mediaQuery.desktopFHD} {
      max-width: ${desktopFHD}px;
    }

    .titles {
      padding: 0 1rem;
      margin-bottom: 4rem;
      margin-top: 4rem;

      .h1 {
        color: white;
        text-align: center;

        &.em {
          text-shadow: #ffffff 1px 0px 0px, #ffffff 0.540302px 0.841471px 0px,
            #ffffff -0.416147px 0.909297px 0px,
            #ffffff -0.989992px 0.14112px 0px,
            #ffffff -0.653644px -0.756802px 0px,
            #ffffff 0.283662px -0.958924px 0px,
            #ffffff 0.96017px -0.279415px 0px;
          color: ${({ theme }) => theme.colors.backgroundLight};

          @media ${({ theme }) => theme.mediaQuery.smallTablet} {
            text-shadow: #ffffff 2px 0px 0px, #ffffff 1.75517px 0.958851px 0px,
              #ffffff 1.0806px 1.68294px 0px, #ffffff 0.141474px 1.99499px 0px,
              #ffffff -0.832294px 1.81859px 0px,
              #ffffff -1.60229px 1.19694px 0px, #ffffff -1.97998px 0.28224px 0px,
              #ffffff -1.87291px -0.701566px 0px,
              #ffffff -1.30729px -1.5136px 0px,
              #ffffff -0.421592px -1.95506px 0px,
              #ffffff 0.567324px -1.91785px 0px,
              #ffffff 1.41734px -1.41108px 0px,
              #ffffff 1.92034px -0.558831px 0px;
          }
        }
      }
    }

    .stories-img {
      position: relative;
      aspect-ratio: 16/9;
      padding: 0 1rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 2.5rem;

        @media ${({ theme }) => theme.mediaQuery.smallTablet} {
          border-radius: 5rem;
        }
      }
    }

    p {
      color: white;
      max-width: ${smallTablet}px;
      width: 100%;
      margin: 1rem auto;

      @media ${({ theme }) => theme.mediaQuery.smallTablet} {
        /* font-size: 1.25rem; */
        margin: 2rem auto;
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
          <div className="title">
            <span className="highlight">Flip</span> your brand to the top{' '}
            <div className="img-container">
              <Image src={Stairs} alt="pink stairs decoration" />
            </div>
          </div>
        </div>
        <div className="background-image">
          <Image src={ServicesBackground} alt="services background" />
        </div>
      </Hero>
      <Services>
        <div className="inner">
          <div className="offset-grid">
            <div className="grid-item">
              <div className="content">
                <h3>Understanding what matters.</h3>
                <p>
                  Understanding your business is crucial to developing effective
                  marketing strategies that drive results. By honing in on what
                  makes your business unique, we can create marketing messages
                  that differentiate your brand and attract the right customers.
                </p>
              </div>
              <div className="img">
                <Image
                  className="adlib green-star"
                  src={GreenStar}
                  alt="green star decoration"
                />
                <Image
                  className="content-img yellowOrange"
                  src={WhatMatters}
                  alt="people collaborating"
                />
              </div>
            </div>
            <div className="grid-item">
              <div className="content">
                <h3>Understanding what matters.</h3>
                <p>
                  Understanding your business is crucial to developing effective
                  marketing strategies that drive results. By honing in on what
                  makes your business unique, we can create marketing messages
                  that differentiate your brand and attract the right customers.
                </p>
              </div>
              <div className="img">
                <Image
                  className="adlib blue-asterisk"
                  src={BlueAsterisk}
                  alt="green star decoration"
                />
                <Image
                  className="content-img yellow"
                  src={WhatMatters}
                  alt="people collaborating"
                />
              </div>
            </div>
          </div>
        </div>
      </Services>
      <Fulltile>
        <div className="inner">
          <div className="titles">
            <div className="h1 em">Creating Content</div>
            <div className="h1">Telling Stories</div>
          </div>
          <div className="stories-img">
            <Image
              src={Stories}
              alt="capturing the moment people playing basketball"
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </Fulltile>
    </Main>
  )
}

export default Layout
