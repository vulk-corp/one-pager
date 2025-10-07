import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { PresentationIcon, ScrollTextIcon } from "lucide-react";

export function ViewSwitcher() {
  const navigate = useNavigate();
  const location = useLocation();
  const isDeckView = location.pathname === "/deck";

  const handleToggle = () => {
    if (isDeckView) {
      navigate("/");
    } else {
      navigate("/deck");
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="fixed top-6 right-6 z-50 bg-[#FF5733] hover:bg-[#E54623] text-white px-4 py-3 rounded-lg shadow-lg transition-all duration-200 flex items-center gap-2 font-semibold"
      aria-label={isDeckView ? "Switch to one-pager view" : "Switch to deck view"}
    >
      {isDeckView ? (
        <>
          <ScrollTextIcon className="w-5 h-5" />
          <span className="hidden sm:inline">One-Pager</span>
        </>
      ) : (
        <>
          <PresentationIcon className="w-5 h-5" />
          <span className="hidden sm:inline">Deck</span>
        </>
      )}
    </button>
  );
}
