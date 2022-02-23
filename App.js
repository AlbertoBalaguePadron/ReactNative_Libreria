import { useState } from "react";
import { Button, FlatList, Text, View, StyleSheet } from "react-native";
import InputGroup from "./components/InputGroup";
import Item from "./components/Item";

export default function App() {
  const [listaLibros, setlistaLibros] = useState([]);
  const [showModal, setShowModal] = useState([false]);

  const recogerdatos = (title, pagNum, porcen) => {
    if (title != "" && pagNum != "" && porcen != "") {
      console.log(title);
      console.log(pagNum);
      console.log(porcen);
      setlistaLibros((currentproductList) => [
        ...currentproductList,
        {
          key: Math.random().toString(),
          titulo: title,
          pagina: pagNum,
          porcentage: porcen,
        },
      ]);
    }
    setShowModal(false);
  };

  const eliminarlibro = (productKey) => {
    setlistaLibros((currentList) => {
      return currentList.filter((product) => product.key !== productKey);
    });
  };

  return (
    <View style={styles.container}>
      <Button title={"Add"} />
      <InputGroup recogerdatos={recogerdatos} addMode={showModal} />
      <View style={styles.listcontainer}>
        <FlatList
          style={styles.scrollView}
          data={listaLibros}
          renderItem={(itemData) => (
            <Item
              value={
                (itemData.item.titulo, itemData.pagina, itemData.porcentage)
              }
              onDelete={() => eliminarlibro(itemData.item.key)}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 2,
    height: "50%",
  },
  listcontainer: {
    width: "100%",
    borderColor: "white",
    borderWidth: 1,
    padding: 20,
  },

  scrollView: {
    width: "100%",
  },
});
