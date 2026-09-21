import React from "react";
import { Search, Bell, ChevronDown } from "lucide-react";
import { Movie } from "../types";

interface HeaderProps {
  movies: Movie[];
  currentMovie: Movie;
  onSelectMovie: (movie: Movie) => void;
  guestName?: string;
}

export default function Header({ movies, currentMovie, onSelectMovie, guestName }: HeaderProps) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [showSearchDropdown, setShowSearchDropdown] = React.useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const filteredMovies = React.useMemo(() => {
    if (!searchTerm.trim()) return [];
    return movies.filter(
      (m) =>
        m.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.originalTitle?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, movies]);

  React.useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowSearchDropdown(false);
        setShowProfileDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleSelect = (movie: Movie) => {
    onSelectMovie(movie);
    setSearchTerm("");
    setShowSearchDropdown(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-gradient-to-b from-[#0d0810]/95 to-transparent backdrop-blur-sm border-b border-pink-900/20">
      <div className="flex items-center gap-8">
        <div
          onClick={() => onSelectMovie(movies[0])}
          className="text-white hover:text-pink-400 transition cursor-pointer flex items-center gap-1.5 active:scale-95"
          data-purpose="logo"
        >
          <svg className="w-8 h-8" viewBox="0 0 100 100">
            <text x="50%" y="78" textAnchor="middle" fontFamily="Impact, Arial Black, sans-serif" fontSize="90" fontWeight="900" fill="#E50914">W</text>
          </svg>
          <span className="font-serif text-lg tracking-wider font-extrabold hidden sm:inline text-white">WEDFLIX</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-wider font-semibold text-gray-400">
          <button onClick={() => onSelectMovie(movies[0])} className="text-white hover:text-pink-300 transition duration-200">HOME</button>
          <button onClick={() => {}} className="hover:text-pink-300 transition duration-200">MOVIE</button>
          <button onClick={() => {}} className="hover:text-pink-300 transition duration-200">SERIES</button>
          <button onClick={() => {}} className="hover:text-pink-300 transition duration-200">MORE</button>
        </nav>
      </div>

      <div className="flex items-center gap-4" ref={dropdownRef}>
        <div className="relative">
          <div className="flex items-center bg-white-950/40 rounded-full px-4 py-1.5 w-44 sm:w-64 border border-white-900/30 focus-within:border-pink-500/60 focus-within:bg-pink-950/60 transition-all duration-300">
            <Search className="w-4 h-4 text-white-400/60 mr-2 shrink-0" />
            <input
              id="search-input"
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setShowSearchDropdown(true); }}
              onFocus={() => setShowSearchDropdown(true)}
              className="bg-transparent border-none outline-none focus:ring-0 text-xs w-full text-gray-200 placeholder:text-gray-600 font-mono"
              placeholder="renata, tata, cinta jarak jauh..."
              type="text"
            />
          </div>

          {showSearchDropdown && searchTerm.trim() && (
            <div className="absolute top-[38px] right-0 w-full min-w-[240px] bg-[#1a0d18] border border-pink-900/30 rounded-xl overflow-hidden shadow-2xl z-50">
              <div className="p-2 text-[9px] uppercase font-bold text-pink-500/60 tracking-wider border-b border-pink-900/20">
                Hasil Pencarian:
              </div>
              {filteredMovies.length > 0 ? (
                filteredMovies.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => handleSelect(m)}
                    className="w-full text-left p-3 hover:bg-pink-900/20 transition flex items-center gap-3 border-b border-pink-900/10 last:border-b-0"
                  >
                    <img src={m.posterUrl} referrerPolicy="no-referrer" className="w-8 h-10 object-cover rounded bg-zinc-800" alt={m.title} />
                    <div className="truncate">
                      <p className="text-xs font-semibold text-white truncate">{m.title}</p>
                      <p className="text-[10px] text-gray-400 font-mono mt-0.5 truncate">{m.year} • {m.country}</p>
                    </div>
                  </button>
                ))
              ) : (
                <div className="p-4 text-xs text-gray-500 text-center font-mono">Tidak ada film ditemukan</div>
              )}
            </div>
          )}
        </div>

        <button className="relative w-8 h-8 rounded-full flex items-center justify-center hover:bg-pink-900/30 text-gray-400 active:scale-90 transition">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full animate-ping"></span>
          <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full"></span>
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            className="flex items-center gap-1.5 focus:outline-none group focus:ring-2 focus:ring-pink-500/50 rounded p-0.5 transition"
            aria-label="Menu profil"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt="Profile"
              className="w-7 h-7 rounded object-cover border border-transparent group-hover:border-white transition-all"
            />
            <ChevronDown className={`w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-transform duration-250 ${showProfileDropdown ? 'rotate-180' : ''}`} />
          </button>

          {showProfileDropdown && (
            <div className="absolute right-0 top-9 w-44 bg-[#1a0d18] border border-pink-900/30 rounded-xl overflow-hidden shadow-2xl z-50 animate-fade-in">
              <div className="p-3 text-center">
                <p className="text-[9px] text-gray-500 font-mono uppercase tracking-wider">Profil Tamu:</p>
                <p className="text-xs font-bold text-pink-300 mt-1 truncate">
                  {guestName ? guestName : "Tamu Undangan"}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
