import './PinCard.css';

function PinCard({ pin }) {
  return (
    <div className="pin-card">
      <div className="pin-image-container">
        <img className="pin-image" src={pin.img} alt={pin.title} />
        <button className="save-button">Save</button>
      </div>
      <div className="pin-info">
        <h3>{pin.title}</h3>
      </div>
    </div>
  );
}

export default PinCard;
