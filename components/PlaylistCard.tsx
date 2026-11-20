import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCirclePlus, faPlay } from '@fortawesome/free-solid-svg-icons';
import coverImage from '@/app/apple-touch-icon.png';
import type { PlaylistInfo } from '@/data/playlist';

/** Spotify 埋め込み風のコンパクトな縦長プレイリストプレビューカード（YouTube Music 用） */
export function PlaylistCard({ title, owner, url }: PlaylistInfo) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title}（${owner}）をYouTube Musicで開く`}
      className="group flex w-full max-w-80 sm:w-80 md:h-120 flex-col overflow-hidden rounded-2xl bg-[#004f6b] text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00a2e8]"
    >
      {/* 上部：情報・再生ボタンエリア */}
      <div className="flex flex-col p-5 md:p-6">
        <div className="flex justify-end">
          <FontAwesomeIcon icon={faYoutube} className="size-6 text-white" />
        </div>

        <div className="mt-1 flex items-center gap-4">
          <Image
            src={coverImage}
            alt=""
            width={96}
            height={96}
            className="size-24 shrink-0 rounded-xl bg-[#00a2e8] object-cover"
          />
          <div className="min-w-0 flex-1">
            <p className="truncate text-lg font-bold leading-snug text-white">{title}</p>
            <p className="mt-1 text-sm text-[#7fd4f5]">{owner}</p>
            <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-white/90">
              <FontAwesomeIcon icon={faCirclePlus} className="size-3.5" />
              <span>YouTube Music で開く</span>
            </p>
          </div>
        </div>

        <div className="mt-4 md:mt-6 flex justify-end">
          <span className="flex size-11 items-center justify-center rounded-full bg-white text-[#004f6b] transition-transform group-hover:scale-110">
            <FontAwesomeIcon icon={faPlay} className="ml-0.5 size-4" />
          </span>
        </div>
      </div>

      {/* 下部：PC表示時のみ表示する縦長エリア（スマホでは非表示にしてコンパクト化） */}
      <div className="hidden md:flex md:flex-1 flex-col items-center justify-center bg-[#003f56] px-6 text-center">
        <p className="text-sm font-semibold text-white/90">YouTube Music プレイリスト</p>
        <p className="mt-2 text-xs leading-relaxed text-[#7fd4f5]/85">
          クリックすると YouTube Music で
          <br />
          プレイリストを開きます
        </p>
      </div>
    </a>
  );
}
