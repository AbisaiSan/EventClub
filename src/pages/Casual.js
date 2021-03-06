import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  TouchableOpacity
} from "react-native";

import ApiCasual from "../services/ApiCasual";
import Back from "../assets/fundo4.jpg";

export default class Food extends Component {
  static navigationOptions = {
    title: "CASUAL",
    headerTitleStyle: {
      fontSize: 18
    }
  };

  state = {
    dice: []
  };

  componentDidMount() {
    this.loadBalada();
  }

  loadBalada = async () => {
    const response = await ApiCasual.get("/posts");

    const dice = response.data;

    this.setState({ dice });
  };

  renderIntem = ({ item }) => (
    <View style={styles.usersContainer}>
      <Text style={styles.usersName}>{item.title}</Text>
      <Text style={styles.usersUrl}>{item.url}</Text>
      <Text style={styles.usersUrl}>{item.thumbnailUrl}</Text>

      
    </View>
  );

  render() {
    return (
      <ImageBackground style={styles.containerMain} source={Back}>
        <View style={styles.container}>
          <FlatList
            contentContainerStyle={styles.list}
            data={this.state.dice}
            keyExtractor={item => item.id.toString()}
            renderItem={this.renderIntem}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1
  },
  container: {
    flex: 1
  },
  list: {
    padding: 20
  },
  usersContainer: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 20,
    marginBottom: 20
  },
  usersName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333"
  },
  usersUrl: {
    fontSize: 16,
    color: "#999",
    marginTop: 5,
    lineHeight: 24
  },
  usersButton: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#069",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  usersButtonText: {
    fontSize: 16,
    color: "#069",
    fontWeight: "bold"
  }
});
