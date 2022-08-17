import React from "react";
import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MotiView, MotiText } from "moti";

const Container = styled.View`
  background-color: ${(props) => props.theme.colors.primary};
  flex-direction: row;
  padding-top: ${StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64}px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 44px;
`;

const Content = styled(MotiView)`
  flex: 1;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const Username = styled(MotiText)`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
`;

const ButtonUser = styled.TouchableOpacity`
  width: 44px;
  height: 44px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 22px;
  justify-content: center;
  align-items: center;
`;

const Header = ({ name }) => {
  return (
    <Container>
      <Content
        from={{ translateY: -150, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ type: "timing", duration: 800, delay: 300 }}
      >
        <Username
          from={{ translateX: -300 }}
          animate={{ translateX: 0 }}
          transition={{ type: "timing", duration: 800, delay: 800 }}
        >
          {name}
        </Username>
        <ButtonUser activeOpacity={0.7}>
          <Feather name="user" size={27} style={{ color: "#fff" }} />
        </ButtonUser>
      </Content>
    </Container>
  );
};

export default Header;
