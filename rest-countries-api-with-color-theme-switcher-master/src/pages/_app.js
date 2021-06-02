import '../../styles/globals.css'
import ThemeContextProvider from '../providers/ThemeContextProvider'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  )
}

export default MyApp
