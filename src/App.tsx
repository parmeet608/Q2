import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/products";
import { EventProvider } from "./contexts/EventContext";

function App() {
  return (
    <Router>
      <EventProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </EventProvider>
    </Router>
  );
}

export default App;
