import "react-native-reanimated";
import { ThemeProvider } from "styled-components";
import Home from "./src/pages/Home";

const theme = {
  colors: {
    background: "#fafafa",
    orange: "#fa7c0e",
    grey: "#eeeeee",
    titleActive: "#999999",
    white: "#ffffff",
    error: "#e74c3c",
    green: "#2ecc71",
    label: "#dadada",
  },
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
