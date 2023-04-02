'use client'

import {
  smallDesktop,
  desktop,
  desktopFHD,
  tablet,
} from '@/assets/styles/themeConfig'
import Header from '@/components/Header'
import styled from 'styled-components'
import { Methods as _Methods } from '@/components/ContactSection'
import { CONTACT_METHODS } from '@/components/ContactSection/ContactSection'
import Link from 'next/link'

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
      font-family: ${({ theme }) => theme.fonts.secondary};
      width: 100%;
      text-align: left;
      padding: 0 1rem;
      font-size: min(10vw, 40rem);
      max-width: 17rem;

      @media ${({ theme }) => theme.mediaQuery.phone} {
        max-width: 30rem;
      }

      @media ${({ theme }) => theme.mediaQuery.smallTablet} {
        max-width: 40rem;
      }

      @media ${({ theme }) => theme.mediaQuery.tablet} {
        max-width: 50rem;
      }

      @media ${({ theme }) => theme.mediaQuery.smallDesktop} {
        font-size: 7.5rem;
        max-width: 60rem;
      }

      @media ${({ theme }) => theme.mediaQuery.desktopFHD} {
        font-size: 12rem;
      }

      .highlight {
        background: ${({ theme }) => theme.colors.yellowOrange};
        padding: 0 1rem;
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

    p.large {
      text-align: left;
      max-width: ${tablet}px;
      width: 100%;
      padding: 0 1rem;
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

const Methods = styled(_Methods)`
  justify-content: flex-start;
  margin-top: 2rem;

  @media ${({ theme }) => theme.mediaQuery.smallTablet} {
    margin-top: 4rem;
  }
`

const Layout = () => {
  return (
    <Main>
      <Header />
      <Hero>
        <div className="inner">
          <h1 className="title">Always happy to Chat</h1>
          <p className="large secondary">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <Methods>
            {CONTACT_METHODS.map((social) => (
              <Link key={social.name} href={social.link}>
                {social.icon}
                <div className="text">{social.name}</div>
              </Link>
            ))}
          </Methods>
        </div>
      </Hero>
    </Main>
  )
}

export default Layout
