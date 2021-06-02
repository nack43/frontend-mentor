import Image from 'next/image'
import { Container } from './style'

const ThemeSwitcher = ({ isDarkMode = false, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Image
        src={`/moon_${isDarkMode ? 'filled' : 'empty'}_icon.svg`}
        alt="moon"
        width="20"
        height="20"
      />
      <p>Dark Mode</p>
    </Container>
  )
}

export default ThemeSwitcher
