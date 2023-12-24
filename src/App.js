import { Provider } from "react-redux";
import Main from "./components/layout/Main";
import appStore from "./utils/store/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <Main />
    </Provider>
  );
}

export default App;
