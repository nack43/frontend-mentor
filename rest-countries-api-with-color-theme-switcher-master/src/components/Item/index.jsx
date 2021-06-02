import { useRouter } from 'next/router'
import { Container, Flag, Info, Name, StyledRow, Text } from './style'

const Item = ({ country }) => {
  const router = useRouter()
  return (
    <Container
      onClick={() => {
        router.push(`/countries/${country.alpha3Code}`)
      }}
    >
      <Flag src={country.flag} alt={country.name} />
      <Info>
        <Name>{country.name}</Name>
        <Row
          label="Population:&nbsp;"
          value={parseInt(country.population).toLocaleString()}
        />
        <Row label="Region:&nbsp;" value={country.region} />
        <Row label="Capital:&nbsp;" value={country.capital} />
      </Info>
    </Container>
  )
}

const Row = ({ label, value }) => {
  return (
    <StyledRow>
      <Text>{label}</Text>
      <Text fw={300}>{value}</Text>
    </StyledRow>
  )
}

export default Item
