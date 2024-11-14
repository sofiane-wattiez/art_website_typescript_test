import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-indigo-600">
              ArtGallery
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/shop" className="text-gray-700 hover:text-indigo-600">
              Boutique
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-indigo-600">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}