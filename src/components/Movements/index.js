import React, { useState } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { MotiView } from "moti";
import { Feather } from "@expo/vector-icons";
import NoResultList from "../NoResultList";

const Container = styled.TouchableOpacity`
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 5px;
  border-bottom-width: 0.5px;
  border-bottom-color: ${(props) => props.theme.colors.label};
  background-color: ${(props) => props.theme.colors.white};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
`;

const Content = styled.View``;

const Date = styled.Text`
  color: ${(props) => props.theme.colors.label};
  font-weight: bold;
`;

const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const Price = styled.Text`
  font-size: 16px;
  color: ${(props) =>
    props.isBalance ? props.theme.colors.green : props.theme.colors.error};
  font-weight: bold;
`;

const ShowValue = styled.View`
  width: 70px;
  height: 25px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.grey};
  border-radius: 8px;
`;

const Movements = ({ data }) => {
  const [showValue, setShowValue] = useState(false);

  return (
    <MotiView
      from={{ translateX: -300 }}
      animate={{ translateX: 0 }}
      transition={{ type: "spring", duration: 500, delay: `${data.id}00` }}
    >
      <Container>
        <Content>
          <Name>{data.name}</Name>
          <Date>{data.date}</Date>
        </Content>

        <TouchableOpacity onPress={() => setShowValue(!showValue)}>
          {showValue ? (
            <Price isBalance={data.isBalance}>R${data.price.toFixed(2)}</Price>
          ) : (
            <ShowValue>
              <Feather name="eye-off" size={15} />
            </ShowValue>
          )}
        </TouchableOpacity>
      </Container>
    </MotiView>
  );
};

export default Movements;
