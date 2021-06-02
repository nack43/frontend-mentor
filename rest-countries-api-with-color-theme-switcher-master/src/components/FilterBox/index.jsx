import Image from 'next/image'
import { FilterListContainer, FilterItem, Container, Wrapper } from './style'

const FilterBox = ({
  text,
  isOpen = true,
  onToggle,
  isDarkMode = false,
  onSelect
}) => {
  return (
    <Wrapper>
      <Container onClick={onToggle}>
        {text === '' ? 'Filter by Region' : text}

        <Image
          src={isDarkMode ? '/white_chevron_icon.svg' : '/chevron_icon.svg'}
          alt="chevron"
          width="12"
          height="12"
        />
      </Container>
      {isOpen && <FilterList onSelect={onSelect} onToggle={onToggle} />}
    </Wrapper>
  )
}

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

const FilterList = ({ onSelect, onToggle }) => {
  return (
    <FilterListContainer>
      {regions.map((region) => {
        return (
          <FilterItem
            key={region}
            onClick={() => {
              onSelect(region)
              onToggle()
            }}
          >
            {region}
          </FilterItem>
        )
      })}
    </FilterListContainer>
  )
}

export default FilterBox
