'use client'

import _Header from '@/components/Header'
import Image from 'next/image'
import styled from 'styled-components'

import InterruptionCollab from '@/assets/img/interruption-collab.png'
import VideoReel from '@/assets/img/video-reel.png'
import MottoImage from '@/assets/img/motto-image.png'

import Flip from '@/assets/img/hero-flip.svg'
import Curl from '@/assets/img/hero-curl.svg'
import GreenCircleGrid from '@/assets/img/light-green-circle-grid.svg'
import BlueDoor from '@/assets/img/our-work-door.svg'
import RedRainbow from '@/assets/img/our-work-rainbow.svg'
import OrangeDirection from '@/assets/img/video-orange-direction.svg'
import GreenArc from '@/assets/img/video-green-arc.svg'
import GreenStar from '@/assets/img/interuption-green-start.svg'

import {
  desktop,
  desktopFHD,
  phone,
  smallDesktop,
  smallTablet,
} from '@/assets/styles/themeConfig'
import Button from '@/components/Button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative, Pagination } from 'swiper'

import Slide1 from '@/assets/img/slide-1.png'
import Slide2 from '@/assets/img/slide-2.png'
import Slide3 from '@/assets/img/slide-3.png'

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/css/effect-creative'
import 'swiper/css/pagination'
import Link from 'next/link'
import { useWindowDimensions } from '@/utils/hooks'
import { useEffect, useState } from 'react'
import ContactSection from '@/components/ContactSection'

const Main = styled.main`
  background: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
  position: relative;

  &:after {
    content: ' ';
    position: absolute;
    inset: 0;
    height: 130vh;
    background-image: radial-gradient(
      hsla(209, 100%, 47%, 0.3) 5%,
      transparent 0
    );
    z-index: 0;
    background-size: 1.5rem 1.5rem;
  }
`

const Header = styled(_Header)`
  padding-top: 1rem;
  position: relative;
  z-index: 1;

  @media ${({ theme }) => theme.mediaQuery.smallTablet} {
    padding-top: 3rem;
  }
`

const Hero = styled.section`
  position: relative;
  z-index: 1;
  .inner {
    color: white;
    max-width: ${smallDesktop}px;
    width: 100%;
    margin: 3rem auto 0;
    padding-bottom: 3rem;

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
  }
`

const Motto = styled.section`
  position: relative;
  z-index: 1;
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

const OurWork = styled.section`
  margin-top: 4rem;
  padding: 6rem 0 1rem;
  overflow: hidden;

  @media ${({ theme }) => theme.mediaQuery.smallTablet} {
    padding: 6rem 0;
  }

  background: ${({ theme }) => theme.colors.backgroundLight};
  color: white;

  .inner {
    color: white;
    max-width: ${smallDesktop}px;
    width: 100%;
    margin: 0 auto 3rem;
    position: relative;
    padding: 0 1rem;

    .header {
      margin-bottom: 3rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      z-index: 2;
      position: relative;

      h1 {
      }
    }

    @media ${({ theme }) => theme.mediaQuery.smallTablet} {
      padding-top: 5rem;
    }

    @media ${({ theme }) => theme.mediaQuery.largeDesktop} {
      max-width: ${desktop}px;
    }

    @media ${({ theme }) => theme.mediaQuery.desktopFHD} {
      max-width: ${desktopFHD}px;
    }

    .swiper-container {
      width: 100%;

      .swiper {
        .swiper-slide {
          color: white;
          height: 19.625rem;

          @media ${({ theme }) => theme.mediaQuery.phone} {
            height: 24rem;
          }

          @media ${({ theme }) => theme.mediaQuery.smallTablet} {
            height: 34rem;
          }

          @media ${({ theme }) => theme.mediaQuery.smallDesktop} {
            height: 41.5rem;
          }

          .img-container {
            height: 100%;
            position: relative;

            img {
              height: 100%;
              width: 100%;
              object-fit: cover;
              filter: brightness(90%);
            }
          }

          .content {
            position: absolute;
            z-index: 5;
            left: 2rem;
            bottom: 2rem;
            text-shadow: 0 0 2px 4px rgba(0, 0, 0, 0.25);
          }
        }
      }

      .swiper-pagination {
        text-align: left;
        margin-left: 2rem;
        position: relative;
        margin-top: 1rem;

        .swiper-pagination-bullet {
          height: 0.4rem;
          width: 0.4rem;
          background: #fff;
          transition: 0.25s ease-in-out;
          display: inline-block;
          border-radius: 5rem;

          &.swiper-pagination-bullet-active {
            background: #fff;
            width: 1.3rem;
          }
        }
      }
    }

    .round-button {
      width: 4rem;
      height: 4rem;
      background: ${({ theme }) => theme.colors.yellow};
      color: black;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100rem;
      position: absolute;
      right: 15%;
      bottom: 9%;
      transform: translateX(50%) translateY(50%);
      z-index: 1;

      @media ${({ theme }) => theme.mediaQuery.smallTablet} {
        height: 6rem;
        width: 6rem;
        font-size: 1.5rem;
        bottom: 5%;
      }
    }

    .adlib {
      position: absolute;
      transform: translateX(-50%) translateY(-50%);

      &.blue-door {
        left: 70%;
        top: 40%;
        width: 12rem;
        height: auto;

        @media ${({ theme }) => theme.mediaQuery.smallTablet} {
          width: 20rem;
          height: auto;
        }

        @media ${({ theme }) => theme.mediaQuery.smallDesktop} {
          width: 30rem;
          height: auto;
        }
      }

      &.red-rainbow {
        top: 60%;
        left: 0%;
        width: 15rem;
        height: auto;
      }
    }
  }
