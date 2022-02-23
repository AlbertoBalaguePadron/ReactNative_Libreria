import { Button, Modal, Text, TextInput, View, StyleSheet } from "react-native";
import { useState } from "react";

const InputGroup = ({ recogerdatos, addMode }) => {
  const [title, setTitle] = useState("");
  const [pagNum, setPagNum] = useState("");
  const [porcen, setPorcen] = useState("");

  const changeTitle = (title) => {
    setTitle(title);
  };
  const changePagNum = (pagNum) => {
    setPagNum(pagNum);
  };
  const changePorcen = (porcen) => {
    setPorcen(porcen);
  };

  const retornarDatos = () => {
    recogerdatos(title, pagNum, porcen);
    setTitle("");
    setPagNum("");
    setPorcen("");
  };

  return (
    <Modal visibility={addMode}>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.productinput}
          placeholder="Título."
          value={title}
          onChangeText={changeTitle}
        />
        <TextInput
          style={styles.productinput}
          placeholder="Número pag"
          value={pagNum}
          onChangeText={changePagNum}
        />
        <TextInput
          style={styles.productinput}
          placeholder="Porcentage "
          value={porcen}
          onChangeText={changePorcen}
        />

        <Button
          style={styles.productbutton}
          title="Add"
          onPress={retornarDatos}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputGroup: {
    flexDirection: "column",
    justifyContent: "flex",
    alignItems: "center",
    width: "100%",
    flex: 2,
    padding: 20,
  },
  productinput: {
    width: "75%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    height: 40,
    color: "black",
  },
  productbutton: {
    width: "25%",
    color: "black",
  },
});

export default InputGroup;
