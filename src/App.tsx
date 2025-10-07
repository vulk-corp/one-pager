import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { VulkOnePager } from "@/polymet/pages/vulk-one-pager";
import { VulkDeck } from "@/polymet/pages/vulk-deck";

export default function VulkPrototype() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VulkOnePager />} />
        <Route path="/deck" element={<VulkDeck />} />
      </Routes>
    </Router>
  );
}
