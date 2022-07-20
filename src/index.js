import AppNavigator from "./navigation/index";
import { Provider } from "react-redux";
import { init } from "./db";
import { store } from "./store";

init()
  .then(() => {
    console.log("DB inicializada");
  })
  .catch((err) => {
    console.log("Error al inicializar DB", err);
  });

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
