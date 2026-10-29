import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-white py-10 text-center text-sm text-zinc-500">
      <div className="mx-auto max-w-7xl px-6 flex flex-col items-center gap-4">
        {/* SNS & Contact アイコン */}
        <div className="flex items-center gap-6 text-xl text-zinc-600">
          <a
            href="https://x.com/myr4920"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="transition-colors hover:text-black"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a
            href="https://github.com/Miyanber"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-black"
          >
            <FontAwesomeIcon icon={faSquareGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/seiya-miyazaki-90a4a2404"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-[#0A66C2]"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="mailto:seiya.miyazaki.pg@gmail.com"
            aria-label="Email"
            className="transition-colors hover:text-black"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>

        {/* Email アドレス表示 */}
        <a
          href="mailto:seiya.miyazaki.pg@gmail.com"
          className="text-xs text-zinc-500 hover:text-black transition-colors"
        >
          seiya.miyazaki.pg@gmail.com
        </a>

        {/* コピーライト */}
        <p className="text-xs text-zinc-400 m-0">
          &copy; 2026 Miyanber | Powered by Next.js
        </p>
      </div>
    </footer>
  );
}

