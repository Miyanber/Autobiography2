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
    playlistUrl:
      "https://open.spotify.com/intl-ja/track/1VoTe7qVyqyMNLgZpQeugO?si=1a3eb776e6dc4c68",
    status: "archive",
    period: "",
  },
  {
    name: "ONE OK ROCK",
    playlistUrl:
      "https://open.spotify.com/intl-ja/track/1yvwDM3RbG1JT0lLGXBCi3?si=136966da0f4f4395",
    status: "archive",
    period: "",
  },
  {
    name: "back number",
    playlistUrl:
      "https://open.spotify.com/playlist/7GQrezWUiDwrtOO9yuBnAx?si=ad15b45402514f56",
    status: "archive",
    period: "",
  },
  {
    name: "優里",
    playlistUrl:
      "https://open.spotify.com/playlist/0SKZv6B1G1RvuhKdvxNHRA?si=8ef01bf87c414ae7",
    status: "archive",
    period: "",
  },
  {
    name: "Radiohead",
    playlistUrl:
      "https://open.spotify.com/playlist/3kzrjVsZygigvPgF21kCCz?si=b13fa9e48314488b&pt=f4f5f512ade02d8ab6cd511c79ea9cf4",
    status: "archive",
    period: "",
  },
  {
    name: "スーパー登山部",
    playlistUrl:
      "https://open.spotify.com/intl-ja/track/2KE6E5HdWNAeGKQhODfLu2?si=f138f52713e74a10",
    status: "archive",
    period: "",
  },
  {
    name: "Oasis",
    status: "archive",
    playlistUrl: "https://music.youtube.com/playlist?list=PLXJ-5Zqovy4U&si=nWKyskrLpbfbuHTf",
    period: "",
  },
  {
    name: "ナンバーガール",
    status: "archive",
    playlistUrl: "https://music.youtube.com/playlist?list=PLLUk_qvCq-ak&si=CyzEKkogvij86Adb",
    period: "",
  },
  {
    name: "Enfants",
    playlistUrl:
      "https://open.spotify.com/playlist/179IsUkNm311bBJZMgJSx7?si=a07606f68c224052&pt=3966969709944f8a2c1d169c9b712c5b",
    status: "archive",
    period: "",
  },
  {
    name: "Mrs. Green Apple",
    playlistUrl:
      "https://open.spotify.com/playlist/3QOTtUipAAtiGwaCmdgm3p?si=0b998b797cab485f",
    status: "archive",
    period: "",
  },
  {
    name: "米津玄師",
    playlistUrl:
      "https://open.spotify.com/playlist/0Vo2N0wjByjjUZVLY0xCF8?si=5Uj9-aXHRz6TIhznsKk53Q&utm_source=copy-link&pi=zjE0rZytS-KDC",
    status: "archive",
    period: "",
  },
  {
    name: "Weezer",
    playlistUrl:
      "https://music.youtube.com/playlist?list=PLIQZWS_UvNh8&si=JPFi6unHVmmKJmJJ",
    status: "archive",
    period: "",
  },
  {
    name: "Nulbarich",
    playlistUrl:
      "https://music.youtube.com/playlist?list=PLL4MQ_qBhvrw&si=hEFH8hNnRudyHhuc",
    status: "archive",
    period: "",
  },
  {
    name: "集団行動",
    playlistUrl:
      "https://music.youtube.com/watch?v=ksdh62jIp5A&si=60eIVwGQqO4ug2P8",
    status: "archive",
    period: "",
  },
  {
    name: "超☆社会的サンダル",
    status: "archive",
    playlistUrl: "https://music.youtube.com/watch?v=OlQ63wYlInc&si=1A9nLUukJsrPjw83",
    period: "",
  },
  {
    name: "おいしくるメロンパン",
    status: "archive",
    playlistUrl: "https://music.youtube.com/playlist?list=PLbZBMFPBME7Y&si=vrJNw59qM14zol1p",
    period: "",
  },
  {
    name: "JUDY AND MARY",
    status: "active",
    playlistUrl: "https://music.youtube.com/playlist?list=PLTweyx3EH5cw&si=aIELUBKEhh2rbTeP",
    period: "",
  },
  {
    name: "ハンブレッダーズ",
    status: "active",
    playlistUrl: "https://music.youtube.com/playlist?list=PLBo4GohWBHGg&si=gvnIXImo58WwtOh8",
    period: "",
  },
  {
    name: "MONO NO AWARE",
    playlistUrl:
      "https://music.youtube.com/playlist?list=PLfaLGPc-_a_A&si=kbT7FUkmsNOiIBeq",
    status: "active",
    period: "",
  },
  {
    name: "ずっと真夜中でいいのに。",
    status: "active",
    period: "",
  },
  {
    name: "andymori",
    status: "active",
    playlistUrl: "https://music.youtube.com/watch?v=UhNfn08CGmg&si=LMOwDgSPzxRGkw21",
    period: "",
  },
  {
    name: "せだい",
    status: "active",
    period: "",
  },
  {
    name: "ひとひら",
    status: "active",
    period: "",
  },
  {
    name: "171",
    status: "active",
    period: "",
  },
];
