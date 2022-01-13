import "./App.css";
import Footer from "./components/footer/footer";
import Dashboard from "./components/Dashboard/index";
import Navbar from "./components/Nav/index";
import HomePage from "./pages/HomePage";
import SignUp from "./components/signup/index";
import Login from "./components/login/index";

function App() {
  return (
    <>
      <Login />
      <SignUp />
      {/* <Navbar /> */}
      <Dashboard />
      <HomePage/>
      <Footer />
    </>
  );
}

export default App;
