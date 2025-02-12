import PageRoutes from "@/routes/PageRoutes";
import { Provider } from "react-redux";
import store, {persistor} from "./store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <PageRoutes/>
      <ToastContainer position="bottom-center" autoClose={2000} hideProgressBar={true}  pauseOnHover />
      </PersistGate>
    </Provider>

  );
};

export default App;
