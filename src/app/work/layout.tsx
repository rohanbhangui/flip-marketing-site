'use client'

import {
  smallDesktop,
  desktop,
  desktopFHD,
  tablet,
} from '@/assets/styles/themeConfig'
import Header from '@/components/Header'
import styled from 'styled-components'
import ContactSection from '@/components/ContactSection'

import DoniasDonarImg from '@/assets/img/donias-donair.png'
import EvolveAOCImg from '@/assets/img/slide-1.jpeg'
import GreenPressImg from '@/assets/img/green-press.png'
import MonosImg from '@/assets/img/1663712674854.webp'
import SundayCitizenImg from '@/assets/img/Sunday-Citizen_Snug-Waffle-Comforter_Cloud-Grey_LS2.webp'
import PacasImg from '@/assets/img/mothersday.webp'
import CrepProtectImg from '@/assets/img/325976358_766367324821061_4246269227189538331_n.jpg'
import PrincessPollyImg from '@/assets/img/Princess-Polly-QA.webp'
import PublicRecImg from '@/assets/img/public-rec-image-1.png'
import Button from '@/components/Button'

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
      padding-bottom: 15vh;
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

      > *:not(i) {
        font-family: ${({ theme }) => theme.fonts.secondary};
        vertical-align: middle;
      }

      i {
        color: ${({ theme }) => theme.colors.blue};
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
      text-align: center;
      max-width: ${tablet}px;
      margin: 0 auto;
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
      object-position: center;
    }
  }
`

const WorkTiles = styled.section`
  .inner {
    max-width: ${smallDesktop}px;
    width: 100%;
    margin: 3rem auto;
    z-index: 10;
    padding-bottom: 3rem;
    padding: 0 1rem;

    @media ${({ theme }) => theme.mediaQuery.smallTablet} {
      padding-bottom: 5rem;
    }

    @media ${({ theme }) => theme.mediaQuery.largeDesktop} {
      max-width: ${desktop}px;
    }

    @media ${({ theme }) => theme.mediaQuery.desktopFHD} {
      max-width: ${desktopFHD}px;
    }
  }
`

const Tile = styled.div<{ background: string }>`
  .tile {
    border-radius: 1.5rem;
    overflow: hidden;
    margin-bottom: 1rem;
    overflow: hidden;
    aspect-ratio: 5/4;
    background: url(${({ background }) => background});
    background-size: cover;

    @media ${({ theme }) => theme.mediaQuery.smallTablet} {
      border-radius: 5rem;
      margin-bottom: 1.5rem;
      aspect-ratio: 16/9;
    }

    @media ${({ theme }) => theme.mediaQuery.smallDesktop} {
      aspect-ratio: 1580/742;
    }

    @media ${({ theme }) => theme.mediaQuery.largeDesktop} {
    }

    .content {
      .wrapper {
        transform: translateY(10%);
        transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1) 0.1s;
        opacity: 0;
      }
    }

    &:hover {
      @media ${({ theme }) => theme.mediaQuery.smallTablet} {
        .content {
          background: rgba(0, 0, 0, 0.4);

          .wrapper {
            transform: translate(0rem);
            opacity: 1;
          }
        }
      }
    }
  }

  .content {
    color: white;
    display: flex;
    align-items: flex-end;
    height: 100%;
    background: rgba(0, 0, 0, 0);
    padding: 1.5rem;
    transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1);
    width: 100%;

    &.mobile {
      margin-bottom: 3rem;

      @media ${({ theme }) => theme.mediaQuery.smallTablet} {
        display: none;
      }
    }

    .desktop-desc {
      max-width: 30rem;
    }

    @media ${({ theme }) => theme.mediaQuery.smallTablet} {
      padding: 5rem;
    }

    @media ${({ theme }) => theme.mediaQuery.smallDesktop} {
    }

    @media ${({ theme }) => theme.mediaQuery.largeDesktop} {
    }

    a {
      margin-top: 2rem;
    }

    .wrapper {
      @media ${({ theme }) => theme.mediaQuery.smallTablet} {
        max-width: 60%;
      }
    }
  }
