import React, { useState } from 'react';
import './App.css'; // For basic styling
import Navbar from "./components/Navbar";
import imagedisplay from "./components/imagedisplay";
import footer from "./components/footer";

  function App() {
  return (
    <div className="App">
      <Navbar />
      <ImageDisplay />
      <Footer />
    </div>
  );
}

export default App;