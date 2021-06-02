import Image from 'next/image'
import { Container, ImageWrapper } from './style'

const ThemeSwitcher = ({ isDarkMode = false, onClick }) => {
  return (
    <Container onClick={onClick}>
      <ImageWrapper>
        <Image
          src={`/moon_${isDarkMode ? 'filled' : 'empty'}_icon.svg`}
          alt="moon"
          layout="fill"
        />
      </ImageWrapper>
      <p>Dark Mode</p>
    </Container>
  )
}

export default ThemeSwitcher
