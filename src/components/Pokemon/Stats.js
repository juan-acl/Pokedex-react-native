import React from "react";
import { View, Text, StyleSheet } from "react-native";
import _ from "lodash";

export default function Stats(props) {
  const porcent = (base) => {
    const color = base > 49 ? "#00ac17" : "red";
    return {
      width: `${base}%`,
      backgroundColor: color,
    };
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stats</Text>
      {props.stats.map((item, idx) => (
        <View key={idx} style={styles.block}>
          <View style={styles.blocktt}>
            <Text style={styles.name}> {_.capitalize(item.stat.name)} </Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.base}>{item.base_stat}</Text>
            <View style={styles.bgBar}>
              <View style={[styles.porcent, porcent(item.base_stat)]} />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  porcent: {
    height: 5,
    borderRadius: 20,
  },
  bgBar: {
    backgroundColor: "#dedede",
    width: "88%",
    height: 5,
    borderRadius: 5,
    overflow: "hidden",
  },
  base: {
    fontSize: 12,
    width: "12%",
  },
  info: {
    width: "70%",
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#6b6b6b",
  },
  blocktt: {
    width: "30%",
  },
  block: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 5,
  },
  container: {
    paddingHorizontal: 30,
    marginTop: 40,
    // flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
  },
});
