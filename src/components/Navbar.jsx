import NavLogo from '../assets/insight.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
    <nav className="flex flex-wrap items-center justify-between bg-[#fc8a23] px-4 py-2">
      <Link to="/">
        <div className="flex items-center">
          <img
            src={NavLogo}
            alt="LeetInsights Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 mr-2"
          />
          <p className="text-2xl sm:text-3xl font-bold text-black">LeetInsight</p>
        </div>
      </Link>

      <div className="flex items-center gap-4 mt-2 sm:mt-0">
        <a
          href="https://github.com/AritraC1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-black text-xl sm:text-2xl"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://x.com/Aritra_C1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-black text-xl sm:text-2xl"
        >
          <i className="fa-brands fa-square-x-twitter"></i>
        </a>
      </div>
    </nav>
    </>
  );
}
