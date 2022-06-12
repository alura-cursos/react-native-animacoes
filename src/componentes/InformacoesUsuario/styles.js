import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  foto: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  informacoes: {
    flex: 1,
    marginLeft: 20,
  },
  nome: {
    fontSize: 22,
    fontFamily: "Roboto",
    fontWeight: "700",
    color: "#464646",
  },
  consultas: {
    fontSize: 14,
    fontFamily: "Roboto",
    fontWeight: "500",
    color: "#6a6a6a",
  },
});