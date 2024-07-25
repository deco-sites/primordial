import { h } from "preact";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="/" className="logo">
          <img src="/logo.svg" alt="Primordial Groove Logo" className="h-8" />
        </a>
        <nav className="hidden md:flex">
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-400">About</a></li>
            <li><a href="#" className="hover:text-gray-400">Events</a></li>
            <li><a href="#" className="hover:text-gray-400">Join Us</a></li>
          </ul>
        </nav>
        <div>
          <p>Hello from decopilot</p>
        </div>
      </div>
      <nav id="mobile-menu" className="hidden md:hidden">
        <ul className="flex flex-col space-y-4 p-4">
          <li><a href="#" className="hover:text-gray-400">About</a></li>
          <li><a href="#" className="hover:text-gray-400">Events</a></li>
          <li><a href="#" className="hover:text-gray-400">Join Us</a></li>
        </ul>
      </nav>
    </header>
  );
}