`

const WORK = [
  {
    key: 'green-press',
    title: 'Green Press',
    description:
      'Green Press is a healthy organic juice bar in the heart of Oakville with multiple locations in the Greater Toronto Area. During the peak of the 2020 Covid-19 Pandemic we had to think fast as the stores where losing money fast. We developed multiple marketing strategies through different avenues but not limited to social media, In person, Email and much more',
    img: GreenPressImg,
  },
  {
    key: 'monos',
    title: 'Monos',
    description:
      "Monos is a Canadian travel and lifestyle brand offering timeless, premium goods for the mindful traveller. With a successful Black Friday sale and a unique Mother's Day promotion featuring greetings in over 8 languages, the team helped Monos connect more meaningfully with their diverse customer base and effectively drive sales.",
    img: MonosImg,
  },
  {
    key: 'sunday-citizen',
    title: 'Sunday Citizen',
    description:
      "Sunday Citizen produces radically soft, durable, and easy-care home goods that aren't just comfortable; they create comfort. We assisted with their gift card sale promotions and product showcases. Through a unique approach that intertwined posts about 'love languages' with product features, the agency ensured a more impactful brand narrative, successfully engaging customers and driving sales.",
    img: SundayCitizenImg,
  },
  {
    key: 'public-rec',
    title: 'Public Rec',
    description:
      'Public Rec redefines casual wear with a blend of comfort, style, and performance. We helped them built them a highly converting campaign for their new product drop.',
    img: PublicRecImg,
  },
  {
    key: 'donias-donair',
    title: "Donia's Donair",
    description:
      'Understanding your business is crucial to developing effective marketing strategies that drive results. By honing in on what makes your business unique, we can create marketing messages that differentiate your brand and attract the right customers.',
    img: DoniasDonarImg,
  },
  {
    key: 'pacas',
    title: 'Pacas',
    description:
      "Pacas is a manufacturer of alpaca wool socks and apparel. We understood Pacas' unique product offering, We aimed to emphasize the unmatched softness of their socks. We created inviting and friendly content for both social media and the Pacas website. This approach effectively conveyed the product's unique appeal, enticing customers with the softness and comfort that Pacas socks provide.",
    img: PacasImg,
  },
  {
    key: 'crep-protect',
    title: 'CrepProtect',
    description:
      "CrepProtect make shoe protection and cleaning products. We ideated and executed captivating video content to promote the Tiffany Nike collaboration, cleverly integrating their shoe protection product. The creative approach not only showcased the collab, but also effectively highlighted the value of Crep Protect's offerings.",
    img: CrepProtectImg,
  },
  {
    key: 'princess-polly',
    title: 'Princess Polly',
    description:
      'Princess Polly is an Australian online fashion retailer best known for its trendy clothing, accessories, and beauty products targeted primarily at young women. We worked to foster a deeper connection with their audience. The team orchestrated live streams and developed unique content about clothing care post-spills - a topic not commonly addressed by many big brands. This novel approach resulted in increased engagement, strengthening the bond between Princess Polly and their dedicated fanbase and customers.',
    img: PrincessPollyImg,
  },
  {
    key: 'evolve-aoc',
    title: 'Evolve AOC',
    description:
      'Evolve AOC is a streetwear brand that aims to enrich the community by encouraging continuous growth and to “Evolve”. We handled all their marketing aspects and created a brand that had a very high consumer engagement through the Evolve Family and Evolve Creator platforms.',
    link: '',
    img: EvolveAOCImg,
  },
]

const Layout = () => {
  return (
    <Main>
      <Header />
      <Hero>
        <div className="inner">
          <h1 className="title">
            <i className="fa-regular fa-chart-network" /> Our Work
          </h1>
          <p className="large secondary">
            We have achieved success across a wide range of industries,
            including F&B, clothing, real estate, and many more. Our expertise
            and experience translate to effective marketing strategies, no
            matter the industry.
          </p>
        </div>
      </Hero>
      <WorkTiles>
        <div className="inner">
          {WORK.map((item) => (
            <Tile key={item.key} background={item.img.src} id={item.key}>
              <div className="tile">
                <div className="content">
                  <div className="wrapper">
                    <h3>{item.title}</h3>
                    <p className="desktop-desc">{item.description}</p>
                    {item.link ? (
                      <Button
                        href={item.link}
                        className="secondary-alt"
                        label="Learn More"
                      />
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="content mobile">
                <div className="wrapper">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {item.link ? (
                    <Button
                      href={item.link}
                      className="secondary-alt"
                      label="Learn More"
                    />
                  ) : null}
                </div>
              </div>
            </Tile>
          ))}
        </div>
      </WorkTiles>
      <ContactSection />
    </Main>
  )
}

export default Layout
