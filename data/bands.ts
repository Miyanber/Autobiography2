type Band = {
  name: string;
  playlistUrl?: string;
  status: "active" | "archive"; // optional, default to "active"
  period: string; // optional, default to ""
};

export const copyBandsData: Band[] = [
  // --- Archive (過去) ---
  {
    name: "YOASOBI",
    playlistUrl: "https://open.spotify.com/intl-ja/track/1VoTe7qVyqyMNLgZpQeugO?si=1a3eb776e6dc4c68",
    status: "archive",
    period: ""
  },
  {
    name: "ONE OK ROCK",
    playlistUrl: "https://open.spotify.com/intl-ja/track/1yvwDM3RbG1JT0lLGXBCi3?si=136966da0f4f4395",
    status: "archive",
    period: ""
  },
  {
    name: "back number",
    playlistUrl: "https://open.spotify.com/playlist/7GQrezWUiDwrtOO9yuBnAx?si=ad15b45402514f56",
    status: "archive",
    period: ""
  },
  
  // --- Active / Upcoming (現在・これから) ---
  {
    name: "米津玄師",
    playlistUrl: "https://open.spotify.com/intl-ja/track/0YWDyaVCYEehkFgHWw9M28?si=751fce9634374809",
    status: "active",
    period: ""
  },
  {
    name: "優里",
    playlistUrl: "https://open.spotify.com/playlist/0SKZv6B1G1RvuhKdvxNHRA?si=8ef01bf87c414ae7",
    status: "active",
    period: ""
  },
  {
    name: "Radiohead",
    status: "active",
    period: ""
  },
  {
    name: "スーパー登山部",
    playlistUrl: "https://open.spotify.com/intl-ja/track/2KE6E5HdWNAeGKQhODfLu2?si=f138f52713e74a10",
    status: "active",
    period: ""
  },
  {
    name: "Enfants",
    status: "active",
    period: ""
  },
  {
    name: "MONO NO AWARE",
    status: "active",
    period: ""
  },
];
