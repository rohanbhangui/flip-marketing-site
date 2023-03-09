import Image from 'next/image'
import styled from 'styled-components'
import Logo from '@/assets/img/logo.svg'
import Button from '../Button'
import { desktop, desktopFHD, smallDesktop } from '@/assets/styles/themeConfig'
import { useState } from 'react'
import Link from 'next/link'

const Container = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem 1rem;
  max-width: ${smallDesktop}px;
  margin: 0 auto;
  width: 100%;

  @media ${({ theme }) => theme.mediaQuery.smallTablet} {
    padding-top: 3rem 1rem 1rem;
  }

  @media ${({ theme }) => theme.mediaQuery.largeDesktop} {
    max-width: ${desktop}px;
  }

  @media ${({ theme }) => theme.mediaQuery.desktopFHD} {
    max-width: ${desktopFHD}px;
  }

  .left {
    display: flex;
    align-items: center;
    flex: 1 1 auto;
    justify-content: flex-start;
    position: relative;
    z-index: 1;

    .img-container {
      margin-right: 1rem;
      width: 6rem;

      img {
        width: 100%;
      }
    }

    nav {
      display: none;
      @media ${({ theme }) => theme.mediaQuery.smallTablet} {
        display: inline;
      }
      ul {
        display: flex;
        align-items: center;
        li {
          display: inline-block;
          list-style: none;

          a {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      }
    }
  }

  .right {
    position: relative;
    z-index: 1;

    .reach-out {
      display: none;

      @media ${({ theme }) => theme.mediaQuery.smallTablet} {
        display: inline-block;
      }
    }

    .mobile-icon {
      display: inline-flex;
      width: 2.5rem;
      height: 2.5rem;
      align-items: center;
      justify-content: center;

      @media ${({ theme }) => theme.mediaQuery.smallTablet} {
        display: none;
      }

      i {
        color: white;
        font-size: 1.4rem;
        cursor: pointer;
      }
    }
  }

  .mobile-menu {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(4px);
    z-index: 100;
    padding: 1rem 0.5rem 2rem;
    opacity: 0;
    pointer-events: none;
    transition: 0.3s ease-in-out;
    height: 0;

    &.active {
      pointer-events: auto;
      opacity: 1;
      height: 100vh;

      li {
        opacity: 1;
        transform: translateY(0);
        transition: 0.3s cubic-bezier(0.77, 0, 0.175, 1);

        &.link-1 {
          transition-delay: 0.1s;
        }

        &.link-2 {
          transition-delay: 0.2s;
        }

        &.link-3 {
          transition-delay: 0.3s;
        }

        &.link-4 {
          transition-delay: 0.4s;
        }

        &.link-5 {
          transition-delay: 0.5s;
        }
      }
    }

    .top-bar {
      display: flex;
      align-items: center;
      margin-left: 0.5rem;
      margin-bottom: 1rem;
      justify-content: space-between;

      .img-container {
        display: inline-block;
        width: 6rem;
      }

      .mobile-icon {
        display: inline-flex;
        width: 2.5rem;
        height: 2.5rem;
        align-items: center;
        justify-content: center;
        margin-right: 0.5rem;

        @media ${({ theme }) => theme.mediaQuery.smallTablet} {
          display: none;
        }

        i {
          color: white;
          font-size: 1.4rem;
          cursor: pointer;
        }
      }
    }

    li {
      list-style: none;
      transform: translateY(-0.5rem);
      opacity: 0;

      &.link-5 {
        transform: translateY(0);
        margin: 0 0.75rem;
      }

      a {
        width: 100%;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        font-size: 1.25rem;
      }
    }

    .reach-out {
      display: block;
      text-align: center;
      margin-top: 1rem;
    }

    @media ${({ theme }) => theme.mediaQuery.smallTablet} {
      display: none;
    }
  }
`

type HeaderType = {
  className?: string
}

const Header = (props: HeaderType) => {
  const { className } = props
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <Container className={className}>
      <div className="left">
        <Link href="/">
          <div className="img-container">
            <Image src={Logo} alt="F L I P" />
          </div>
        </Link>
        <nav>
          <ul>
            <li>
              <Button href="#" type="link" label="Services" />
            </li>
            <li>
              <Button href="#" type="link" label="Work" />
            </li>
            <li>
              <Button href="#" type="link" label="About" />
            </li>
            <li>
              <Button href="#" type="link" label="Contact" />
            </li>
          </ul>
        </nav>
      </div>
      <div className="right">
        <Button className="reach-out" href="#" label="React out to us" />
        <div className="mobile-icon">
          <i
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className={`fa-sharp fa-solid ${
              isMobileOpen ? 'fa-xmark' : 'fa-bars-sort'
            }`}
          />
        </div>
      </div>
      <div className={`mobile-menu ${isMobileOpen ? 'active' : ''}`}>
        <div className="top-bar">
          <div className="img-container">
            <Image src={Logo} alt="F L I P" />
          </div>
          <div className="mobile-icon">
            <i
              onClick={() => setIsMobileOpen((prev) => !prev)}
              className={`fa-sharp fa-solid ${
                isMobileOpen ? 'fa-xmark' : 'fa-bars-sort'
              }`}
            />
          </div>
        </div>
        <nav>
          <ul>
            <li className="link-1">
              <Button href="#" type="link" label="Services" />
            </li>
            <li className="link-2">
              <Button href="#" type="link" label="Work" />
            </li>
            <li className="link-3">
              <Button href="#" type="link" label="About" />
            </li>
            <li className="link-4">
              <Button href="#" type="link" label="Contact" />
            </li>
            <li className="link-5">
              <Button className="reach-out" href="#" label="React out to us" />
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  )
}

export default Header
