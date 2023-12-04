import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import _ from "lodash";
import { getColorByPokemon } from "../../helpers/getColorByPokemon";

const Header = (props) => {
  const color = getColorByPokemon(props.type);
  const bgStyle = { backgroundColor: color, ...styles.bg };

  return (
    <>
      <View style={bgStyle}>
        <SafeAreaView style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.name}>{_.capitalize(props.name)}</Text>
            <Text style={styles.order}>#{props.order}</Text>
          </View>
          <View style={styles.contentImg}>
            <Image source={{ uri: props.image }} style={styles.image} />
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  order: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  name: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  contentImg: {
    felx: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 30,
  },
  bg: {
    width: "100%",
    height: 400,
    // position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomStartRadius: 300,
    transform: [{ scaleX: 1 }],
  },
});

export default Header;
