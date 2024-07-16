import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { ThemeContext } from './src/context/ThemeContext';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { myColors } from './src/styles/Colors';
import Button from './src/components/Button';
export default function App() {
  const [theme,setTheme] = useState('light');

  return (
    <ThemeContext.Provider value='{theme}'>
    <View style={theme === 'light' ? styles.container : [styles.container, { backgroundColor: '#000' }]}>
      <StatusBar style="auto" />
      <Switch
         value = {theme === 'light'}
         onValueChange ={() => setTheme(theme == 'light' ? 'dark' : 'light')}
        /> 
    <Button isBlue title='3' onPress={function (): void {
          throw new Error('Function not implemented.');
        } }/>
    </View>
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
