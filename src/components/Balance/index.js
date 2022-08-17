import React, { useState } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MotiView } from "moti";

const Container = styled(MotiView)`
  height: 90px;
  z-index: 20;
  background-color: ${(props) => props.theme.colors.white};
  flex-direction: row;
  justify-content: space-between;
  padding: 18px;
  margin-top: -24px;
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 16px;
`;

const TitleItem = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.colors.label};
`;

const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CurrencySymbol = styled.Text`
  color: ${(props) => props.theme.colors.label};
  margin-right: 6px;
`;

const BalanceText = styled.Text`
  font-size: 22px;
  color: ${(props) => props.theme.colors.green};
`;

const Expenses = styled.Text`
  font-size: 22px;
`;

const ShowValue = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const Balance = ({ balance, expense }) => {
  const [showBalanceValue, setShowBalanceValue] = useState(false);
  const [showExpenseValue, setShowExpenseValue] = useState(false);

  return (
    <Container
      from={{ rotateX: "-100deg", opacity: 0 }}
      animate={{ rotateX: "0deg", opacity: 1 }}
      transition={{ type: "timing", delay: 300, duration: 900 }}
    >
      <TouchableOpacity onPress={() => setShowBalanceValue(!showBalanceValue)}>
        <TitleItem>Saldo</TitleItem>
        <Content>
          <CurrencySymbol>R$</CurrencySymbol>
          {showBalanceValue ? (
            <BalanceText>{balance}</BalanceText>
          ) : (
            <ShowValue>•••••</ShowValue>
          )}
        </Content>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setShowExpenseValue(!showExpenseValue)}>
        <TitleItem>Gastos</TitleItem>
        <Content>
          <CurrencySymbol>R$</CurrencySymbol>
          {showExpenseValue ? (
            <Expenses>{expense}</Expenses>
          ) : (
            <ShowValue>•••••</ShowValue>
          )}
        </Content>
      </TouchableOpacity>
    </Container>
  );
};

export default Balance;
