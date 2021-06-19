import * as React from 'react';
import { Text, View, Button, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const BooksPage= () => {
    
const mes = () => {
        alert('Walk Area,Children Slide,Canteen For All People,Grass Place For Sitting');
    };
const mes2 = () => {
  alert('Near Model Bazar Multan Road Lodhran');
};
const mes3 = () => {
  alert('Mian Road and main Bazar');
};
const mes4 = () => {
  alert('Storage Place');
};
const mes5 = () => {
  alert('A Mosque and Some Houses also a Melted Road');
};
const mes6 = () => {
  alert('Melted Road and Buldings and a private Hospital');
};
const mes7 = () => {
  alert('That is Only Park in the center of City and Place where childer are play different games');
};



return (
    <View style={styles.container}>
    <Text style={{
      padding: 3,
      margin: 3,
      color:"blue",
      cursor: "wait",
      textShadow:"0 0 10px #000a",
      fontSize: 25,
    }}>Children Park Lodhran</Text>
      <View><Button onPress={mes} color="red" title="Home"/>
      <Button onPress={mes2} color="pink" title="Location"/>
      <Button onPress={mes3} color="blue" title="East"/>
      <Button onPress={mes4} color="lightblue" title="West"/>
      <Button onPress={mes5} color="brown" title="North"/>
      <Button onPress={mes6} title="South"/>
      <Button onPress={mes7} color="green" title="Detail"/>
      </View>
      <Text style={{
         padding: 3,
         margin: 3,
         height: 20,
         color:"blue",
         display: "grid",
         overflow: "hiden",
         justifyContent: "center",
         alignItems: "center",
         animation: "linear",
         cursor: "wait",
         textShadow:"0 0 10px #000a",
         fontSize: 25,
         opacity: "6",
      }}>There is all information you can get all about Children Park Lodhran</Text>
    </View>
)
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'lightgreen',
    padding: 8,
  },
});

export default BooksPage;