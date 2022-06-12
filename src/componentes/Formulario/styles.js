import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    width: '100%',
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  titulo: {
    fontWeight: "700",
    fontFamily: "Roboto",
    fontSize: 24,
    color: '#464646',
  },
  texto: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: '#A3A3A3',
    marginTop: 10,
  },
  input: {
    height: 56,
    width: '100%',
    borderColor: "#DDDDDD",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    fontSize: 16,
  },
  esqueciSenha: {
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: 16,
    color: '#4894FF',
    marginTop: 10,
  }
});