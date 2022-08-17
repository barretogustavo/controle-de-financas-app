import React from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

const Container = styled.View`
  height: 50px;
  background-color: ${(props) => props.theme.colors.primary};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  justify-content: flex-end;
  align-items: center;
`;

const ButtonAdd = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.white};
  border: 3px solid ${(props) => props.theme.colors.primary};
`;

const IconPlus = styled(AntDesign)`
  font-size: 32px;
  color: ${(props) => props.theme.colors.primary};
`;

const AddMovementButton = () => {
  return (
    <Container>
      <ButtonAdd activeOpacity={0.9}>
        <IconPlus name="plus" />
      </ButtonAdd>
    </Container>
  );
};

export default AddMovementButton;