`

const Interruption = styled.section`
  margin-top: 1rem;
  padding-top: 2.5rem;
  padding-bottom: 5rem;

  @media ${({ theme }) => theme.mediaQuery.smallTablet} {
    margin-top: 4rem;
    padding-top: 2.5rem;
    padding-bottom: 5rem;
  }

  .inner {
    color: white;
    max-width: ${smallDesktop}px;
    width: 100%;
    margin: 0 auto 3rem;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1rem;

    h1 {
      margin-bottom: 3rem;
    }

    @media ${({ theme }) => theme.mediaQuery.smallTablet} {
      padding-top: 5rem;
    }

    @media ${({ theme }) => theme.mediaQuery.largeDesktop} {
      max-width: ${desktop}px;
    }

    @media ${({ theme }) => theme.mediaQuery.desktopFHD} {
      max-width: ${desktopFHD}px;
    }

    .content {
      grid-column: 1 / 13;
      padding: 0 1rem;
      order: 2;

      @media ${({ theme }) => theme.mediaQuery.phone} {
        grid-column: 1 / 10;
      }

      @media ${({ theme }) => theme.mediaQuery.smallTablet} {
        grid-column: 1 / 7;
        order: 1;
      }

      p {
        font-family: ${({ theme }) => theme.fonts.primary};
        font-weight: 500;
        line-height: 1.5;
        font-size: 1.2rem;
        margin-bottom: 1.5rem;

        @media ${({ theme }) => theme.mediaQuery.smallTablet} {
          font-size: 1.5rem;
        }

        @media ${({ theme }) => theme.mediaQuery.smallDesktop} {
          font-size: 2.1rem;
          margin-bottom: 2.5rem;
        }

        &.secondary {
          color: rgba(255, 255, 255, 0.33);
        }
      }
    }

    .img-container {
      grid-column: 1 / 13;
      justify-self: flex-start;
      margin-bottom: 3rem;
      order: 1;

      @media ${({ theme }) => theme.mediaQuery.smallTablet} {
        grid-column: 8 / 13;
        margin-top: 20%;
        justify-self: flex-start;
        order: 2;
      }

      img {
        height: 100%;
        width: 100%;
        object-fit: contain;
        max-width: 320px;
        padding: 0 1rem;

        @media ${({ theme }) => theme.mediaQuery.smallTablet} {
          max-width: none;
        }
      }
    }
  }
