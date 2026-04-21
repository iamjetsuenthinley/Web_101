import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import CategoryPills from "./components/CategoryPills/CategoryPills";
import MasonryGrid from "./components/MasonryGrid/MasonryGrid";
import PINS from "./data/pins";
import "./App.css";

/**
 * App — Root Component
 * Layout: fixed left sidebar (Navbar) + scrollable main content area
 * State: searchQuery, activeCategory, savedPins
 */
function App() {
  const [searchQuery, setSearchQuery]       = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [savedPins, setSavedPins]           = useState(new Set());

  // Derive filtered pins from state on every render
  const filteredPins = PINS.filter((pin) => {
    const matchesSearch =
      pin.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pin.author.toLowerCase().includes(searchQuery.toLowerCase());
    const neutralCategories = ["All", "Today", "Following"];
    const matchesCategory =
      neutralCategories.includes(activeCategory) ||
      pin.title.toLowerCase().includes(activeCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  const handleSave = (pinId) => {
    setSavedPins((prev) => {
      const next = new Set(prev);
      next.has(pinId) ? next.delete(pinId) : next.add(pinId);
      return next;
    });
  };

  return (
    <div className="app">
      {/* Fixed left sidebar — collapses to bottom bar on mobile */}
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Main content: offset by sidebar width */}
      <main className="app__main">

        {/* Sticky top bar: search + category pills */}
        <div className="app__topbar">
          <div className="app__search-wrap">
            <svg className="app__search-icon" width="17" height="17" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              className="app__search-input"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <CategoryPills active={activeCategory} setActive={setActiveCategory} />
        </div>

        {/* Saved notice */}
        {savedPins.size > 0 && (
          <p className="app__saved-notice">
            {savedPins.size} pin{savedPins.size !== 1 ? "s" : ""} saved to your board
          </p>
        )}

        {/* Full-width masonry grid */}
        <MasonryGrid
          pins={filteredPins}
          savedPins={savedPins}
          onSave={handleSave}
        />
      </main>
    </div>
  );
}

export default App;