export interface PlaylistInfo {
  title: string;
  owner: string;
  url: string;
}

// Favorite Tracks に表示する YouTube Music プレイリスト（手動管理）
export const favoritePlaylist: PlaylistInfo = {
  title: "Miyanber's Playlist",
  owner: "Miyanber",
  url: "https://music.youtube.com/playlist?list=PLdeheTDF4WTo&si=pejv7k6d83A1NffP",
};
