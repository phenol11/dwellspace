export default function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-100 text-center py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} DwellSpace. All rights reserved.
        </p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a href="#" className="hover:text-amber-400">
            Privacy
          </a>
          <a href="#" className="hover:text-amber-400">
            Terms
          </a>
          <a href="#" className="hover:text-amber-400">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
