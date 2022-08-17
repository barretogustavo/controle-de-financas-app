import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MotiView } from "moti";

const Balance = ({ balance, expense }) => {
  const [showBalanceValue, setShowBalanceValue] = useState(false);
  const [showExpenseValue, setShowExpenseValue] = useState(false);

  return (
    <MotiView
      from={{ rotateX: "-100deg", opacity: 0 }}
      animate={{ rotateX: "0deg", opacity: 1 }}
      transition={{ type: "timing", delay: 300, duration: 900 }}
      style={styles.container}
    >
      <TouchableOpacity
        style={styles.item}
        onPress={() => setShowBalanceValue(!showBalanceValue)}
      >
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          {showBalanceValue ? (
            <Text style={styles.balance}>{balance}</Text>
          ) : (
            <Text style={styles.showValue}>•••••</Text>
          )}
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setShowExpenseValue(!showExpenseValue)}
        style={styles.item}
      >
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          {showExpenseValue ? (
            <Text style={styles.expenses}>{expense}</Text>
          ) : (
            <Text style={styles.showValue}>•••••</Text>
          )}
        </View>
      </TouchableOpacity>
    </MotiView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 90,
    zIndex: 20,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 18,
    marginTop: -24,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 16,
  },
  itemTitle: {
    fontSize: 20,
    color: "#dadada",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  currencySymbol: {
    color: "#dadada",
    marginRight: 6,
  },
  balance: {
    fontSize: 22,
    color: "#2ecc71",
  },
  expenses: {
    fontSize: 22,
    color: "#999",
  },
  showValue: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Balance;
