import { useRouter } from 'next/router'
import { useContext } from 'react'
import Image from 'next/image'
import axios from 'axios'
import {
  Flag,
  Contents,
  DetailsColumn,
  InfoColumn,
  Text,
  TextWrapper,
  Name,
  Column,
  BorderCountries,
  Row,
  Details,
  BorderCountry,
  BorderCountriesWrapper,
  RowContents,
  Space,
  BackButton,
  BetweenFlatAndDetails
} from '../../components/countryDetails/style'
import Header from '../../components/Header'
import HeaderTitle from '../../components/HeaderTitle'
import Layout from '../../components/Layout'
import ThemeSwitcher from '../../components/ThemeSwitcher'
import ThemeContext from '../../contexts/ThemeContext'
import { API_BASE_URL } from '../../utils/constants'

export default function Home({ country, borderCountries }) {
  const router = useRouter()

  const theme = useContext(ThemeContext)

  const arr1 = [
    { label: 'Native Name', value: country.nativeName },
    {
      label: 'Population',
      value: parseInt(country.population).toLocaleString()
    },
    { label: 'Region', value: country.region },
    { label: 'Sub Region', value: country.subregion },
    { label: 'Capital', value: country.capital }
  ]

  const arr2 = [
    { label: 'Top Level Domain', value: country.topLevelDomain },
    {
      label: 'Currencies',
      value: country.currencies.map((e) => e.name).join(', ')
    },
    {
      label: 'Languages',
      value: country.languages.map((e) => e.name).join(', ')
    }
  ]

  return (
    <Layout>
      <Header>
        <HeaderTitle>Where in the world?</HeaderTitle>

        <ThemeSwitcher
          isDarkMode={theme.isDarkMode}
          onClick={theme.toggleTheme}
        />
      </Header>

      <Contents>
        <BackButton onClick={() => router.back()}>
          <Image
            src={`/left_arrow_${theme.isDarkMode ? 'white_' : ''}icon.svg`}
            alt="arrow"
            width="20"
            height="20"
          />
          <Space w={8} />
          <Text>Back</Text>
        </BackButton>

        <RowContents>
          <Flag src={country.flag} alt={country.name} />

          <BetweenFlatAndDetails />

          <DetailsColumn>
            <Column>
              <Name>{country.name}</Name>
              <Details>
                <InfoColumn>
                  {arr1.map((e) => {
                    return (
                      <Row>
                        <Text fw={600}>{e.label}:&nbsp;</Text>
                        <Text>{e.value}</Text>
                      </Row>
                    )
                  })}
                </InfoColumn>
                <InfoColumn>
                  {arr2.map((e) => {
                    return (
                      <Row>
                        <Text fw={600}>{e.label}:&nbsp;</Text>
                        <Text>{e.value}</Text>
                      </Row>
                    )
                  })}
                </InfoColumn>
              </Details>
            </Column>

            <BorderCountriesWrapper>
              <TextWrapper>
                <Text fw={600}>Border Countries: </Text>
              </TextWrapper>
              <BorderCountries>
                {borderCountries.length === 0 && (
                  <Text fw={300}>No Border Countries</Text>
                )}
                {borderCountries.map((country) => {
                  return (
                    <BorderCountry
                      onClick={() =>
                        router.push(`/countries/${country.alpha3Code}`)
                      }
                    >
                      {country.name}
                    </BorderCountry>
                  )
                })}
              </BorderCountries>
            </BorderCountriesWrapper>
          </DetailsColumn>
        </RowContents>
      </Contents>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const res = await axios.get(
    `${API_BASE_URL}/alpha/${context.params.alpha3Code.toLowerCase()}`
  )

  const borderCountries = []

  if (res.data.borders.length > 0) {
    for (const code of res.data.borders) {
      const res2 = await axios.get(
        `${API_BASE_URL}/alpha/${code.toLowerCase()}`
      )
      borderCountries.push({
        name: res2.data.name,
        alpha3Code: res2.data.alpha3Code
      })
    }
  }

  return {
    props: { country: res.data, borderCountries }
  }
}
