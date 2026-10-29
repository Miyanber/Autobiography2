export interface Work {
  id: number;
  thumbnail: string;
  title: string;
  overview: string;
  createdAt: string; // YYYY-MM-DD
  show_on_top: boolean;
  appUrl?: string;
  githubUrl?: string;
  link?: string;
}

export const works: Work[] = [
  {
    id: 1,
    thumbnail: "/main/img/oceanarrow.webp",
    title: "MYR-Trains",
    overview: "Minecraft の Real Train Mod 用モデルパック",
    appUrl: "https://rtmaddon-search.com/myr-train/",
    createdAt: "2022-06-05",
    show_on_top: false,
  },
  {
    id: 2,
    thumbnail: "/main/img/timer.webp",
    title: "StudyTimer",
    overview:
      "勉強と休憩のサイクルを最適化するWebタイマー。Web Workerによる高精度なバックグラウンド計時や画面スリープ防止、カスタムアラーム音に対応したPWAアプリ。",
    appUrl: "https://studytimer.miyanber.com",
    createdAt: "2024-01-15",
    show_on_top: false,
  },
  {
    id: 3,
    thumbnail: "/main/img/スクリーンショット_2026-03-04_142709.webp",
    title: "洛南高等学校附属中学校 鉄道研究部 公式HP (2023)",
    overview:
      "洛南高等学校附属中学校鉄道研究部の公式ホームページ。2023年度にリニューアル制作を担当。",
    appUrl: "https://rakunanrail.web.fc2.com/index.html",
    githubUrl: "https://github.com/Miyanber/rakunan_rail",
    createdAt: "2023-10-05",
    show_on_top: false,
  },
  {
    id: 5,
    thumbnail: "/main/img/RakuNavi-TopPage.webp",
    title: "洛南高等学校・附属中学校 文化祭公式ホームページ「らくなび」",
    overview:
      "学内文化祭・体育祭向けナビゲーションWebアプリ。校内マップ、展示ごとの混雑度やタイムテーブル表示、動的フォーム等を実装し、初年度から約87,600PVを獲得。",
    githubUrl: "https://github.com/Miyanber/rakunavi-portfolio",
    appUrl: "https://rakunavi2026.org/",
    createdAt: "2025-10-04",
    show_on_top: true,
  },
  {
    id: 6,
    thumbnail: "/main/img/ClassroomArchiver.webp",
    title: "Classroom Archiver",
    overview:
      "Google Classroom™ のお知らせ・課題・資料をオフライン閲覧可能なHTML形式で一括保存するPythonツール。添付ファイルのローカル保存やGoogle Driveへのコピーに対応。",
    githubUrl: "https://github.com/Miyanber/ClassroomArchiver",
    createdAt: "2026-03-31",
    show_on_top: false,
  },
  {
    id: 7,
    thumbnail: "/main/img/logo2_1.webp",
    title: "Kyoto Station Mod (Minecraft Forge)",
    overview:
      "JR京都駅をモチーフにした壁材・床タイル・天井ブラインドなどの建築資材ブロックを追加する Minecraft Forge 向け Mod。",
    appUrl: "https://www.curseforge.com/minecraft/mc-mods/kyoto-station-mod",
    githubUrl: "https://github.com/Miyanber/KyotoStationMod",
    createdAt: "2021-09-07",
    show_on_top: true,
  },
  {
    id: 8,
    thumbnail: "",
    title: "Google Classroom Notification",
    overview:
      "Google Classroom™ の更新内容（お知らせ・課題・資料）を、毎日指定時刻にまとめてメール通知する Google Apps Script 製 Web アプリケーション。",
    githubUrl: "https://github.com/Miyanber/GoogleClassroomNotification",
    createdAt: "2025-04-01",
    show_on_top: false,
  },
  {
    id: 9,
    thumbnail: "",
    title: "JRW Timetable Generator",
    overview:
      "JRおでかけネットのWeb時刻表から、かつて駅で配布されていたポケット時刻表風のシートを Excel 上に自動生成する Office アドイン。",
    githubUrl: "https://github.com/Miyanber/JRWTimeTableGenerator",
    createdAt: "2022-09-01",
    show_on_top: false,
  },
  {
    id: 10,
    thumbnail: "",
    title: "Scripts Collection",
    overview:
      "日常のタスク自動化、PDF整理、文字コード変換、Google連携、Web自動操作などをまとめた実用スクリプト集。",
    githubUrl: "https://github.com/Miyanber/Scripts",
    createdAt: "2026-03-30",
    show_on_top: false,
  },
  {
    id: 11,
    thumbnail: "/main/img/live-checkin.webp",
    title: "GDG Live Checkin",
    overview:
      "GDGやconnpassイベントの受付を高速化するWebアプリ。カメラによるQRコード即時スキャン、効果音判定、画面スリープ防止、GDG Accounts認証に対応。",
    githubUrl: "https://github.com/gdg-jp/gdgjp/tree/main/apps/live-checkin",
    appUrl: "https://checkin.gdgs.jp",
    createdAt: "2026-10-18",
    show_on_top: true,
  },
];
