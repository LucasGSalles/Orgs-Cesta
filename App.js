import Routes from './routes/Routes';

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Routes />
  );
}