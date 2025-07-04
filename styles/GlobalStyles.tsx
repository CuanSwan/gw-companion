import { StyleSheet } from 'react-native'

export const GlobalStyles = StyleSheet.create({
  body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 30,
    margin: "auto",
    width: "90%",
  },
  icons: {
    backgroundColor: "#a01316",
    color: "white",
    marginHorizontal: 10,
  },
  bar: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#a01316",
    borderRadius: 4,
    elevation: 6,
  },
  text: {
    color: "white",
    fontSize: 18,
    textAlign: "center"
  },
  link: {
    height: 60,
    width: "100%",
  },
}

)