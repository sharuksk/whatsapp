import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import FileArea from "./components/fileArea";
import { Provider, useDispatch } from "react-redux";
import RegisterPage from "./COMPONENT/registerPage";
import SignUpPage from "./COMPONENT/createAccount";
import FileArea from "./COMPONENT/fileArea";
import store from "./reactRedux/store";
import PrivateRoute from "./COMPONENT/PrivateRoute";
// import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<RegisterPage />} />
          <Route path="/SignUp" element={<SignUpPage />} />
          <Route
            path="/filearea/*"
            element={
              <PrivateRoute>
                <FileArea />
              </PrivateRoute>
            }
          />
          {/* <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterAdmin />} />
        <Route path="/filearea/*" element={<FileArea />} /> */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
