import "./App.css";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

function App() {
  return (
    <UserContextProvider>
      <h1>React with shivu</h1>
      <Login></Login>
      <Profile></Profile>
    </UserContextProvider>
  );
}

export default App;
