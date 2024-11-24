

// app/page.tsx

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
   

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold">
            Track All Your Couriers in One Place
          </h1>
          <p className="mt-4 text-lg">
            Never lose track of your packages. Support for multiple courier services, real-time updates, and much more.
          </p>
          <div className="mt-8">
            <input
              type="text"
              placeholder="Enter Tracking Number"
              className="p-4 rounded-l-md text-gray-800 w-80"
            />
            <button className="bg-yellow-400 text-gray-800 px-6 py-4 rounded-r-md hover:bg-yellow-500">
              Track Now
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center">Features</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-blue-600">Real-Time Updates</h3>
              <p className="mt-4">Stay informed with real-time tracking for all your packages.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-blue-600">Multi-Company Support</h3>
              <p className="mt-4">Track packages from all major courier companies in one place.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-blue-600">User-Friendly Dashboard</h3>
              <p className="mt-4">Easily manage and monitor all your shipments with an intuitive interface.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Companies Section */}
      <section id="companies" className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center">Supported Companies</h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {["FedEx", "DHL", "UPS", "Leopards", "TCS", "Blue Dart"].map((company) => (
              <div
                key={company}
                className="p-6 bg-white rounded-lg shadow-md flex items-center justify-center text-xl font-semibold"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center">What Our Users Say</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
              <p>
                “This platform has simplified my life! I can track all my packages in one place. Amazing service!”
              </p>
              <p className="mt-4 font-semibold text-blue-600">- John Doe</p>
            </div>
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
              <p>
                “Reliable and fast. I love the real-time updates and support for all major couriers.”
              </p>
              <p className="mt-4 font-semibold text-blue-600">- Sarah Lee</p>
            </div>
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
              <p>
                “A must-have tool for anyone who shops online frequently. Highly recommended!”
              </p>
              <p className="mt-4 font-semibold text-blue-600">- Ahmed Khan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-10">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Courier Tracker. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#features" className="hover:text-white">
              Features
            </a>
            <a href="#companies" className="hover:text-white">
              Supported Companies
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
