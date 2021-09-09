import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

const App: React.FC = () => {
  return (
    <div className="App">
      <Home />
      <Footer />
    </div>
  );
};

export default App;
