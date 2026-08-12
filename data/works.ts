export interface Work {
  id: number;
  thumbnail: string;
  title: string;
  overview: string;
  order: number;
  show_on_top: boolean;
  link?: string;
}

export const works: Work[] = [
  {
    id: 1,
    thumbnail: "/main/img/oceanarrow.webp",
    title: "MYR-Trains",
    overview: "Minecraft の Real Train Mod 用モデルパック",
    link: "https://rtmaddon-search.com/myr-train/",
    order: 1,
    show_on_top: false,
  },
  {
    id: 2,
    thumbnail: "/main/img/timer.webp",
    title: "StudyTimer",
    overview: "自分用の勉強タイマー。勉強・休憩のサイクルを実践できる。",
    link: "https://studytimer.miyanber.com",
    order: 2,
    show_on_top: false,
  },
  {
    id: 3,
    thumbnail: "/main/img/スクリーンショット_2026-03-04_142709.webp",
    title: "洛南高等学校附属中学校 鉄道研究部 公式HP (2023)",
    overview:
      "2023年度に、洛南高等学校附属中学校鉄道研究部の公式HPをリニューアルしました。",
    link: "https://rakunanrail.web.fc2.com/index.html",
    order: 2,
    show_on_top: false,
  },
  // {
  //   id: 4,
  //   thumbnail: "",
  //   title: "Real Train Mod 1.21.10 対応",
  //   overview:
  //     "Minecraft の Real Train Mod の 1.21.10 NeoForge 対応版。現在制作中。",
  //   order: 5,
  //   show_on_top: false,
  // },
  {
    id: 5,
    thumbnail: "/main/img/rakunavi_logo512.webp",
    title: "洛南高等学校・附属中学校 文化祭公式ホームページ「らくなび」",
    overview:
      "洛南高等学校・附属中学校文化祭史上初の公式ホームページ。初年度から約87,600PVを獲得。",
    order: 4,
    show_on_top: true,
  },
  {
    id: 6,
    thumbnail: "/main/img/ClassroomArchiver.webp",
    title: "Classroom Archiver",
    overview: "Google Classroom™ のクラスをHTML形式でアーカイブします。",
    link: "https://github.com/Miyanber/ClassroomArchiver.git",
    order: 6,
    show_on_top: true,
  },
  {
    id: 7,
    thumbnail: "/main/img/logo2_1.webp",
    title: "Kyoto Station Mod",
    overview:
      "Minecraft の建築系 MOD。JR京都駅にありそうなブロックを追加する。",
    link: "https://www.curseforge.com/minecraft/mc-mods/kyoto-station-mod",
    order: 2,
    show_on_top: true,
  },
];
