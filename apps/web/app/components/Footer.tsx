export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-auto overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Cat Care Hub
            </h3>
          </div>
          <p className="text-gray-300 mb-2 text-lg">
            © {currentYear} Cat Care & Education Hub. All rights reserved.
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Your trusted resource for cat care tips, behavior insights, and expert recommendations.
          </p>
        </div>
      </div>
    </footer>
  );
}
