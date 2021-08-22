//imports
import { Routes } from "./routes/Routes";
import { Provider } from "react-redux";
import  persist  from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const{store,persistor} =persist();
function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {Routes}
          <ToastContainer position={toast.POSITION.TOP_CENTER} autoClose={2000} />
        </PersistGate>
      </Provider>
    </>
  );
}
export default App;
