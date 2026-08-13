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
    name: "優里",
    playlistUrl: "https://open.spotify.com/playlist/0SKZv6B1G1RvuhKdvxNHRA?si=8ef01bf87c414ae7",
    status: "active",
    period: ""
  },
  {
    name: "Radiohead",
    playlistUrl: "https://open.spotify.com/playlist/3kzrjVsZygigvPgF21kCCz?si=b13fa9e48314488b&pt=f4f5f512ade02d8ab6cd511c79ea9cf4",
    status: "active",
    period: ""
  },
  {
    name: "スーパー登山部",
    playlistUrl: "https://open.spotify.com/intl-ja/track/2KE6E5HdWNAeGKQhODfLu2?si=f138f52713e74a10",
    status: "archive",
    period: ""
  },
  {
    name: "Oasis",
    status: "active",
    period: ""
  },
  {
    name: "ナンバーガール",
    status: "active",
    period: ""
  },
  {
    name: "Enfants",
    playlistUrl: "https://open.spotify.com/playlist/179IsUkNm311bBJZMgJSx7?si=a07606f68c224052&pt=3966969709944f8a2c1d169c9b712c5b",
    status: "active",
    period: ""
  },
  {
    name: "Mrs. Green Apple",
    playlistUrl: "https://open.spotify.com/playlist/3QOTtUipAAtiGwaCmdgm3p?si=0b998b797cab485f",
    status: "active",
    period: ""
  },
  {
    name: "米津玄師",
    playlistUrl: "https://open.spotify.com/playlist/0Vo2N0wjByjjUZVLY0xCF8?si=5Uj9-aXHRz6TIhznsKk53Q&utm_source=copy-link&pi=zjE0rZytS-KDC",
    status: "active",
    period: ""
  },
  {
    name: "Weezer",
    playlistUrl: "https://open.spotify.com/playlist/5eMh6NPTfdkkLl82SfTrNO?si=1e912147a90f4664",
    status: "active",
    period: ""
  },
  {
    name: "Nulbarich",
    playlistUrl: "https://open.spotify.com/playlist/12ri3IMWT3m9oNPB6I3Epa?si=f4ca8c104f7d40ed",
    status: "active",
    period: ""
  },
  {
    name: "集団行動",
    playlistUrl: "https://open.spotify.com/playlist/2RDO2kZwSH3I5kbtVf7V7v?si=d39fd825301c4251",
    status: "active",
    period: ""
  },
  {
    name: "MONO NO AWARE",
    playlistUrl: "https://open.spotify.com/playlist/2QW0qX6dvY69DZhmiIUVNJ?si=e69ef7a4d63d4c48",
    status: "active",
    period: ""
  },
  {
    name: "超☆社会的サンダル",
    status: "active",
    period: ""
  },
];
