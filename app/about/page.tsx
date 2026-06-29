import { Section } from '@/components/Section';
import { Metadata } from 'next';

import Link from "next/link";

const copyBands = [
  { name: "ONE OK ROCK コピーバンド", playlistUrl: "https://open.spotify.com/..." },
  { name: "［Alexandros］ コピーバンド", playlistUrl: "https://open.spotify.com/..." },
  { name: "KANA-BOON コピーバンド", playlistUrl: "https://open.spotify.com/..." },
  { name: "米津玄師 コピーバンド", playlistUrl: "https://open.spotify.com/..." },
  { name: "SEKAI NO OWARI コピーバンド", playlistUrl: "https://open.spotify.com/..." },
];

export async function generateMetadata(): Promise<Metadata> {
  const description = "学生エンジニア Miyanber のプロフィールです。";
  const title = `About | Miyanber.com`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}

export default function About() {
  return (
    <>
      {/* ヒーローセクション / 導入 */}
      <Section className="pt-32 pb-16">
        <h1 className="text-center text-4xl font-semibold text-zinc-700 tracking-wider md:text-5xl mb-12">
          About Me
        </h1>
        <div className="max-w-2xl mx-auto text-center">
          <p className="my-6">
            <strong>フルスタック・クリエイター ｜ Python, Java, JavaScript</strong>
          </p>
          <p className="leading-8 text-zinc-600">
            「日常の不便をコードで解決する」をモットーに活動する学生エンジニアです。<br />
            Webアプリケーションの設計・開発から、Minecraft MODの制作まで、プラットフォームを問わず「動くもの」を形にしています。
          </p>
          <div className="mt-12">
            <Link href="/works" className="inline-flex items-center justify-center border border-black px-10 py-3 text-black font-title text-[1.1rem] transition duration-500 hover:bg-black hover:text-white">
              作品一覧（Works）を見る
            </Link>
          </div>
        </div>
      </Section>

      {/* 1. 所属・肩書 */}
      <Section bg="bg-[#e3f0f1]">
        <h2 className="text-center mb-12">Affiliation & Profile</h2>
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-xs">
          <ul className="flex flex-col gap-6 text-[#444] leading-8 list-none p-0 m-0">
            <li className="border-b border-zinc-100 pb-4">
              <span className="font-semibold text-zinc-800 block text-lg">GDGoC Kobe University</span>
              <p className="text-sm text-zinc-500 m-0">Google Developer Groups On Campus での活動やエンジニアリングコミュニティへの参加</p>
            </li>
            <li className="border-b border-zinc-100 pb-4">
              <span className="font-semibold text-zinc-800 block text-lg">神戸大学軽音楽部ROCK</span>
              <p className="text-sm text-zinc-500 m-0">部内でのバンド活動、ドラム担当</p>
            </li>
            <li className="border-b border-zinc-100 pb-4">
              <span className="font-semibold text-zinc-800 block text-lg">神戸大学軽音サークルSoundS</span>
              <p className="text-sm text-zinc-500 m-0">様々なコピーバンドやセッションへの参加</p>
            </li>
            <li className="border-b border-zinc-100 pb-4">
              <span className="font-semibold text-zinc-800 block text-lg">大阪大学軽音サークルBeatCrazy</span>
              <p className="text-sm text-zinc-500 m-0">他大学との交流や外部イベント・ライブでの演奏活動</p>
            </li>
          </ul>
          <p className="mt-8 text-xs text-zinc-400 text-right">※ 各活動の成果物や制作実績はWorksページに掲載しています。</p>
        </div>
      </Section>

      {/* 2. コピーバンド一覧 & Spotify プレイリスト */}
      <Section>
        <h2 className="text-center mb-4">Copy Bands & Playlists</h2>
        <p className="text-center text-zinc-500 mb-12">活動中のコピーバンドと、お気に入りの音楽・セットリスト</p>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* 左側：コピーバンド一覧 & セトリボタン */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-6 text-zinc-700 text-center md:text-left">Copy Bands</h3>
            <div className="flex flex-col gap-4">
              {copyBands.map((band, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-zinc-50 rounded-lg border border-zinc-100 gap-3">
                  <span className="font-medium text-zinc-800">{band.name}</span>
                  <a
                    href={band.playlistUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center text-xs font-semibold border border-zinc-400 text-zinc-700 px-4 py-2 rounded-full hover:bg-zinc-800 hover:text-white hover:border-zinc-800 transition duration-300 text-center"
                  >
                    Setlist Playlist
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* 右側：お好みの曲プレイリスト（1つだけiframeでプレイヤーとして残す） */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-6 text-zinc-700">Favorite Tracks</h3>
            <div className="w-full aspect-[4/5] max-h-[460px]">
              {/* ※YOUR_FAVORITE_PLAYLIST_ID を実際のSpotifyプレイリストIDに置き換えてください */}
              <iframe
                src="https://open.spotify.com/embed/playlist/YOUR_FAVORITE_PLAYLIST_ID?utm_source=generator"
                width="100%"
                height="100%"
                style={{ borderRadius: '12px', border: '0' }}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. ガジェット・機材一覧 */}
      <Section bg="bg-[#e3f0f1]">
        <h2 className="text-center mb-12">Gear & Gadget</h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* デスク周り */}
          <div className="bg-white p-8 rounded-xl shadow-xs">
            <h3 className="text-xl font-semibold mb-6 text-zinc-800 border-b-2 border-[#e3f0f1] pb-2">Desk Environment</h3>
            <dl className="grid grid-cols-3 gap-y-4 text-sm text-[#444] leading-relaxed">
              <dt className="font-semibold text-zinc-600">PC</dt>
              <dd className="col-span-2">メインノートPC / 開発用タブレットデバイス</dd>
              
              <dt className="font-semibold text-zinc-600">Monitor</dt>
              <dd className="col-span-2">外部ディスプレイモニター</dd>
              
              <dt className="font-semibold text-zinc-600">Mouse</dt>
              <dd className="col-span-2">エルゴノミクス / 高精度ワイヤレスマウス</dd>

              <dt className="font-semibold text-zinc-600">Keyboard</dt>
              <dd className="col-span-2">メカニカルキーボード</dd>
            </dl>
          </div>

          {/* ドラム機材 */}
          <div className="bg-white p-8 rounded-xl shadow-xs">
            <h3 className="text-xl font-semibold mb-6 text-zinc-800 border-b-2 border-[#e3f0f1] pb-2">Drum Gear</h3>
            <dl className="grid grid-cols-3 gap-y-4 text-sm text-[#444] leading-relaxed">
              <dt className="font-semibold text-zinc-600">Sticks</dt>
              <dd className="col-span-2">愛用ドラムスティック</dd>
              
              <dt className="font-semibold text-zinc-600">Pedal</dt>
              <dd className="col-span-2">ツインペダル / ドラムペダル</dd>
              
              <dt className="font-semibold text-zinc-600">Hardware</dt>
              <dd className="col-span-2">その他調整用ツール、チューニングキー等</dd>
            </dl>
          </div>
        </div>
      </Section>

      {/* フッター手前のContact誘導（不要なら削除してください） */}
      <section className="py-20 px-6 md:px-12 text-center">
        <Link href="/" className="text-zinc-500 hover:text-black transition duration-300">
          ← トップページに戻る
        </Link>
      </section>
    </>
  );
}