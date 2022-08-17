import React from "react";
import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { MotiView, MotiText } from "moti";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64;

const Header = ({ name }) => {
  return (
    <View style={styles.container}>
      <MotiView
        style={styles.content}
        from={{ translateY: -150, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ type: "timing", duration: 800, delay: 300 }}
      >
        <MotiText
          style={styles.username}
          from={{ translateX: -300 }}
          animate={{ translateX: 0 }}
          transition={{ type: "timing", duration: 800, delay: 800 }}
        >
          {name}
        </MotiText>
        <TouchableOpacity activeOpacity={0.7} style={styles.buttonUser}>
          <Feather name="user" size={27} style={{ color: "#fff" }} />
        </TouchableOpacity>
      </MotiView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FA7C0E",
    flexDirection: "row",
    paddingTop: statusBarHeight,
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44,
  },
  content: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  buttonUser: {
    width: 44,
    height: 44,
    backgroundColor: "#F48527",
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Header;
