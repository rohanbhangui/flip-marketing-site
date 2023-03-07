import Image from 'next/image'
import styled from 'styled-components'
import Logo from '@/assets/img/logo.svg'
import Button from '../Button'
import { smallDesktop } from '@/assets/styles/themeConfig'
import { useState } from 'react'

const Container = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem 1rem;
  max-width: ${smallDesktop}px;
  margin: 0 auto;
  width: 100%;

  .left {
    display: flex;
    align-items: center;
    flex: 1 1 auto;
    justify-content: flex-start;

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

          a {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      }
    }
  }

  .right {
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
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(4px);
    z-index: 10;
    padding: 2rem 1rem;
    display: none;

    &.active {
      display: block;
    }

    .top-bar {
      display: flex;
      align-items: center;
      margin-left: 2rem;
      margin-bottom: 1rem;
      justify-content: space-between;

      .img-container {
        display: inline-block;
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
        <div className="img-container">
          <Image src={Logo} alt="F L I P" />
        </div>
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
            <li>
              <Button className="reach-out" href="#" label="React out to us" />
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  )
}

export default Header
