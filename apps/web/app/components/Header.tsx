import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
              Cat Care & Education Hub
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/care-tasks"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Care Tasks
            </Link>
            <Link
              href="/behavior"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Behavior
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Products
            </Link>
          </div>
          {/* Mobile menu button - functionality to be added later if needed */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
