import React, { useState, useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

const Container = styled.ScrollView`
  max-height: 110px;
  margin-bottom: 15px;
  padding-left: 20px;
  padding-right: 20px;
`;

const ActionButton = styled.TouchableOpacity`
  padding-top: 20px;
  margin-right: 25px;
`;

const ButtonArea = styled.View`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.grey};
`;

const LabelButton = styled.Text`
  text-align: center;
  margin-top: 5px;
`;

const Actions = () => {
  return (
    <Container horizontal={true} showsHorizontalScrollIndicator={false}>
      <ActionButton>
        <ButtonArea>
          <AntDesign name="addfolder" size={26} color="#000" />
        </ButtonArea>
        <LabelButton>Entradas</LabelButton>
      </ActionButton>

      <ActionButton>
        <ButtonArea>
          <AntDesign name="tagso" size={26} color="#000" />
        </ButtonArea>
        <LabelButton>Compras</LabelButton>
      </ActionButton>

      <ActionButton>
        <ButtonArea>
          <AntDesign name="creditcard" size={26} color="#000" />
        </ButtonArea>
        <LabelButton>Cartão</LabelButton>
      </ActionButton>

      <ActionButton>
        <ButtonArea>
          <AntDesign name="barcode" size={26} color="#000" />
        </ButtonArea>
        <LabelButton>Boletos</LabelButton>
      </ActionButton>

      <ActionButton>
        <ButtonArea>
          <AntDesign name="setting" size={26} color="#000" />
        </ButtonArea>
        <LabelButton>Conta</LabelButton>
      </ActionButton>
    </Container>
  );
};

export default Actions;
