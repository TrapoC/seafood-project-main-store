import React from "react";

const PersonalShopping: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              🛍 Personal Shopping Service
            </h2>
          </div>

          <div className="prose max-w-none">
            <p className="mb-6">
              At Shinung Square, we understand that market runs can be
              stressful, especially with busy schedules or long distances.
              That's why we've introduced our Personal Shopping Service,
              designed to make food shopping easy, fast, and reliable.
            </p>

            <p className="mb-6">
              With this service, you simply send us a list of the food items you
              wish to buy from Oron crayfish, fresh and dried seafood, local
              spices, soups, vegetables, and groceries — and our team will
              handle the rest.
            </p>

            <p className="mb-8">
              We personally source only the best quality products from trusted
              markets, package them carefully, and deliver them straight to your
              doorstep or preferred destination. Whether you're shopping for
              your household, a loved one, or restocking your kitchen, we ensure
              authenticity, hygiene, and timely delivery every time.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-xl font-semibold mb-4">
                Why Choose Shinung Square Personal Shopping?
              </h3>
              <ul className="list-none space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Quality sourcing from trusted markets
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Transparent pricing and smooth communication
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Stress-free market experience
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Nationwide and international delivery options
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Friendly, reliable customer support
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">How It Works:</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    1
                  </span>
                  <p>Send us your shopping list via WhatsApp or DM</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    2
                  </span>
                  <p>Get a quotation and confirm your order</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    3
                  </span>
                  <p>We shop, package, and deliver while you relax</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalShopping;
