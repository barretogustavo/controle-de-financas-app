import React, { useState } from "react";
import styled from "styled-components/native";
import { MotiView } from "moti";

const Container = styled(MotiView)`
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 5px;
  border-bottom-width: 0.5px;
  height: 60px;
  text-align: center;
  border-bottom-color: ${(props) => props.theme.colors.label};
  background-color: ${(props) => props.theme.colors.white};
  justify-content: center;
  border-radius: 8px;
`;

const NoResultText = styled.Text`
  color: ${(props) => props.theme.colors.label};
  font-weight: bold;
  text-align: center;
`;

const NoResultList = ({ text }) => {
  return (
    <Container
      from={{ translateX: -300 }}
      animate={{ translateX: 0 }}
      transition={{ type: "spring", duration: 500, delay: 100 }}
    >
      <NoResultText>{text}</NoResultText>
    </Container>
  );
};

export default NoResultList;
