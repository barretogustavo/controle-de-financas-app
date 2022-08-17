import styled from "styled-components/native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";
import NoResultList from "../../components/NoResultList";
import AddMovementButton from "../../components/AddMovementButton";
import { ScrollView } from "react-native";

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin: 15px;
  color: ${(props) => props.theme.titleActive};
`;

const List = styled.FlatList`
  margin-left: 15px;
  margin-right: 15px;
`;

const list = [
  {
    id: "1",
    name: "Boleto Luz",
    price: -347.0,
    date: "16/08/2022",
    isExpense: true,
  },
  {
    id: "2",
    name: "Boleto Água",
    price: -279.0,
    date: "22/08/2022",
    isExpense: true,
  },
  {
    id: "3",
    name: "Salário",
    price: 20000,
    date: "05/08/2022",
    isExpense: false,
  },
  {
    id: "4",
    name: "PIX lanchonete",
    price: -64.5,
    date: "01/08/2022",
    isExpense: true,
  },
  {
    id: "5",
    name: "PIX Barbeiro",
    price: -30.0,
    date: "25/07/2022",
    isExpense: true,
  },
];

const sumBalance = list
  .map((item) => item.price)
  .reduce((prev, curr) => prev + curr, 0);

const sumExpense = list
  .filter((item) => item.isExpense)
  .map((item) => item.price)
  .reduce((prev, curr) => prev + curr, 0);

const Home = () => {
  return (
    <Container>
      <ScrollView>
        <Header name="Gustavo Barreto" />
        <Balance balance={sumBalance} expense={sumExpense} />
        <Actions />
        <Title>Últimas movimentações</Title>
        <List
          data={list}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Movements data={item} />}
          ListEmptyComponent={
            <NoResultList text="Ainda não há movimentações" />
          }
        />
      </ScrollView>
      <AddMovementButton />
    </Container>
  );
};

export default Home;
