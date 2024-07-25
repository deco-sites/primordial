
export default function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="/" className="logo">
          <img
            src="/logo.svg"
            alt="Primordial Groove Logo"
            className="h-8"
          />
        </a>
        <nav className="hidden md:flex">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Join Us
              </a>
            </li>
          </ul>
        </nav>
        <img
          src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e"
          alt="Hero Image"
          className="w-48 h-48"
        />
      </div>
    </header>
  );
}

