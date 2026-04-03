import './Navbar.css';
import { useState } from 'react';
import { Pin, Search, User, MessageSquare, Bell } from 'lucide-react';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <span className="logo-icon"><Pin size={28} strokeWidth={2.2} color="#e60023" /></span>
          <span className="logo-text">Pinterest Clone</span>
        </div>
        <div className="search-bar">
          <input 
            type="text"
            placeholder="Search for ideas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-btn" aria-label="Search"><Search size={20} strokeWidth={2.2} /></button>
        </div>
        <div className="nav-icons">
          <button className="nav-icon" aria-label="Profile"><User size={22} /></button>
          <button className="nav-icon" aria-label="Messages"><MessageSquare size={22} /></button>
          <button className="nav-icon" aria-label="Notifications"><Bell size={22} /></button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
