import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import Header from "./containers/Header";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<ProductListing/>}/>
      <Route path="/product/:productId" element={<ProductDetail/>}/>
      <Route path="*" element={<h1>Sorry! 404 Page Not Found</h1>} />
      </Routes>
      </Router>
      
       
    
    </div>
  );
}

export default App;
