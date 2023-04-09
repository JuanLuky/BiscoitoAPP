import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { Home } from './src/screens/Home';
import colors from './src/theme/colors';



export default function App() {
  return (
    <ThemeProvider theme={colors}>
      <Home />
      <StatusBar style='auto'/>
    </ThemeProvider>
  );
}