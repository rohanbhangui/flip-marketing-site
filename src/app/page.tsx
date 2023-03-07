import styled from 'styled-components'

const Main = styled.main`
  background: ${({ theme }) => theme.colors.background};
`

const Home = () => {
  return (
    <Main>
      <Header></Header>
      <Hero></Hero>
    </Main>
  )
}

export default Home
