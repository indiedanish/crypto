import { StyleSheet } from "react-native";
export const DrawerStyles = StyleSheet.create({
  DrawerContainer: {
    borderBottomWidth: 2,
    backgroundColor: "black",
    width: 300,
  },
  DrawerItemsText: {
    fontSize: 18,
    color: "#D0D0D0",
  },
  Header: { paddingVertical: 25, paddingHorizontal: 30 },
  HeaderText: { fontSize: 28, color: "white" },
  ShareContainer: {
    width: 175,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#222222",
  },
  ShareText: {
    color: "#ffffff",
    fontSize: 20,
    marginBottom: 20,
    marginLeft: 8,
  },
  ShareRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
});
