import { ThemeProvider } from 'styled-components'
import Header from '../components/Header'
import Item from '../components/Item'
import SearchInput from '../components/SearchInput'
import FilterBox from '../components/FilterBox'
import ThemeSwitcher from '../components/ThemeSwitcher'
import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Layout from '../components/Layout'
import HeaderTitle from '../components/HeaderTitle'
import {
  Items,
  Contents,
  SearchHeader,
  LoadingText
} from '../components/home/style'
import { lightTheme, darkTheme } from '../styles/theme'
import ThemeContext from '../contexts/ThemeContext'
import { API_BASE_URL } from '../utils/constants'

export default function Home({ allCountries }) {
  const [isOpen, setIsOpen] = useState(false)
  const theme = useContext(ThemeContext)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedRegion, setSelectedRegion] = useState('')
  const [query, setQuery] = useState('')
  const [countries, setCountries] = useState(allCountries)

  useEffect(() => {
    const fetchCountriesByRegion = async () => {
      try {
        setIsLoading(true)
        const res = await axios.get(
          `${API_BASE_URL}/region/${selectedRegion.toLowerCase()}`
        )
        setCountries(res.data)
      } catch (ex) {
        console.log(ex)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCountriesByRegion()
  }, [selectedRegion])

  useEffect(() => {
    const fetchCountriesByQuery = async () => {
      try {
        setIsLoading(true)
        const res = await axios.get(
          `${API_BASE_URL}/name/${query.toLowerCase()}`
        )
        setCountries(res.data)
      } catch (ex) {
        console.log(ex)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCountriesByQuery()
  }, [query])

  return (
    <ThemeProvider theme={theme.isDarkMode ? darkTheme : lightTheme}>
      <Layout>
        <Header>
          <HeaderTitle>Where in the world?</HeaderTitle>

          <ThemeSwitcher
            isDarkMode={theme.isDarkMode}
            onClick={theme.toggleTheme}
          />
        </Header>

        <Contents>
          <SearchHeader>
            <SearchInput
              isDarkMode={theme.isDarkMode}
              onChange={(e) => setQuery(e.target.value)}
            />
            <FilterBox
              isDarkMode={theme.isDarkMode}
              isOpen={isOpen}
              onToggle={() => setIsOpen(!isOpen)}
              text={selectedRegion}
              onSelect={setSelectedRegion}
            />
          </SearchHeader>

          <Items>
            {isLoading && <LoadingText>Loading...</LoadingText>}

            {!isLoading &&
              countries &&
              countries.map((country) => {
                return <Item key={country.name} country={country} />
              })}

            {!isLoading && countries && countries.length === 0 && (
              <p>no countries found</p>
            )}
          </Items>
        </Contents>
      </Layout>
    </ThemeProvider>
  )
}

export async function getStaticProps() {
  const res = await axios.get(`${API_BASE_URL}/all`)
  return {
    props: { allCountries: res.data }
  }
}
