import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MotiView } from "moti";
import { Feather } from "@expo/vector-icons";

const Movements = ({ data }) => {
  const [showValue, setShowValue] = useState(false);

  return (
    <MotiView
      from={{ translateX: -300 }}
      animate={{ translateX: 0 }}
      transition={{ type: "spring", duration: 500, delay: `${data.id}00` }}
    >
      <TouchableOpacity style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.date}>{data.date}</Text>
        </View>

        <TouchableOpacity onPress={() => setShowValue(!showValue)}>
          {showValue ? (
            <Text style={data.isBalance ? styles.balance : styles.expenses}>
              R${data.price.toFixed(2)}
            </Text>
          ) : (
            <View style={styles.showValue}>
              <Feather name="eye-off" size={15} />
            </View>
          )}
        </TouchableOpacity>
      </TouchableOpacity>
    </MotiView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: "#dadada",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
  },
  content: {
    justifyContent: "space-between",
  },
  date: {
    color: "#ccc",
    fontWeight: "bold",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  balance: {
    fontSize: 16,
    color: "#2ecc71",
    fontWeight: "bold",
  },
  expenses: {
    fontSize: 16,
    color: "#e74c3c",
    fontWeight: "bold",
  },
  showValue: {
    width: 70,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
    borderRadius: 8,
  },
});

export default Movements;
