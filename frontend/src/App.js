import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MovieList from "./pages/MovieList";
import SeatSelection from "./pages/SeatSelection";
import PaymentPage from "./pages/PaymentPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/seats/:movieId" element={<SeatSelection />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
