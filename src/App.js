import "./App.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
       <br />
      <AllRoutes />
      <br />
      <Footer />
    </div>
  );
}

export default App;
