import React from "react";
import { View, Text, StyleSheet } from "react-native";
import _ from "lodash";
import { getColorByPokemon } from "../../helpers/getColorByPokemon";

export default function Type(props) {
  return (
    <View style={styles.container}>
      {props.types.map((item, idx) => (
        <View
          key={idx}
          style={{
            ...styles.pildoras,
            backgroundColor: getColorByPokemon(item.type.name),
          }}>
          <Text> {_.capitalize(item.type.name)} </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  pildoras: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 5,
    // backgroundColor: "#f0f",
  },
  container: {
    // paddingHorizontal: 20,
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
