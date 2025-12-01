
import React from "react";
import { NavProps, Screen } from "../types";

export const HomeScreen: React.FC<NavProps> = ({ onNavigate }) => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display group/design-root overflow-x-hidden">
      {/* Top Navigation */}
      <header className="flex items-center justify-between px-6 pt-6 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden border border-white/10">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB79I-QDV7zhvkyPs56JkARgPI_nkn8qbAzJSiREhauzHXYCIiM97XZ7HvCM495WyJz4O-7HUAoWFFhvo5si5XBrgJyxlhMM9ckDVtfWBfYBvxTNAs1hkH2mZEPJ-kfV2H7PZun0raSqlrI0DCtlrDH0qoKU_0DOloAwmGKeWaXnNc6IfNqbz8I4b19D0y0086UQ6CMi75uDhB8yx93TcxiLqZ8tBKicA6ybMG4dJq-GybINnTx5fkrjehRhJW0GvfIykig99K1Zkk"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white/60 text-xs font-medium">
              Welcome back
            </span>
            <span className="text-white text-sm font-bold">AnimeFan123</span>
          </div>
        </div>
        <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-white">
            notifications
          </span>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 pb-24">
        {/* Search Bar */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-white/40">
              search
            </span>
          </div>
          <input
            type="text"
            className="w-full bg-[#301c27] border-none rounded-xl py-3 pl-10 pr-4 text-white placeholder-white/40 focus:ring-2 focus:ring-primary/50"
            placeholder="Search anime, characters..."
          />
        </div>

        {/* Categories */}
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
          {["All", "Action", "Romance", "Fantasy", "Sci-Fi", "Slice of Life"].map(
            (category, index) => (
              <button
                key={category}
                className={`px-5 py-2 rounded-full whitespace-nowrap text-sm font-bold transition-all ${
                  index === 0
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            )
          )}
        </div>

        {/* Featured Section */}
        <div className="mb-6">
          <h2 className="text-white text-lg font-bold mb-3">Featured</h2>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg shadow-black/20 group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAl-3C0IpSsdcCSdtxeu8kIggve6i8xgMUCLJUh0zuJOGy2bjmYOXlAy6KsnUSOsu2l9bNIK0iuQmMcJQPqjBPuPhjGxWc6cXPmzsseeRxvhneTS2_j1e-X3tsedUXt-eo0LT7o7X5-uJS02fJfR10olGInQrDbFwzWYSkln20NGudZvUODmJeQBr5t-OXw-n7v0gnjU7jP7oSBYj8f-d1W2CtrL1BVAboZ-C04D4mivArpJkc3lAPjuaUB0EgnvQnx540LbAVh_wI")',
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <span className="px-2 py-1 bg-primary rounded-md text-[10px] font-bold text-white mb-2 inline-block">
                NEW SEASON
              </span>
              <h3 className="text-white text-xl font-bold leading-tight">
                Chronicles of the Starlight
              </h3>
              <p className="text-white/80 text-xs mt-1 line-clamp-1">
                Join the adventure across the galaxy in this new hit series.
              </p>
            </div>
          </div>
        </div>

        {/* Popular Characters Grid */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-white text-lg font-bold">Trending Characters</h2>
            <button className="text-primary text-sm font-semibold">
              See All
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                name: "Sakura",
                role: "Mage",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuACqFTkIu7DHoO73I3ilSJsb9hnMJ_HEjOpn6uy3iQTX8TmU26O4EEsbrLTVTNcU6zFCdbZfstbQWrZXNjF7m6Ex2gyzWtL1NEaBm01dRyjdV6I1880GUNfL4diuhGUbiJ-0aB0YFiXrcAyGgxtkNq7XXyHo3_qGUvIXpm06QeqeiIB-9rOTS0XqsD7eccWguGg-PsHj8qYzs8YrHpJ7TplwOv33X0P7oZPoCV3koDegvMIetYUnKEd6XOxQMNOeeg54Rum4KAUokg",
              },
              {
                name: "Hiroki",
                role: "Warrior",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwCbNsod7AQH9hkIbshuWZnXbJ_fxvXOgg3W6vOjKfrWonjFCAdhP4S96PfM7c5RB_1EOgvNyw1RqSXKQ0Rxw0mPruG9D4ESI1r1mht99FN7dNq3GJWXC0ebwVf6vq4E2GC8buz8CPoZAWhaFr-BReJ-RSSJDpg5R5xx5CGwkXt7W4qLfj1Y25QPiUzehI-aeJrh3DYwKpaGE2GAaxqkeaHiZ6Ha_E4IOi8koEv7pfFe1P3sTntc6TYYXczhcRFoAn6VMuP-4BRVI",
              },
              {
                name: "Yumi",
                role: "Support",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB79I-QDV7zhvkyPs56JkARgPI_nkn8qbAzJSiREhauzHXYCIiM97XZ7HvCM495WyJz4O-7HUAoWFFhvo5si5XBrgJyxlhMM9ckDVtfWBfYBvxTNAs1hkH2mZEPJ-kfV2H7PZun0raSqlrI0DCtlrDH0qoKU_0DOloAwmGKeWaXnNc6IfNqbz8I4b19D0y0086UQ6CMi75uDhB8yx93TcxiLqZ8tBKicA6ybMG4dJq-GybINnTx5fkrjehRhJW0GvfIykig99K1Zkk",
              },
              {
                name: "Kenji",
                role: "Rogue",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBobseFgtu5mAPB4Q65qDhb7eH2yJNK14Idh2ys5QFkJqnWg_eC_p4ptPADkTQ8cNuKyfXPRdTUrFvoEO3eCV1mGjl4F-AugO6QnavrvBataU3aCfsAXqmYBSMPZzB3ZKYXPiHbvfcPifsJQl7Yva6ZctrXhXbkskD78HuOeZjAWaDlY96V3JpzJRY6CKSPX6zciEMfUA3pV_iNJDWWD2eHLRSCIjoK48V6i5pqRywsuOkYJfekNLuZ-CZrv-8TA0r2doS_u-txK9I",
              },
            ].map((char, i) => (
              <div
                key={i}
                className="bg-[#301c27] rounded-xl overflow-hidden p-2 flex flex-col gap-2"
              >
                <div className="aspect-square rounded-lg overflow-hidden bg-white/5">
                  <img
                    src={char.img}
                    alt={char.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-1 pb-1">
                  <h3 className="text-white font-bold text-sm">{char.name}</h3>
                  <p className="text-white/60 text-xs">{char.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-[#221019]/90 backdrop-blur-md border-t border-white/5 pb-6 pt-2 px-6">
        <div className="flex justify-between items-center max-w-sm mx-auto">
          {[
            { icon: "home", label: "Home", active: true },
            { icon: "search", label: "Explore", active: false },
            { icon: "favorite", label: "Favorites", active: false },
            { icon: "person", label: "Profile", active: false },
          ].map((item) => (
            <button
              key={item.label}
              className={`flex flex-col items-center gap-1 ${
                item.active ? "text-primary" : "text-white/40 hover:text-white/70"
              }`}
            >
              <span
                className={`material-symbols-outlined ${
                  item.active ? "font-variation-fill" : ""
                }`}
              >
                {item.icon}
              </span>
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
      <style>{`
        .font-variation-fill {
          font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};
