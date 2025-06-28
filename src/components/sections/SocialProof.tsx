
import { Card, CardContent } from '@/components/ui/card';

export const SocialProof = () => {
  const certifications = [
    {
      name: "American Dental Association",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      description: "Certified Member"
    },
    {
      name: "Academy of General Dentistry",
      logo: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      description: "Fellowship Award"
    },
    {
      name: "International Congress",
      logo: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      description: "Oral Implantology"
    },
    {
      name: "State Dental Board",
      logo: "https://images.unsplash.com/photo-1559757175-0eb30cd8ece3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      description: "Licensed Practice"
    }
  ];

  const brands = [
    "Straumann", "Nobel Biocare", "3M ESPE", "Dentsply Sirona", 
    "Planmeca", "KaVo Kerr", "Philips Zoom", "Invisalign"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Certifications */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted & Certified Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence is recognized by leading dental organizations and institutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <img 
                      src={cert.logo}
                      alt={cert.name}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{cert.name}</h3>
                  <p className="text-xs text-gray-500">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partner Brands */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Premium Brands We Trust
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We partner with the world's leading dental technology and material brands to ensure 
              the highest quality care for our patients.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {brands.map((brand, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 rounded-lg p-4 h-20 flex items-center justify-center hover:bg-blue-50 transition-colors duration-300">
                  <span className="text-gray-600 font-medium text-sm">{brand}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Happy Patients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Emergency Care</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
