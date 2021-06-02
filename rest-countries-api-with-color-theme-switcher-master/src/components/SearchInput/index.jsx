import Image from 'next/image'
import { Container, Input } from './style'

const SearchInput = ({ onChange, isDarkMode = false }) => {
  return (
    <Container>
      <Image
        src={isDarkMode ? '/white_search_icon.svg' : '/search_icon.svg'}
        alt="search"
        width="18"
        height="18"
      />
      <Input onChange={onChange} placeholder="Search for a country..." />
    </Container>
  )
}

export default SearchInput
