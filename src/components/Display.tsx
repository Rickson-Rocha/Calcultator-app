import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { myColors } from '../styles/Colors';

interface DisplayProps {
  firstNumber: string;
  secondNumber: string;
  operation: string;
  result: number | null;
}

const Display: React.FC<DisplayProps> = ({ firstNumber, secondNumber, operation, result }) => {
  const expression = secondNumber + (operation ? ` ${operation} ` : '') + firstNumber;

  return (
    <View
      style={{
        height: 120,
        width: "90%",
        justifyContent: "flex-end",
        alignSelf: "center",
      }}
    >
      <Text style={styles.expression}>{expression}</Text>
      <Text
        style={
          result !== null
            ? [styles.result, { color: myColors.result }]
            : styles.result
        }
      >
        {result !== null ? result.toString() : firstNumber || '0'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  expression: {
    fontSize: 40,
    color: myColors.dark,
  },
  result: {
    fontSize: 96,
    color: myColors.dark,
  },
});

export default Display;
