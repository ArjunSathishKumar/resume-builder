import { Container } from "react-bootstrap";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./App.css";
import rootReducer from "./reducers";
import RouterPage from "./Routes";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Container className="main-container">
        <RouterPage />
      </Container>
    </Provider>
  );
}

export default App;
