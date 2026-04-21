import PinCard from "../PinCard/PinCard";
import "./MasonryGrid.css";

function MasonryGrid({ pins, savedPins, onSave }) {
  if (pins.length === 0) {
    return (
      <div className="masonry-grid">
        <p className="masonry-grid__empty">No pins found — try a different search</p>
      </div>
    );
  }

  return (
    <div className="masonry-grid">
      {pins.map((pin) => (
        <PinCard
          key={pin.id}
          pin={pin}
          saved={savedPins.has(pin.id)}
          onSave={onSave}
        />
      ))}
    </div>
  );
}

export default MasonryGrid;