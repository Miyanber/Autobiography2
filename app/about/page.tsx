import CustomButton from '@/components/Button';
import { Section } from '@/components/Section';
import { Metadata } from 'next';
import myrIcon from '@/app/img/icon2.webp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

import Link from "next/link";
import Image from 'next/image';
import { CopyBands } from '@/components/CopyBands';

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

export default function About() {// タブの状態管理 ('active' か 'archive' か)
  return (
    <>
      {/* ヒーローセクション / 導入 */}
      <Section className="pt-32 pb-16">
        <h1 className="text-center text-4xl font-semibold text-zinc-700 tracking-wider md:text-5xl mb-16">
          About Me
        </h1>
        
        <div className="max-w-4xl mx-auto px-4">
          {/* 経歴・メッセージセクション */}
          <div className="text-zinc-600 leading-8 mb-16 max-w-2xl mx-auto text-center">
            <p className="mb-4">神戸を拠点に活動している学生エンジニアです。</p>
            <p className="mb-4">2021年より本格的にシステム開発やWeb制作を開始。</p>
            <p className="mb-4">日常の不便をコードで解決することをモットーに、フルスタックな開発を行っています。</p>
          </div>

          {/* 写真 ＆ プロフィール詳細の2カラムレイアウト */}
          <div className="flex flex-col md:flex-row gap-12 items-center border-t border-b border-zinc-200 py-20 mb-16">
            
            {/* 左側：プロフィール画像 */}
            <div className="w-48 h-48 md:w-56 md:h-56 relative overflow-hidden bg-zinc-100 shrink-0 shadow-sm">
              <Image 
                src={myrIcon}
                alt="プロフィール写真" 
                fill 
                className="object-cover"
              />
            </div>

            {/* 右側：基本情報テーブル */}
            <div className="grow w-full">
              <h2 className="text-2xl font-semibold text-zinc-800 mt-0 mb-6 font-title tracking-wide">Miyanber <span className='text-xl'>(みやんば)</span></h2>
              
              <dl className="grid grid-cols-[120px_1fr] gap-y-4 text-sm md:text-base leading-relaxed text-zinc-600">
                <dt className="font-semibold text-zinc-500">本名</dt>
                <dd>Seiya Miyazaki</dd>

                <dt className="font-semibold text-zinc-500">所属</dt>
                <dd>神戸大学システム情報学部システム情報学科</dd>

                <dt className="font-semibold text-zinc-500">活動拠点</dt>
                <dd>神戸・大阪</dd>

                <dt className="font-semibold text-zinc-500">お問い合わせ</dt>
                <dd>
                  <a href="mailto:seiya.miyazaki.pg@gmail.com" className="hover:text-black underline underline-offset-4">
                    seiya.miyazaki.pg@gmail.com
                  </a>
                </dd>

                <dt className="font-semibold text-zinc-500">活動内容</dt>
                <dd>Webアプリケーションの設計・開発・運用、GDGoC Kobe のイベント運営等</dd>
                
                <dt className="font-semibold text-zinc-500">SNS</dt>
                <dd className="flex gap-4 text-2xl text-gray-600">
                  <a href="https://x.com/myr4920" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faXTwitter} className="hover:text-[#181717]" />
                  </a>
                  <a href="https://github.com/Miyanber" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSquareGithub} className="hover:text-[#181717]" />
                  </a>
                  <a href="https://www.linkedin.com/in/seiya-miyazaki-90a4a2404" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="hover:text-[#0A66C2]" />
                  </a>
                  {/* 必要に応じて X(Twitter) や Instagram もここに */}
                </dd>
              </dl>
            </div>
          </div>

          {/* ボタンセクション */}
          <div className="text-center">
            <p className="my-6 text-zinc-700">
              <strong>マルチスタック・クリエイター</strong>
            </p>
            <CustomButton href='/works'>
              View All Works
            </CustomButton>
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
              <p className="text-sm text-zinc-500 m-0">Google Developer Group On Campus での活動やエンジニアリングコミュニティへの参加</p>
            </li>
            <li className="border-b border-zinc-100 pb-4">
              <span className="font-semibold text-zinc-800 block text-lg">神大軽音 ROCK / SoundS / 阪大軽音 BeatCrazy</span>
              <p className="text-sm text-zinc-500 m-0">大学の枠を超えて3つの軽音団体に所属し、幅広いジャンルでドラムを演奏</p>
            </li>
          </ul>
          <p className="mt-8 text-xs text-zinc-400 text-right">※ 各活動の成果物や制作実績はWorksページに掲載しています。</p>
        </div>
      </Section>

      {/* 2. コピーバンド一覧 & Spotify プレイリスト */}
      <Section>
        <h2 className="text-center mb-4">Copy Bands & Playlists</h2>
        <p className="text-center text-zinc-500 mb-12">活動中のコピーバンドと、お気に入りの音楽・セットリスト</p>
        
        <div className='flex flex-col md:flex-row justify-around gap-8 items-center'>
          {/* 左側：コピーバンド一覧（タブ切り替え） */}
          <CopyBands></CopyBands>

          {/* 右側：お好みの曲プレイリスト（1つだけiframeでプレイヤーとして残す） */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-6 text-zinc-700 font-title">Favorite Tracks</h3>
            <div className="w-full aspect-4/5 h-120 max-w-80">
              {/* ※YOUR_FAVORITE_PLAYLIST_ID を実際のSpotifyプレイリストIDに置き換えてください */}
              <iframe
                title='My Favorite Playlist'
                src="https://open.spotify.com/embed/playlist/6YqOrZt5JmeKJE6T4luDas?utm_source=generator"
                width="100%"
                height="100%"
                className='rounded-2xl border-0'
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
            <h3 className="text-xl font-semibold mb-6 text-zinc-800 border-b-2 border-[#e3f0f1] pb-2 font-title">Desk Environment</h3>
            <dl className="grid grid-cols-3 gap-y-4 text-sm text-[#444] leading-relaxed">
              <dt className="font-semibold text-zinc-600">Home PC</dt>
              <dd className="col-span-2">Lenovo Legion 750i</dd>

              <dt className="font-semibold text-zinc-600">Main PC</dt>
              <dd className="col-span-2">Surface Pro 12インチ</dd>
              
              <dt className="font-semibold text-zinc-600">Monitor</dt>
              <dd className="col-span-2">Dell 27 Plus QHD USB-Cモニター</dd>

              <dt className="font-semibold text-zinc-600">Speaker</dt>
              <dd className="col-span-2">Pebble V3</dd>
              
              <dt className="font-semibold text-zinc-600">Mouse</dt>
              <dd className="col-span-2">ERGO M575S SP</dd>

              <dt className="font-semibold text-zinc-600">Keyboard</dt>
              <dd className="col-span-2">Keychron K8 Pro</dd>
            </dl>
          </div>

          {/* ドラム機材 */}
          <div className="bg-white p-8 rounded-xl shadow-xs">
            <h3 className="text-xl font-semibold mb-6 text-zinc-800 border-b-2 border-[#e3f0f1] pb-2 font-title">Drum Gear</h3>
            <dl className="grid grid-cols-3 gap-y-4 text-sm text-[#444] leading-relaxed">
              <dt className="font-semibold text-zinc-600">Sticks</dt>
              <dd className="col-span-2">Vic Firth A</dd>
              
              <dt className="font-semibold text-zinc-600">Pedal</dt>
              <dd className="col-span-2">Pearl Demonator P-932</dd>
              
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