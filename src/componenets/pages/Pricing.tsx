
const Pricing = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Pricing</h2>
          <p className="text-lg text-gray-600">
            Choose a plan that suits your needs. Whether you're an individual or
            a business, we've got you covered.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Basic Plan */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4">Basic</h3>
            <div className="text-4xl font-bold mb-4">Free</div>
            <p className="text-lg text-gray-600 mb-6">Ideal for students</p>

            <ul className="mb-6 space-y-3 text-gray-700">
              <li>Single version</li>
              <li>Max 1-Page Resume</li>
              <li>Predefined Layouts</li>
              <li>No Cover Letter</li>
              <li>3 Fonts</li>
              <li>30 color themes</li>
            </ul>

            <button className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300">
              Get Started
            </button>

            {/* TrustPilot */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">TrustPilot</p>
              <div className="flex justify-center mt-2">
                <img
                  src="/path/to/trustpilot-logo.png"
                  alt="Trustpilot"
                  className="h-6"
                />
                <span className="ml-2 text-sm text-green-600">
                  4.7/5 (1234 reviews)
                </span>
              </div>
            </div>
          </div>

          {/* Premium Plan (Highlighted) */}
          <div className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-lg shadow-lg p-8 relative">
            <span className="absolute top-4 right-4 bg-yellow-400 text-gray-900 font-semibold px-2 py-1 rounded">
              Most Popular
            </span>
            <h3 className="text-2xl font-semibold mb-4">Premium</h3>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <div className="text-4xl font-bold">$99</div>
                <p className="text-sm">Year</p>
              </div>
              <div>
                <div className="text-4xl font-bold">$39</div>
                <p className="text-sm">Quarter</p>
              </div>
              <div>
                <div className="text-4xl font-bold">$19</div>
                <p className="text-sm">Month</p>
              </div>
            </div>

            <ul className="mb-6 space-y-3">
              <li>Create multiple versions</li>
              <li>Max 10-page Resume/CV</li>
              <li>Custom Layout</li>
              <li>Matching Cover Letter</li>
              <li>12 Fonts</li>
              <li>40 color themes</li>
            </ul>

            <button className="w-full bg-white text-blue-500 font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              Upgrade Now
            </button>
          </div>

          {/* Monthly Plan */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4">Monthly</h3>
            <div className="text-4xl font-bold mb-4">$19</div>
            <p className="text-lg text-gray-600 mb-6">Billed monthly</p>

            <ul className="mb-6 space-y-3 text-gray-700">
              <li>Full access to all templates</li>
              <li>Create multiple resumes</li>
              <li>Export to PDF & DOCX</li>
              <li>Priority Support</li>
            </ul>

            <button className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300">
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-6">
            Novorésumé Users Love Our Resume Builder
          </h3>
          <div className="flex justify-center space-x-4">
            {/* Add your testimonial carousel here */}
            <div className="bg-white rounded-lg p-4 shadow-md text-gray-700">
              <p>"The best resume builder I’ve used. Simple and effective!"</p>
              <p className="mt-2 text-sm text-gray-500">- John Doe</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md text-gray-700">
              <p>"Helped me land my dream job. Highly recommend!"</p>
              <p className="mt-2 text-sm text-gray-500">- Jane Smith</p>
            </div>
            {/* Add more testimonials as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
