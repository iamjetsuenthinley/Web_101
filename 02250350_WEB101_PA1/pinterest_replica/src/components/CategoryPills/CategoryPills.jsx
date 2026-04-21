import "./CategoryPills.css";

// List of filter categories shown as pills
const CATEGORIES = ["All", "Today", "Following", "DIY", "Travel", "Food", "Art", "Fashion", "Home"];

/**
 * CategoryPills Component
 * ────────────────────────
 * Horizontally scrollable row of filter buttons.
 * Props:
 *   - active (string): currently selected category
 *   - setActive (function): updates active category in App state
 */
function CategoryPills({ active, setActive }) {
  return (
    <div className="category-pills">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          className={`pill ${active === cat ? "pill--active" : "pill--inactive"}`}
          onClick={() => setActive(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryPills;