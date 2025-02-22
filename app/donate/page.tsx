import Link from 'next/link'

export default function Donate() {
  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-600">Support Our Mission</h1>
        
        <div className="bg-white shadow-lg rounded-lg p-8">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Make a Difference Today</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Your donation helps us provide vital computer literacy education to communities in need. Every contribution, no matter the size, helps us make a difference in someone's life.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Where Your Money Goes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border rounded-lg text-center">
                <h3 className="font-bold text-lg mb-2">$25</h3>
                <p className="text-gray-600">Provides learning materials for one student</p>
              </div>
              <div className="p-6 border rounded-lg text-center">
                <h3 className="font-bold text-lg mb-2">$100</h3>
                <p className="text-gray-600">Sponsors internet access for a classroom</p>
              </div>
              <div className="p-6 border rounded-lg text-center">
                <h3 className="font-bold text-lg mb-2">$500</h3>
                <p className="text-gray-600">Funds a complete computer setup</p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <p className="text-gray-700 mb-6">
              Ready to make a difference? Choose your donation amount:
            </p>
            <div className="space-x-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Donate Now
              </button>
              <Link 
                href="/about" 
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Learn More About Our Work
              </Link>
            </div>
            <p className="mt-8 text-sm text-gray-600">
              Note: This is a demo page. In a real implementation, you would integrate with a payment processor like Stripe.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
