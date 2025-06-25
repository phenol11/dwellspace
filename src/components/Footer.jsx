export default function Footer() {
  return (
    <footer className="bg-[#1e293b] text-gray-300 text-center py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
        <p>&copy; {new Date().getFullYear()} EstatePro. All rights reserved.</p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a href="#" className="hover:text-gray-300">
            Privacy
          </a>
          <a href="#" className="hover:text-gray-300">
            Terms
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
