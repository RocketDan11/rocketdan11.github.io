export default function About() {
  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-600">About Our Mission</h1>
        
        <div className="bg-white shadow-lg rounded-lg p-8">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Spread the World is a non-profit organization dedicated to bringing computer literacy and digital education to disenfranchised communities in Mesoamerica. We believe that access to technology and digital skills is crucial for economic empowerment and social mobility in today's interconnected world.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="text-3xl font-bold text-blue-600 mb-2">1,000+</h3>
                <p className="text-gray-700">Students Taught</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="text-3xl font-bold text-blue-600 mb-2">15</h3>
                <p className="text-gray-700">Communities Served</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="text-3xl font-bold text-blue-600 mb-2">5</h3>
                <p className="text-gray-700">Countries Reached</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How You Can Help</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Your support helps us provide computers, internet access, and educational resources to communities in need. Every contribution makes a difference in someone's life.
            </p>
            <div className="text-center">
              <a 
                href="/donate" 
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Support Our Mission
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
