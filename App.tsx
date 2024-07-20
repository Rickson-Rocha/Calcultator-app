import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { myColors } from './src/styles/Colors';
import Button from './src/components/Button';
import MyKeyboard from './src/components/Keyboard';
import { ThemeContext } from './src/context/ThemeContext';

export default function App() {
  const [theme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
