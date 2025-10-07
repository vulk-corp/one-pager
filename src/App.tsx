import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { VulkOnePager } from "@/polymet/pages/vulk-one-pager";

export default function VulkPrototype() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VulkOnePager />} />
      </Routes>
    </Router>
  );
}
