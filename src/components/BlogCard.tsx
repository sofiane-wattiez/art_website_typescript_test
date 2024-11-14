import { BlogPost } from '../types/blog'

interface BlogCardProps {
  post: BlogPost
  onClick: () => void
}

export default function BlogCard({ post, onClick }: BlogCardProps) {
  return (
    <article 
      className="bg-white rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] animate-fade-in group"
      onClick={onClick}
    >
      <div className="p-1 animate-border">
        <div className="bg-white">
          <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
          <div className="p-6">
            <time className="text-sm text-gray-500">{post.date}</time>
            <h2 className="text-xl font-semibold text-gray-900 mt-2 group-hover:text-indigo-600 transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-600 mt-2">{post.excerpt}</p>
            <button 
              className="mt-4 text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center group-hover:translate-x-2 transition-transform"
            >
              Lire la suite →
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}