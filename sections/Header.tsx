
/** @jsx h */
import { h } from "preact";

export default function Header() {
  return (
    <header class="bg-gray-800 text-white">
      <div class="container mx-auto flex justify-between items-center p-4">
        <a href="/" class="logo">
          <img src="/logo.svg" alt="Primordial Groove Logo" class="h-8" />
        </a>
        <nav class="hidden md:flex">
          <ul class="flex space-x-4">
            <li><a href="#" class="hover:text-gray-400">About</a></li>
            <li><a href="#" class="hover:text-gray-400">Events</a></li>
            <li><a href="#" class="hover:text-gray-400">Join Us</a></li>
          </ul>
        </nav>
        <div>
          <p>Hello from decopilot</p>
        </div>
      </div>
      <nav id="mobile-menu" class="hidden md:hidden">
        <ul class="flex flex-col space-y-4 p-4">
          <li><a href="#" class="hover:text-gray-400">About</a></li>
          <li><a href="#" class="hover:text-gray-400">Events</a></li>
          <li><a href="#" class="hover:text-gray-400">Join Us</a></li>
        </ul>
      </nav>
    </header>
  );
}
