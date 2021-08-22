//imports
import { Routes } from "./routes/Routes";
import { Provider } from "react-redux";
import  persist  from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const{store,persistor} =persist();
function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {Routes}
        </PersistGate>
      </Provider>
    </>
  );
}
export default App;
