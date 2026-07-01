"use client";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

type Band = {
  name: string;
  playlistUrl?: string;
  status: "active" | "archive"; // optional, default to "active"
  period: string; // optional, default to ""
};


const copyBandsData: Band[] = [
  // --- Active / Upcoming (現在・これから) ---
  { name: "back number", playlistUrl: "https://open.spotify.com/...", status: "active", period: "" },
  { name: "米津玄師", playlistUrl: "https://open.spotify.com/...", status: "active", period: "" },
  { name: "優里", playlistUrl: "https://open.spotify.com/...", status: "active", period: "" },
  { name: "Radiohead", playlistUrl: "https://open.spotify.com/...", status: "active", period: "" },
  { name: "スーパー登山部", playlistUrl: "https://open.spotify.com/...", status: "active", period: "" },
  { name: "Enfants", playlistUrl: "https://open.spotify.com/...", status: "active", period: "" },
  { name: "MONO NO AWARE", playlistUrl: "https://open.spotify.com/...", status: "active", period: "" },
  // --- Archive (過去) ---
  { name: "YOASOBI", playlistUrl: "https://open.spotify.com/...", status: "archive", period: "" },
  { name: "ONE OK ROCK", playlistUrl: "https://open.spotify.com/...", status: "archive", period: "" },
];


export function CopyBands() {
  const [activeTab, setActiveTab] = useState<"active" | "archive">("active");
  const filteredBands = copyBandsData.filter(band => band.status === activeTab);

  return (
    <div className="flex flex-col w-full max-w-80">
      <h3 className="text-xl font-semibold mb-6 text-zinc-700 text-center font-title">Copy Bands</h3>
      <div className="flex flex-col h-120 max-w-80">
        {/* タブボタン */}
        <div className="flex gap-4 mb-6 border-b border-zinc-200 pb-2">
          <button
            onClick={() => setActiveTab("active")}
            className={`pb-2 px-4 font-semibold text-sm transition-colors duration-300 ${
              activeTab === "active" ? "text-black border-b-2 border-black" : "text-zinc-400 hover:text-zinc-600"
            }`}
            type="button"
          >
            Upcoming ({copyBandsData.filter(b => b.status === "active").length})
          </button>
          <button
            onClick={() => setActiveTab("archive")}
            className={`pb-2 px-4 font-semibold text-sm transition-colors duration-300 ${
              activeTab === "archive" ? "text-black border-b-2 border-black" : "text-zinc-400 hover:text-zinc-600"
            }`}
          >
            Archive ({copyBandsData.filter(b => b.status === "archive").length})
          </button>
        </div>

        {/* バンドリスト */}
        <div className="flex flex-col gap-3 flex-1 overflow-y-auto pr-2 scrollbar-thin">
          {filteredBands.map((band, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-zinc-50 rounded-lg border border-zinc-100 gap-3 hover:bg-zinc-100/50 transition-colors">
              <div className="flex flex-col">
                <span className="font-medium text-zinc-800">{band.name}</span>
                <span className="text-xs text-zinc-400 mt-1">{band.period}</span>
              </div>
              {band.playlistUrl && (
                <a
                  href={band.playlistUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-xs font-semibold border border-zinc-300 text-zinc-700 bg-white px-4 py-2 rounded-full hover:bg-zinc-800 hover:text-white hover:border-zinc-800 transition duration-300 text-center shadow-2xs"
                >
                  <FontAwesomeIcon icon={faSpotify} className="w-3 h-3 text-[#1DB954]" />
                  Setlist
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}