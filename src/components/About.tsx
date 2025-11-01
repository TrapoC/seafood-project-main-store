import { Fish, Leaf, UtensilsCrossed } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Catering Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At Shinung Square, we specialize in providing top-notch catering services for all occasions. Whether you're planning a wedding, corporate event, or private party, our team is dedicated to delivering an unforgettable culinary experience. We offer a diverse menu featuring the finest seafood, traditional African spices, and local delicacies from

Cross River and Akwa Ibom Local Delicacies
Afang Soup, Editang, Atama, Edikiankong, Fisherman Soup, Seafood Okro, White Soup, Ekpang Nkukwo 

Phone Number: 08126091840

Facebook, Instagram, WhatsApp, Tiktok.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Fish className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Seafood</h3>
            <p className="text-gray-600">
              Fresh, high-quality seafood sourced directly from trusted suppliers. From crayfish to prawns, we have it all.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Leaf className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Natural Spices</h3>
            <p className="text-gray-600">
              Authentic African spices and ingredients that bring traditional flavors to your kitchen.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <UtensilsCrossed className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Catering Services</h3>
            <p className="text-gray-600">
              Professional catering for weddings, parties, and corporate events. Let us make your occasion special.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