`

const Video = styled.section`
  padding: 6rem 1rem 2rem;
  background: ${({ theme }) => theme.colors.backgroundLight};

  @media ${({ theme }) => theme.mediaQuery.smallTablet} {
    padding: 6rem 1rem 5rem;
  }

  .inner {
    color: white;
    max-width: ${smallDesktop}px;
    width: 100%;
    margin: 0 auto 3rem;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1rem;

    h1 {
      margin-bottom: 3rem;
      width: 80%;

      @media ${({ theme }) => theme.mediaQuery.smallTablet} {
        max-width: ${smallTablet}px;
      }
    }

    @media ${({ theme }) => theme.mediaQuery.smallTablet} {
      padding-top: 5rem;
    }

    @media ${({ theme }) => theme.mediaQuery.largeDesktop} {
      max-width: ${desktop}px;
    }

    @media ${({ theme }) => theme.mediaQuery.desktopFHD} {
      max-width: ${desktopFHD}px;
    }

    .img-container {
      aspect-ratio: 16/9;
      position: relative;

      .fa-circle-play {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        z-index: 4;
        font-size: 3rem;
        color: ${({ theme }) => theme.colors.yellow};

        @media ${({ theme }) => theme.mediaQuery.smallTablet} {
          font-size: 4.5rem;
        }

        @media ${({ theme }) => theme.mediaQuery.smallDesktop} {
          font-size: 7rem;
        }
      }

      .adlib {
        position: absolute;

        &.orange-triangle {
          z-index: 4;
          right: 10%;
          top: 3%;
          transform: translateX(50%) translateY(-50%);
          width: 4rem;
          height: auto;

          @media ${({ theme }) => theme.mediaQuery.smallTablet} {
            width: 5rem;
          }

          @media ${({ theme }) => theme.mediaQuery.smallDesktop} {
            width: 7rem;
          }
        }

        &.green-arc {
          transform: translateX(-50%) translateY(50%);
          bottom: 0;
          z-index: 0;
          width: 9rem;
          height: auto;

          @media ${({ theme }) => theme.mediaQuery.smallTablet} {
            width: 15rem;
          }

          @media ${({ theme }) => theme.mediaQuery.smallDesktop} {
            width: 20rem;
          }
        }
      }

      .video-reel {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: relative;
        z-index: 3;
      }
    }
  }
`

const OUR_WORK = [
  {
    img: Slide1,
    alt: 'Evolve',
    title: 'Evolve AOC',
  },
  {
    img: Slide2,
    alt: 'Shawarma',
    title: 'Shawarma',
  },
  {
    img: Slide3,
    alt: 'Cold Press',
    title: 'Cold Press',
  },
]

const Home = () => {
  return (
    <Main>
      <Header />
      <Hero>
        <div className="inner">
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
      <OurWork>
        <div className="inner">
          <div className="header">
            <h1>Our Work</h1>
            <Button href="#" type="secondary-alt" label="See All Work" />
          </div>
          <div className="swiper-container">
            <Swiper
              pagination={{
                clickable: true,
              }}
              grabCursor={true}
              effect={'creative'}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: ['-20%', 0, -1],
                },
                next: {
                  translate: ['100%', 0, 0],
                },
              }}
              modules={[EffectCreative, Pagination]}
              className="mySwiper"
            >
              {OUR_WORK.map((work) => (
                <SwiperSlide key={work.title}>
                  <div className="content">
                    <h2>{work.title}</h2>
                  </div>
                  <div className="img-container">
                    <Image src={work.img} alt={work.alt} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <Link href={'#'} className="round-button">
            <i className="fa-sharp fa-solid fa-arrow-up-right" />
          </Link>
          <div className="adlib blue-door">
            <Image src={BlueDoor} alt="blue door shape decoration" />
          </div>
          <div className="adlib red-rainbow">
            <Image src={RedRainbow} alt="red rainbow shape decoration" />
          </div>
        </div>
      </OurWork>
      <Interruption>
        <div className="inner">
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <p className="secondary">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <Button href="#" type="secondary-alt" label="See How We Work" />
          </div>
          <div className="img-container">
            <Image src={InterruptionCollab} alt="people collaborating" />
          </div>
        </div>
      </Interruption>
      <Video>
        <div className="inner">
          <h1>Work based on experience</h1>
          <div className="img-container">
            <i className="fa-sharp fa-solid fa-circle-play" />
            <Image className="video-reel" src={VideoReel} alt="video reel" />
            <div className="adlib orange-triangle">
              <Image
                src={OrangeDirection}
                alt="orange triangle in a row decorations"
              />
            </div>
            <div className="adlib green-arc">
              <Image src={GreenArc} alt="green arc decoration" />
            </div>
          </div>
        </div>
      </Video>
      <ContactSection />
    </Main>
  )
}

export default Home
