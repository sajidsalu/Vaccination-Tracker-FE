import PageRoutes from "@/routes/PageRoutes";
import { Provider } from "react-redux";
import store from "./store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {

  return (
    <Provider store={store}>
      <PageRoutes/>
      <ToastContainer position="bottom-center" autoClose={2000} hideProgressBar={true}  pauseOnHover />
    </Provider>

  );
};

export default App;
