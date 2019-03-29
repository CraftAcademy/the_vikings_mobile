import React from "react";
import HomeScreen from "./Screens/Home/HomeScreen";
import { StyleSheet } from "react-native";

export default class App extends React.Component {
  render() {
    return <HomeScreen />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
