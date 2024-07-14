import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/Login';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Login/>
    </ThemeProvider>
  );
}