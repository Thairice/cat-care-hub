export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-gray-300 mb-2">
            © {currentYear} Cat Care & Education Hub. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Your trusted resource for cat care tips, behavior insights, and expert recommendations.
          </p>
        </div>
      </div>
    </footer>
  );
}
