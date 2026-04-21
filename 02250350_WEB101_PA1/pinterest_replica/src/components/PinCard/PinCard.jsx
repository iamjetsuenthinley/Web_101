import { useState } from "react";
import "./PinCard.css";

/**
 * PinCard — Reusable Component
 * Renders one Pinterest pin with image, hover overlay, save toggle, and author info.
 * Props: pin (object), saved (boolean), onSave (function)
 */
function PinCard({ pin, saved, onSave }) {
  const [hovered, setHovered] = useState(false);

  // Deterministic colour from pin id for the author avatar
  const avatarBg = `hsl(${(pin.id * 53) % 360}, 45%, 50%)`;

  return (
    <div
      className="pin-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="pin-card__image-wrap">
        <img
          className="pin-card__image"
          src={pin.src}
          alt={pin.title}
          loading="lazy"
        />

        {hovered && (
          <div className="pin-card__overlay">
            {/* Top: save + more */}
            <div className="pin-card__top">
              <button
                className={`pin-card__save-btn ${saved ? "pin-card__save-btn--saved" : ""}`}
                onClick={(e) => { e.stopPropagation(); onSave(pin.id); }}
              >
                {saved ? "Saved" : "Save"}
              </button>
              <button className="pin-card__more-btn" onClick={(e) => e.stopPropagation()}>
                ···
              </button>
            </div>

            {/* Bottom: visit source link */}
            <div className="pin-card__bottom">
              <button className="pin-card__visit-btn" onClick={(e) => e.stopPropagation()}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                {pin.author}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Info row */}
      <div className="pin-card__info">
        <span className="pin-card__title">{pin.title}</span>
        <div className="pin-card__author-wrap">
          <div className="pin-card__author-avatar" style={{ background: avatarBg }}>
            {pin.author[0]}
          </div>
          <span className="pin-card__author-name">{pin.saves}</span>
        </div>
      </div>
    </div>
  );
}

export default PinCard;