import PageRoutes from "@/routes/PageRoutes";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {

  return (
    <Provider store={store}>
      <PageRoutes/>
    </Provider>

  );
};

export default App;
