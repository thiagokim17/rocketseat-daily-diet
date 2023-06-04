import { ThemeProvider } from 'styled-components'
import theme from './src/theme'
import { useFonts, NunitoSans_400Regular,NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'
import { Loading } from '@components/Loading';
import { Home } from '@screens/Home';
import { StatusBar } from 'react-native';

export default function App() {
  const [fontsLoaaded] = useFonts({NunitoSans_400Regular, NunitoSans_700Bold});

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaaded ? <Home /> : <Loading />}
    </ThemeProvider>
  )
}
