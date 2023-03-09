import {
  smallDesktop,
  smallTablet,
  desktop,
  desktopFHD,
  phone,
} from '@/assets/styles/themeConfig'
import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.section`
  background: black;
  color: white;
  padding: 2.5rem 1rem 5rem;

  .inner {
    color: white;
    max-width: ${smallDesktop}px;
    width: 100%;
    margin: 0 auto 3rem;
    gap: 1rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 2.5rem;

    @media ${({ theme }) => theme.mediaQuery.smallTablet} {
      padding-top: 5rem;
    }

    @media ${({ theme }) => theme.mediaQuery.tablet} {
      flex-wrap: nowrap;
    }

    @media ${({ theme }) => theme.mediaQuery.largeDesktop} {
      max-width: ${desktop}px;
    }

    @media ${({ theme }) => theme.mediaQuery.desktopFHD} {
      max-width: ${desktopFHD}px;
    }

    .content {
      margin-bottom: 3rem;
      width: 80%;

      @media ${({ theme }) => theme.mediaQuery.smallTablet} {
        max-width: ${phone}px;
      }

      h1 {
      }

      p {
        font-size: 1.3rem;
      }
    }

    .methods {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;

      @media ${({ theme }) => theme.mediaQuery.tablet} {
        width: 100%;
      }

      a {
        color: rgba(255, 255, 255, 0.33);
        display: inline-block;
        padding: 1rem;
        transition: 0.25s ease-in-out;
        position: relative;
        bottom: 0;

        &:hover {
          color: rgba(255, 255, 255, 1);
          bottom: 0.5rem;

          .text {
            pointer-events: auto;
            opacity: 1;
          }
        }

        i {
          font-size: 2.5rem;

          @media ${({ theme }) => theme.mediaQuery.tablet} {
            font-size: 4rem;
          }
        }

        .text {
          opacity: 0;
          pointer-events: none;
          transition: 0.25s ease-in-out;
          position: absolute;
          bottom: -1rem;
          text-align: center;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }
`

const CONTACT_METHODS = [
  {
    name: 'Twitter',
    handle: '@flipmarketing',
    icon: <i className="fa-brands fa-twitter" />,
    link: '#',
  },
  {
    name: 'TikTok',
    handle: '@flipmarketing',
    icon: <i className="fa-brands fa-tiktok" />,
    link: '#',
  },
  {
    name: 'Instagram',
    handle: '@flipmarketing',
    icon: <i className="fa-brands fa-instagram" />,
    link: '#',
  },
  {
    name: 'Email',
    handle: 'hello@flipyourmarketing.ca',
    icon: <i className="fa-sharp fa-solid fa-paper-plane" />,
    link: 'mailto:hello@flipyourmarketing.ca',
  },
]

const ContactSection = () => {
  return (
    <Container>
      <div className="inner">
        <div className="content">
          <h1>Let&apos;s have a chat</h1>
          <p>
            Have questions or need something a bit more tailored? Reach out to
            us!
          </p>
        </div>
        <div className="methods">
          {CONTACT_METHODS.map((social) => (
            <Link key={social.name} href={social.link}>
              {social.icon}
              <div className="text">{social.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default ContactSection
