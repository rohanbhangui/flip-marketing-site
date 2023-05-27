'use client'

import {
  smallDesktop,
  desktop,
  desktopFHD,
  smallPhone,
  smallTablet,
  tablet,
  phone,
} from '@/assets/styles/themeConfig'
import Header from '@/components/Header'
import styled from 'styled-components'
import Image from 'next/image'

import Stairs from '@/assets/img/services-pink-stairs.svg'
import GreenStar from '@/assets/img/interruption-green-star.svg'
import BlueAsterisk from '@/assets/img/services-blue-asterisk.svg'
import YellowSquare from '@/assets/img/services-yellow-square.svg'
import BlueCircle from '@/assets/img/services-blue-circle.svg'
import ServicesBackground from '@/assets/img/services-background.jpg'
import Stories from '@/assets/img/stories-image.png'
import WhatMatters from '@/assets/img/IMG_2082-evolve.jpeg'
import ChartingCourse from '@/assets/img/278392327_1004535447120901_2560200747656825138_n.jpeg'
import CreatingContentTellingStories from '@/assets/img/creating-content-telling-stories.svg'
import DetailsMain from '@/assets/img/IMG_0272.png'
import DetailsSide from '@/assets/img/IMG_0377.jpeg'
import ContactSection from '@/components/ContactSection'

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

            color: rgba(255, 255, 255, 0.33);
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

            @media ${({ theme }) => theme.mediaQuery.largeDesktop} {
              max-width: none;
              max-width: ${phone}px;
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

              @media ${({ theme }) => theme.mediaQuery.largeDesktop} {
                left: 27%;
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

              @media ${({ theme }) => theme.mediaQuery.largeDesktop} {
                left: 18%;
              }
            }
          }
        }
      }
    }
  }
`

const Fulltile = styled.section`
  .inner {
    max-width: ${smallDesktop}px;
    width: 100%;
    margin: 3rem auto;
    z-index: 10;
    padding-bottom: 3rem;

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
      margin: 1rem 1rem;
      aspect-ratio: 1/1;
      background: url(${Stories.src});
      background-size: cover;
      border-radius: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;

      @media ${({ theme }) => theme.mediaQuery.phone} {
        aspect-ratio: 5/4;
      }

      @media ${({ theme }) => theme.mediaQuery.smallTablet} {
        border-radius: 5rem;
        margin: 2.5rem 1rem;
        aspect-ratio: 5/3;
      }

      @media ${({ theme }) => theme.mediaQuery.smallDesktop} {
        aspect-ratio: 16/9;
        margin: 4rem 1rem;
      }

      .creating-stories-title {
        display: inline-block;
        margin: 0 auto;
        width: 100%;
        max-width: 20rem;

        @media ${({ theme }) => theme.mediaQuery.phone} {
          aspect-ratio: 5/4;
          max-width: 30rem;
        }

        @media ${({ theme }) => theme.mediaQuery.smallTablet} {
          max-width: 40rem;
        }

        @media ${({ theme }) => theme.mediaQuery.desktop} {
          max-width: 50rem;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }

    .content {
      max-width: ${phone}px;
      width: 100%;
      padding: 0 2rem;

      @media ${({ theme }) => theme.mediaQuery.smallTablet} {
        max-width: ${smallTablet}px;
        padding: 0 10%;
      }

      @media ${({ theme }) => theme.mediaQuery.smallDesktop} {
        max-width: ${tablet}px;
        padding: 0 10%;
      }

      @media ${({ theme }) => theme.mediaQuery.largeDesktop} {
        max-width: ${smallDesktop}px;
        padding: 0 10%;
      }
    }
  }
`

const Details = styled.section`
  background: ${({ theme }) => theme.colors.backgroundLight};
  overflow: hidden;

  .inner {
    position: relative;
    max-width: ${smallDesktop}px;
    width: 100%;
    margin: 3rem auto 0;
    z-index: 10;
    padding-bottom: 6rem;
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
        &.main {
          aspect-ratio: 0.88/1;
          grid-column: 1 / 13;

          @media ${({ theme }) => theme.mediaQuery.smallTablet} {
            grid-column: 1 / 8;
          }

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        &.side {
          aspect-ratio: 510/646;
          grid-column: 9 / 13;
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

        &.content {
          grid-column: 1 / 13;

          @media ${({ theme }) => theme.mediaQuery.smallTablet} {
            grid-column: 4 / 13;
            justify-self: flex-end;
          }

          @media ${({ theme }) => theme.mediaQuery.largeDesktop} {
            grid-column: 7 / 13;
            justify-self: flex-end;
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
            top: 75%;
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
          <h1 className="title">
            <span className="highlight">Flip</span> your brand to the top{' '}
            <div className="img-container">
              <Image src={Stairs} alt="pink stairs decoration" />
            </div>
          </h1>
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
                <h3>Understanding your customers from the metrics up.</h3>
                <p>
                  Analyzing a business&apos;s data can provide valuable insights
                  into performance and help identify areas of focus. With the
                  right tools and expertise, businesses can make data-driven
                  decisions to increase efficiency, productivity, and revenue.
                  By partnering with Flip, we can offer customized solutions
                  that cater to your specific needs and help you unlock the full
                  potential of your data.
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
                <h3>Charting a course to success.</h3>
                <p>
                  Flip builds a customized market strategy for your business
                  based around our analysis of your data. Our team can work
                  closely with your business to create a personalized plan that
                  maximizes your marketing efforts and distinguishes you from
                  the competition.
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
                  src={ChartingCourse}
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
            <div className="creating-stories-title">
              <Image
                src={CreatingContentTellingStories}
                alt="Creating Content, Telling Stories"
              />
            </div>
          </div>
          <div className="content">
            <p className="large">
              Creating content that engages your idea customer.
            </p>
            <p className="large secondary">
              At Flip understand the importance of connecting with your
              customers on a deeper level and telling stories that resonate with
              them. That is why we use a human-centric approach to marketing
              that focuses on building authentic connections with your audience.
            </p>
          </div>
        </div>
      </Fulltile>
      <Details>
        <div className="inner">
          <div className="grid">
            <div className="grid-item main">
              <div className="img-container">
                <Image src={DetailsMain} alt="details matter" />
              </div>
            </div>
            <div className="grid-item side">
              <div className="img-container">
                <Image src={DetailsSide} alt="details matter secondary shot" />
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="grid-item content">
              <p className="large">Getting into the nitty-gritty.</p>
              <p className="large secondary">
                At Flip, we have a diverse network of professionals who help you
                build your brand for long-term success. From engaging content to
                influencer partnerships, our team delivers real results that
                resonate with your audience and stand out in your industry.
              </p>
            </div>
          </div>
          <div className="adlib-container">
            <Image
              className="adlib yellow-square"
              src={YellowSquare}
              alt="yellow square decoration"
            />
          </div>
          <div className="adlib-container">
            <Image
              className="adlib blue-circle"
              src={BlueCircle}
              alt="blue circle decoration"
            />
          </div>
        </div>
      </Details>
      <ContactSection />
    </Main>
  )
}

export default Layout
