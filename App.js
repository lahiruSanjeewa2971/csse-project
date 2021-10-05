import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home'
import CreateOrder from './screens/CreateOrder';
import ViewOrders from './screens/ViewOrders';
import Storage from './screens/Storage';
import OrderEnquiries from './screens/OrderEnquiries'
import {NavigationContainer, DefaultTheme } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#1c2163'
  },
};

function App() {
  return (
    <View style={styles.container}>
     <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CreateOrder" component={CreateOrder} />
      <Stack.Screen name="ViewOrder" component={ViewOrders} />
      <Stack.Screen name="Storage" component={Storage} />
      <Stack.Screen name="OrderEnquiries" component={OrderEnquiries} />
    </Stack.Navigator>
     
    </View>
  );
}

export default() =>{
  return (
   
    <NavigationContainer theme={MyTheme}>
    
      <App/>
     
    </NavigationContainer>
  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05332c',
    
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
