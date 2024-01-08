import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  
  const [age, setAge] = useState('');
  const [lowerLimit, setLowerLimit] = useState(null);
  const [upperLimit, setUpperLimit] = useState(null);

  const calculate = () => {
    console.log(age);
    if(age > 0){
      const lower = Math.round((220 - age) * 0.65);
      const upper = Math.round((220 - age) * 0.85);
      setLowerLimit(lower);
      setUpperLimit(upper);
    }
    else{
      Alert.alert('Error', 'Please enter a valid number.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput style={styles.field} value={age}  onChangeText={text => setAge(text)} />
      <Text >limits: </Text>
      <Text>{lowerLimit}- {upperLimit}</Text>
      <Button onPress={calculate} title="Calculate"></Button>
      </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 8,
    
    
  },
  field: {
    marginBottom: 8,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'blue',
  }
});