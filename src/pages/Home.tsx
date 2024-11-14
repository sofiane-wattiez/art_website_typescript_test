export default function Home() {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
          Galerie d'Art
        </h1>
        <p className="text-xl text-gray-600 mb-8 animate-slide-up">
          Découvrez notre collection unique de peintures et plongez dans l'univers de l'art à travers notre blog
        </p>
        <div className="relative h-64 rounded-xl overflow-hidden mb-8 group">
          <img 
            src="https://images.unsplash.com/photo-1581337872241-f8b507c84626"
            alt="Galerie d'art"
            className="w-full h-full object-cover transform transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity group-hover:bg-opacity-20"></div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="p-1 animate-border">
          <div className="bg-white p-8 rounded-xl">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Notre Boutique</h2>
            <p className="text-gray-600 mb-6">
              Explorez notre collection soigneusement sélectionnée de peintures originales. 
              Chaque œuvre raconte une histoire unique et apportera une touche d'élégance à votre intérieur.
            </p>
            <a 
              href="/shop" 
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all hover:scale-105 hover:shadow-lg"
            >
              Découvrir la boutique
            </a>
          </div>
        </div>

        <div className="p-1 animate-border">
          <div className="bg-white p-8 rounded-xl">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Notre Blog</h2>
            <p className="text-gray-600 mb-6">
              Immergez-vous dans le monde de l'art à travers nos articles, tutoriels et actualités. 
              Partagez notre passion et développez vos connaissances artistiques.
            </p>
            <a 
              href="/blog" 
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all hover:scale-105 hover:shadow-lg"
            >
              Lire nos articles
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}