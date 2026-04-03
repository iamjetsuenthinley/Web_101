import { useState, useEffect, useRef } from "react";

// ── Mock Data ──────────────────────────────────────────────────────────────────
const CATEGORIES = [
  "All", "Photography", "Travel", "Fashion", "Food & Drink",
  "Art", "Home Decor", "DIY", "Fitness", "Nature", "Architecture",
];

const PINS = [
  { id: 1,  img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80", title: "Mountain sunrise hike", author: "wanderlust_kai", avatar: "https://i.pravatar.cc/32?img=1",  category: "Travel",     height: 280, saves: "2.4k" },
  { id: 2,  img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80", title: "Minimal living room inspo", author: "home.by.sofia", avatar: "https://i.pravatar.cc/32?img=2",  category: "Home Decor", height: 340, saves: "5.1k" },
  { id: 3,  img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80", title: "Healthy grain bowl", author: "nourishbowls",  avatar: "https://i.pravatar.cc/32?img=3",  category: "Food & Drink", height: 220, saves: "890" },
  { id: 4,  img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80", title: "Street style Tokyo", author: "tokyofashion", avatar: "https://i.pravatar.cc/32?img=4",  category: "Fashion",    height: 380, saves: "3.7k" },
  { id: 5,  img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&q=80", title: "Golden hour portrait", author: "lenscraft",    avatar: "https://i.pravatar.cc/32?img=5",  category: "Photography",height: 300, saves: "6.2k" },
  { id: 6,  img: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=400&q=80", title: "Brutalist architecture", author: "arch.weekly", avatar: "https://i.pravatar.cc/32?img=6",  category: "Architecture",height: 260, saves: "1.3k" },
  { id: 7,  img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80", title: "Misty forest walk", author: "into.the.wild", avatar: "https://i.pravatar.cc/32?img=7",  category: "Nature",     height: 320, saves: "4.8k" },
  { id: 8,  img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&q=80", title: "Watercolour floral art", author: "artbymina",   avatar: "https://i.pravatar.cc/32?img=8",  category: "Art",        height: 350, saves: "7.9k" },
  { id: 9,  img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80", title: "Morning yoga routine", author: "zenflow",      avatar: "https://i.pravatar.cc/32?img=9",  category: "Fitness",    height: 240, saves: "2.1k" },
  { id: 10, img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80", title: "Autumn trail colours", author: "season.tales", avatar: "https://i.pravatar.cc/32?img=10", category: "Nature",     height: 300, saves: "3.3k" },
  { id: 11, img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80", title: "Spice market Istanbul", author: "foodtraveler",  avatar: "https://i.pravatar.cc/32?img=11", category: "Food & Drink", height: 270, saves: "1.9k" },
  { id: 12, img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80", title: "Cozy café corner", author: "cafehopping",    avatar: "https://i.pravatar.cc/32?img=12", category: "Travel",     height: 360, saves: "5.5k" },
  { id: 13, img: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&q=80", title: "Linen summer dress", author: "slowfashion",   avatar: "https://i.pravatar.cc/32?img=13", category: "Fashion",    height: 290, saves: "4.2k" },
  { id: 14, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", title: "Wabi-sabi ceramics", author: "claywork",      avatar: "https://i.pravatar.cc/32?img=14", category: "Art",        height: 230, saves: "3.1k" },
  { id: 15, img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=400&q=80", title: "Venice canal at dusk", author: "europeanroam", avatar: "https://i.pravatar.cc/32?img=15", category: "Travel",     height: 310, saves: "8.4k" },
  { id: 16, img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80", title: "Hammock jungle camp", author: "wildstay",     avatar: "https://i.pravatar.cc/32?img=16", category: "Travel",     height: 250, saves: "2.7k" },
];

// ── PinCard Component ──────────────────────────────────────────────────────────
function PinCard({ pin }) {
  const [saved, setSaved] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`pin-card ${hovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="pin-img-wrap" style={{ height: pin.height }}>
        <img src={pin.img} alt={pin.title} loading="lazy" />
        <div className="pin-overlay">
          <button
            className={`save-btn ${saved ? "saved" : ""}`}
            onClick={(e) => { e.stopPropagation(); setSaved(!saved); }}
          >
            {saved ? "✓ Saved" : "Save"}
          </button>
          <div className="pin-actions">
            <button className="icon-btn" title="More options">•••</button>
            <button className="icon-btn" title="Visit link">↗</button>
          </div>
        </div>
        <span className="pin-category-tag">{pin.category}</span>
      </div>
      <div className="pin-meta">
        <p className="pin-title">{pin.title}</p>
        <div className="pin-author">
          <img src={pin.avatar} alt={pin.author} className="avatar-sm" />
          <span>{pin.author}</span>
          <span className="pin-saves">{pin.saves} saves</span>
        </div>
      </div>
    </div>
  );
}

// ── Masonry Layout ─────────────────────────────────────────────────────────────
function MasonryGrid({ pins }) {
  const [cols, setCols] = useState(4);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setCols(w < 600 ? 2 : w < 900 ? 3 : w < 1200 ? 4 : 5);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Distribute pins across columns
  const columns = Array.from({ length: cols }, () => []);
  pins.forEach((pin, i) => columns[i % cols].push(pin));

  return (
    <div className="masonry-grid" style={{ "--cols": cols }}>
      {columns.map((col, ci) => (
        <div key={ci} className="masonry-col">
          {col.map(pin => <PinCard key={pin.id} pin={pin} />)}
        </div>
      ))}
    </div>
  );
}

// ── Navbar ─────────────────────────────────────────────────────────────────────
function Navbar({ searchQuery, setSearchQuery }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-left">
        {/* Pinterest Logo */}
        <a href="#" className="nav-logo" aria-label="Pinterest">
          <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
          </svg>
        </a>
        <a href="#" className="nav-link active">Home</a>
        <a href="#" className="nav-link">Explore</a>
        <a href="#" className="nav-link">Create</a>
      </div>

      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search for ideas..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="nav-right">
        <button className="icon-round" title="Notifications">🔔</button>
        <button className="icon-round" title="Messages">✉</button>
        <img src="https://i.pravatar.cc/36?img=20" alt="profile" className="nav-avatar" />
        <button className="chevron-btn" onClick={() => setMenuOpen(!menuOpen)}>▾</button>
      </div>
    </nav>
  );
}

// ── Category Pills ─────────────────────────────────────────────────────────────
function CategoryBar({ active, setActive }) {
  const ref = useRef(null);

  return (
    <div className="category-bar" ref={ref}>
      {CATEGORIES.map(cat => (
        <button
          key={cat}
          className={`cat-pill ${active === cat ? "active" : ""}`}
          onClick={() => setActive(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

// ── App ────────────────────────────────────────────────────────────────────────
export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = PINS.filter(pin => {
    const matchCat = activeCategory === "All" || pin.category === activeCategory;
    const matchSearch = pin.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        pin.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <style>{CSS}</style>
      <div className="app">
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <CategoryBar active={activeCategory} setActive={setActiveCategory} />
        <main className="main">
          {filtered.length > 0
            ? <MasonryGrid pins={filtered} />
            : <div className="empty-state">
                <div style={{ fontSize: 64 }}>🔍</div>
                <h2>No pins found</h2>
                <p>Try a different keyword or category</p>
              </div>
          }
        </main>
      </div>
    </>
  );
}

// ── Styles ─────────────────────────────────────────────────────────────────────
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --red: #E60023;
    --red-dark: #ad081b;
    --bg: #F5F3EF;
    --surface: #ffffff;
    --text: #111111;
    --muted: #767676;
    --border: #e8e8e8;
    --radius: 16px;
    --nav-h: 64px;
    --cat-h: 52px;
    --font: 'DM Sans', sans-serif;
  }

  body { font-family: var(--font); background: var(--bg); color: var(--text); }

  /* ── Navbar ── */
  .navbar {
    position: fixed; top: 0; left: 0; right: 0; height: var(--nav-h);
    background: var(--surface); border-bottom: 1px solid var(--border);
    display: flex; align-items: center; gap: 12px;
    padding: 0 20px; z-index: 100;
    box-shadow: 0 1px 8px rgba(0,0,0,.06);
  }
  .nav-left { display: flex; align-items: center; gap: 6px; flex-shrink: 0; }
  .nav-logo { color: var(--red); display: flex; align-items: center; margin-right: 4px; }
  .nav-link {
    padding: 8px 12px; border-radius: 24px; font-weight: 600; font-size: .88rem;
    color: var(--muted); text-decoration: none; transition: background .15s, color .15s;
  }
  .nav-link:hover, .nav-link.active { background: var(--text); color: #fff; }

  .search-bar {
    flex: 1; max-width: 560px; margin: 0 auto;
    display: flex; align-items: center; gap: 10px;
    background: #efefef; border-radius: 24px; padding: 0 18px; height: 44px;
    border: 2px solid transparent; transition: border .2s, box-shadow .2s;
  }
  .search-bar:focus-within { border-color: var(--text); background: #fff; box-shadow: 0 0 0 3px rgba(0,0,0,.05); }
  .search-bar input { flex: 1; border: none; background: transparent; font-size: .94rem; font-family: var(--font); outline: none; color: var(--text); }
  .search-bar input::placeholder { color: var(--muted); }
  .search-icon { font-size: 1rem; opacity: .6; }

  .nav-right { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
  .icon-round {
    width: 40px; height: 40px; border-radius: 50%; border: none;
    background: #efefef; cursor: pointer; font-size: 1rem;
    display: flex; align-items: center; justify-content: center;
    transition: background .15s;
  }
  .icon-round:hover { background: var(--border); }
  .nav-avatar { width: 36px; height: 36px; border-radius: 50%; object-fit: cover; cursor: pointer; border: 2px solid transparent; transition: border .15s; }
  .nav-avatar:hover { border-color: var(--text); }
  .chevron-btn { border: none; background: none; cursor: pointer; font-size: 1rem; color: var(--muted); }

  /* ── Category Bar ── */
  .category-bar {
    position: fixed; top: var(--nav-h); left: 0; right: 0; height: var(--cat-h);
    background: var(--surface); border-bottom: 1px solid var(--border);
    display: flex; align-items: center; gap: 8px;
    padding: 0 20px; overflow-x: auto; z-index: 99;
    scrollbar-width: none;
  }
  .category-bar::-webkit-scrollbar { display: none; }
  .cat-pill {
    padding: 7px 16px; border-radius: 24px; border: none;
    font-family: var(--font); font-size: .84rem; font-weight: 600;
    background: #efefef; color: var(--text); cursor: pointer;
    white-space: nowrap; transition: background .15s, color .15s, transform .1s;
    flex-shrink: 0;
  }
  .cat-pill:hover { background: #d8d8d8; transform: translateY(-1px); }
  .cat-pill.active { background: var(--text); color: #fff; }

  /* ── Main ── */
  .main {
    padding-top: calc(var(--nav-h) + var(--cat-h) + 20px);
    padding-bottom: 48px;
    padding-left: 12px; padding-right: 12px;
    max-width: 1600px; margin: 0 auto;
  }

  /* ── Masonry ── */
  .masonry-grid {
    display: grid;
    grid-template-columns: repeat(var(--cols), 1fr);
    gap: 16px;
  }
  .masonry-col { display: flex; flex-direction: column; gap: 16px; }

  /* ── Pin Card ── */
  .pin-card {
    border-radius: var(--radius); overflow: hidden;
    background: var(--surface); cursor: zoom-in;
    transition: transform .2s, box-shadow .2s;
    break-inside: avoid;
  }
  .pin-card.hovered { transform: scale(1.015); box-shadow: 0 8px 32px rgba(0,0,0,.14); }

  .pin-img-wrap { position: relative; overflow: hidden; }
  .pin-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .3s; }
  .pin-card.hovered .pin-img-wrap img { transform: scale(1.04); }

  .pin-overlay {
    position: absolute; inset: 0;
    display: flex; flex-direction: column; justify-content: space-between;
    padding: 12px;
    opacity: 0; transition: opacity .2s;
    background: linear-gradient(to bottom, rgba(0,0,0,.2) 0%, transparent 40%, transparent 60%, rgba(0,0,0,.2) 100%);
  }
  .pin-card.hovered .pin-overlay { opacity: 1; }

  .save-btn {
    align-self: flex-end; padding: 9px 18px; border-radius: 24px; border: none;
    font-family: var(--font); font-size: .88rem; font-weight: 700;
    background: var(--red); color: #fff; cursor: pointer;
    transition: background .15s, transform .1s;
  }
  .save-btn:hover { background: var(--red-dark); transform: scale(1.03); }
  .save-btn.saved { background: var(--text); }

  .pin-actions { display: flex; gap: 8px; align-self: flex-end; }
  .icon-btn {
    width: 36px; height: 36px; border-radius: 50%; border: none;
    background: rgba(255,255,255,.9); cursor: pointer; font-size: .8rem;
    display: flex; align-items: center; justify-content: center;
    transition: background .15s;
  }
  .icon-btn:hover { background: #fff; }

  .pin-category-tag {
    position: absolute; bottom: 12px; left: 12px;
    background: rgba(0,0,0,.55); color: #fff;
    font-size: .72rem; font-weight: 600; padding: 3px 10px;
    border-radius: 12px; backdrop-filter: blur(4px);
    opacity: 0; transition: opacity .2s;
  }
  .pin-card.hovered .pin-category-tag { opacity: 1; }

  .pin-meta { padding: 10px 12px 12px; }
  .pin-title { font-size: .88rem; font-weight: 600; color: var(--text); line-height: 1.3; margin-bottom: 8px; }
  .pin-author { display: flex; align-items: center; gap: 6px; }
  .avatar-sm { width: 24px; height: 24px; border-radius: 50%; object-fit: cover; }
  .pin-author span { font-size: .78rem; color: var(--muted); }
  .pin-saves { margin-left: auto; font-size: .74rem; color: var(--muted); font-weight: 600; }

  /* ── Empty State ── */
  .empty-state {
    text-align: center; padding: 80px 20px; color: var(--muted);
  }
  .empty-state h2 { font-size: 1.5rem; margin: 16px 0 8px; color: var(--text); }
  .empty-state p { font-size: .95rem; }

  /* ── Responsive ── */
  @media (max-width: 600px) {
    .nav-link { display: none; }
    .nav-right .icon-round:first-child { display: none; }
    .search-bar { max-width: 100%; }
    .main { padding-left: 8px; padding-right: 8px; }
  }
`;
