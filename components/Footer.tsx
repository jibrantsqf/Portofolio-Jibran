export default function Footer() {
  return (
    <footer className="py-6 text-center border-t dark:border-gray-800 mt-12">
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://github.com/jibrantsqf" target="_blank" rel="noreferrer" className="hover:text-blue-500">GitHub</a>
        <a href="https://linkedin.com/in/jibran-tsaqif" target="_blank" rel="noreferrer" className="hover:text-blue-500">LinkedIn</a>
        <a href="https://instagram.com/jibrantsaqif" target="_blank" rel="noreferrer" className="hover:text-blue-500">Instagram</a>
      </div>
      <p className="text-gray-500 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} Jibran Tsaqif. All rights reserved.
      </p>
    </footer>
  )
}