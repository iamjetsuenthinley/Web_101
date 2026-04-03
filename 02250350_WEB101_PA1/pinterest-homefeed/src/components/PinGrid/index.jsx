import './PinGrid.css';
import PinCard from '../PinCard';

function PinGrid({ pins }) {
  return (
    <div className="pin-grid">
      {pins.map((pin) => (
        <PinCard key={pin.id} pin={pin} />
      ))}
    </div>
  );
}

export default PinGrid;
