import Image from 'next/image'
import styled from 'styled-components'
import Logo from '@/assets/img/logo.svg'

const Container = styled.header``

const Header = () => {
  return (
    <Container>
      <Image src={Logo} alt="F L I P" />
      <nav>
        <ul>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <Button href={} />
    </Container>
  )
}

export default Header
