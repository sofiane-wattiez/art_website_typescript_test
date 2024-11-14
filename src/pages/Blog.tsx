import { useState } from 'react'
import BlogCard from '../components/BlogCard'
import { blogPosts } from '../data/blogPosts'
import type { BlogPost } from '../types/blog'

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post)
  }

  if (selectedPost) {
    return (
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={() => setSelectedPost(null)}
          className="mb-4 text-indigo-600 hover:text-indigo-700 font-medium flex items-center"
        >
          ← Retour aux articles
        </button>
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-64 object-cover" />
          <div className="p-8">
            <time className="text-sm text-gray-500">{selectedPost.date}</time>
            <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-4">{selectedPost.title}</h1>
            <div className="prose prose-indigo max-w-none">
              <p className="text-gray-600">{selectedPost.content || selectedPost.excerpt}</p>
            </div>
          </div>
        </article>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Notre Blog</h1>
        <p className="text-gray-600 mt-2">Découvrez nos derniers articles sur l'art et la peinture</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogCard
            key={post.id}
            post={post}
            onClick={() => handlePostClick(post)}
          />
        ))}
      </div>
    </div>
  )
}