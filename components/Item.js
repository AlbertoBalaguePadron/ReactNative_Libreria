import { Text, TouchableHighlight, View, StyleSheet } from "react-native";

const Item = ({ titulo, pagina, porcentage, onDelete }) => {
  console.log("ITem prro ");
  console.log(titulo);
  console.log(pagina);
  console.log(porcentage);

  return (
    <TouchableHighlight
      onPress={onDelete}
      underlayColor={"black"}
      activeOpacity={0.1}
    >
      <View style={styles.listitem}>
        <Text>hola como estann ?? </Text>
        {/* <Text style={styles.listText}>Titulo: {title}</Text>
        <Text style={styles.listText}>Nº páginas: {pagNum}</Text>
        <Text style={styles.listText}>Porcentage leído: {porcen}</Text> */}
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  listitem: {
    height: 100,
    width: "100%",
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    borderColor: "white",
    borderRadius: 5,
    borderWidth: 2,
    margin: 8,
  },
  listText: {
    color: "black",
    fontSize: 17,
  },
});

export default Item;
