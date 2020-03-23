import React, { Component } from "react";
import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
  Image
} from "react-native";

import Logo from "../assets/logo.png";
import Back from "../assets/fundo4.jpg";

export default class User extends Component {
  static navigationOptions = {
    title: "EVENT CLUB",
    headerTitleStyle: {
      fontSize: 18
    }
  };

  // aqui lida com os envios para as outras paginas
  handleSubmitCasual() {
    this.props.navigation.navigate("Casual");
  }

  handleSubmitBalada() {
    this.props.navigation.navigate("Balada");
  }

  handleSubmitCinema() {
    this.props.navigation.navigate("Cinema");
  }

  render() {
    return (
      <>
        <ImageBackground style={styles.containerMain} source={Back}>
          <View style={styles.container}>
            <Image style={styles.logo} source={Logo} />

            <Text style={styles.textChoice}>SELECIONE UM EVENTO:</Text>

            <TouchableOpacity
              style={styles.buttom}
              onPress={() => this.handleSubmitCasual()}
            >
              <Text style={styles.buttomText}>CASUAL</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttom}
              onPress={() => this.handleSubmitBalada()}
            >
              <Text style={styles.buttomText}>BALADAS</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttom}
              onPress={() => this.handleSubmitCinema()}
            >
              <Text style={styles.buttomText}>CINEMA</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 80
  },
  buttom: {
    height: 45,
    width: 300,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  buttomText: {
    color: "#000",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 15,
    fontWeight: "bold"
  },
  logo: {
    height: 160,
    width: 160,
    marginBottom: 50
  },
  textChoice: {
    alignItems: "stretch",
    marginBottom: 15,
    fontSize: 20,
    fontWeight: "bold",
    color: '#FFFFFF'
  }
});
