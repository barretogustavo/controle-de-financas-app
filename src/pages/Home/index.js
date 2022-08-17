import { StyleSheet, Text, View, StatusBar, FlatList } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";

const list = [
  {
    id: "1",
    name: "Boleto Luz",
    price: -347.0,
    date: "16/08/2022",
    isBalance: false,
  },
  {
    id: "2",
    name: "Boleto Água",
    price: -279.0,
    date: "22/08/2022",
    isBalance: false,
  },
  {
    id: "3",
    name: "Salário",
    price: 20000,
    date: "05/08/2022",
    isBalance: true,
  },
  {
    id: "4",
    name: "PIX lanchonete",
    price: -64.5,
    date: "01/08/2022",
    isBalance: false,
  },
  {
    id: "5",
    name: "PIX Barbeiro",
    price: -30.0,
    date: "25/07/2022",
    isBalance: false,
  },
];

const sumBalance = list
  .map((item) => item.price)
  .reduce((prev, curr) => prev + curr, 0);

const sumExpense = list
  .filter((item) => item.isBalance === false)
  .map((item) => item.price)
  .reduce((prev, curr) => prev + curr, 0);

const Home = () => {
  return (
    <View style={styles.container}>
      <Header name="Gustavo Barreto" />
      <Balance balance={sumBalance} expense={sumExpense} />
      <Actions />
      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 15,
  },
  list: {
    marginLeft: 15,
    marginRight: 15,
  },
});

export default Home;
