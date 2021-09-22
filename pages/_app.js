import 'tailwindcss/tailwind.css'
import '../styles/global.css'

import '../services/firebase'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
